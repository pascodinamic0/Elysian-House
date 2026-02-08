import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  hoping?: string;
  anything?: string;
  contactMethods?: string[];
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
  const hopingDisplay = data.hoping || "Not provided";
  const anythingDisplay = data.anything || "Not provided";
  const contactDisplay = data.contactMethods?.length 
    ? data.contactMethods.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(", ")
    : "Not specified";
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Workshop Registration</title>
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
            <h1>New Workshop Registration</h1>
            <p>Someone has registered for the Transform & Thrive Workshop.</p>
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
            <div class="label">Phone Number:</div>
            <div class="value">${data.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Preferred Contact Method:</div>
            <div class="value">${contactDisplay}</div>
          </div>
          
          <div class="field">
            <div class="label">What they're hoping to get out of this session:</div>
            <div class="message-box">${hopingDisplay}</div>
          </div>
          
          <div class="field">
            <div class="label">Anything to know before meeting:</div>
            <div class="message-box">${anythingDisplay}</div>
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

// Map contact method values to exact Google Form option text
const CONTACT_METHOD_MAP: Record<string, string> = {
  whatsapp: 'WhatsApp',
  telephone: 'Telephone',
  email: 'Email',
};

/**
 * Submit to Google Form (for Google Sheets)
 */
async function submitToGoogleForm(data: RegistrationData): Promise<void> {
  const formData = new URLSearchParams();
  
  // Google Form has "Collect email addresses" enabled, so we need emailAddress param
  formData.append('emailAddress', data.email);
  
  formData.append(GOOGLE_FORM_FIELDS.name, data.name);
  formData.append(GOOGLE_FORM_FIELDS.email, data.email);
  formData.append(GOOGLE_FORM_FIELDS.phone, data.phone);
  
  if (data.hoping) {
    formData.append(GOOGLE_FORM_FIELDS.hopingToGet, data.hoping);
  }
  
  if (data.anything) {
    formData.append(GOOGLE_FORM_FIELDS.anythingToKnow, data.anything);
  }
  
  // Consent checkbox - only append if true (checkbox value is "Yes")
  if (data.consent) {
    formData.append(GOOGLE_FORM_FIELDS.consent, 'Yes');
  }
  
  // Contact methods - append each selected method
  if (data.contactMethods?.length) {
    for (const method of data.contactMethods) {
      const googleValue = CONTACT_METHOD_MAP[method];
      if (googleValue) {
        formData.append(GOOGLE_FORM_FIELDS.contactMethod, googleValue);
      }
    }
  }

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

    if (!data.phone || typeof data.phone !== "string" || !data.phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required" },
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
    const cleanData: RegistrationData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      hoping: data.hoping?.trim() || "",
      anything: data.anything?.trim() || "",
      contactMethods: data.contactMethods || [],
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
