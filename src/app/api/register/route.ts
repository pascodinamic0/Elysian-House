import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface RegistrationData {
  name: string;
  email: string;
  message?: string;
  source?: string;
  consent: boolean;
}

// Google Form configuration (Transform & Thrive Workshop)
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeMPWJ_9fnTT3Ve32bLf21Xm6LJA_UZ5B99v6dzRp8fIz-yfQ/formResponse';

const GOOGLE_FORM_FIELDS = {
  name: 'entry.2092238618',
  email: 'entry.1556369182',
  phone: 'entry.119911029',
  hopingToGet: 'entry.599513454',
  anythingToKnow: 'entry.1273124294',
  consent: 'entry.2109138769',
  contactMethod: 'entry.1100517712',
} as const;

/**
 * Generate HTML email template for registration notification
 */
function generateEmailTemplate(data: RegistrationData): string {
  const sourceDisplay = data.source || "Not specified";
  const messageDisplay = data.message || "No additional message provided";
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Event Registration</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1A1A1A; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #FDF2F4; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: 600; color: #4A4A4A; }
          .value { margin-top: 5px; }
          .message-box { background: #FDF2F4; padding: 15px; border-radius: 6px; border-left: 4px solid #E84A5F; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Event Registration</h1>
            <p>Someone has registered for the Bloom gathering event.</p>
          </div>
          
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">How they heard about us:</div>
            <div class="value">${sourceDisplay}</div>
          </div>
          
          <div class="field">
            <div class="label">What brings them to this gathering:</div>
            <div class="message-box">${messageDisplay}</div>
          </div>
          
          <div class="field">
            <div class="label">Registration Time:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Submit to Google Form (for Google Sheets)
 * Maps website form fields to Google Form fields:
 * - name → Name
 * - email → Email
 * - message → "What are you hoping to get out of this session?"
 * - consent → "I understand this is a half day..." checkbox (value: "Yes")
 * - Contact method defaults to "Email"
 * - Phone is left empty (not collected on website form)
 */
async function submitToGoogleForm(data: RegistrationData): Promise<void> {
  const formData = new URLSearchParams();
  formData.append(GOOGLE_FORM_FIELDS.name, data.name);
  formData.append(GOOGLE_FORM_FIELDS.email, data.email);
  
  // Map "message" (what brings you) to "What are you hoping to get out of this session?"
  if (data.message) {
    formData.append(GOOGLE_FORM_FIELDS.hopingToGet, data.message);
  }
  
  // Consent checkbox - only append if true (checkbox value is "Yes")
  if (data.consent) {
    formData.append(GOOGLE_FORM_FIELDS.consent, 'Yes');
  }
  
  // Default contact method to Email since that's what we have
  formData.append(GOOGLE_FORM_FIELDS.contactMethod, 'Email');

  await fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });
}

/**
 * Send notification email via Resend
 */
async function sendNotificationEmail(data: RegistrationData): Promise<void> {
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "Zitadeine@gmail.com";
  const fromEmail = process.env.FROM_EMAIL || "noreply@resend.dev";
  
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  // Initialize Resend lazily to avoid build-time errors
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: fromEmail,
    to: [notificationEmail],
    subject: `New Event Registration: ${data.name}`,
    html: generateEmailTemplate(data),
  });
}

/**
 * POST /api/register
 * 
 * Handles event registration submissions.
 * In production, this would:
 * 1. Validate the data
 * 2. Store in a database
 * 3. Send confirmation email via ConvertKit/similar
 * 4. Add to waitlist if capacity reached
 */
export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json();

    // Validation
    if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!data.email || typeof data.email !== "string" || !data.email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!data.consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Prepare clean data
    const cleanData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message?.trim() || "",
      source: data.source || "",
      consent: data.consent,
    };

    // Log the registration (in production, save to database)
    console.log("New registration:", {
      ...cleanData,
      timestamp: new Date().toISOString(),
    });

    // Submit to Google Form (for Google Sheets)
    try {
      await submitToGoogleForm(cleanData);
      console.log("Google Form submission successful");
    } catch (googleError) {
      console.error("Failed to submit to Google Form:", googleError);
      // Continue with registration even if Google Form fails
    }

    // Send notification email via Resend
    try {
      await sendNotificationEmail(cleanData);
      console.log("Notification email sent successfully");
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
      // Continue with registration even if email fails
    }

    // TODO: In production, implement:
    // 1. Database storage (e.g., Supabase, Prisma)
    // 3. Capacity checking and waitlist logic
    // 4. Duplicate email handling

    return NextResponse.json(
      { 
        success: true, 
        message: "Registration received successfully" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to process registration" },
      { status: 500 }
    );
  }
}
