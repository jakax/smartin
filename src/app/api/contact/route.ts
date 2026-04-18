import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("API Key present:", !!process.env.RESEND_API_KEY);
  const { name, email, context } = await req.json();

  try {
    await resend.emails.send({
      from: "SmartIn Contact <onboarding@resend.dev>",
      to: ["joaquinocampo18@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${context}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}