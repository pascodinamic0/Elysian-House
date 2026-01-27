import { NextRequest, NextResponse } from "next/server";

interface RegistrationData {
  name: string;
  email: string;
  message?: string;
  source?: string;
  consent: boolean;
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

    // Log the registration (in production, save to database)
    console.log("New registration:", {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message?.trim() || null,
      source: data.source || null,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, implement:
    // 1. Database storage (e.g., Supabase, Prisma)
    // 2. Email service integration (e.g., ConvertKit, Resend)
    // 3. Capacity checking and waitlist logic
    // 4. Duplicate email handling

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

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
