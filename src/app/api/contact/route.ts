import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// This route sends an email to the site owner with the submitted form data.
// Configure credentials using environment variables.
// Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Transporter from env; for local dev, you can use Mailtrap or similar
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL || "gulshantomar897@gmail.com";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // Verify SMTP connectivity/credentials up front to produce clearer errors
    try {
      await transporter.verify();
    } catch (e: unknown) {
      const err = e as { code?: string; responseCode?: number; message?: string };
      if (err?.code === "EAUTH" || err?.responseCode === 535) {
        return NextResponse.json(
          { error: "Invalid SMTP credentials. Check SMTP_USER/SMTP_PASS (and host/port)." },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: "Unable to connect to SMTP server. Verify SMTP_HOST/PORT and network access." },
        { status: 500 }
      );
    }

    const subject = `New message from ${name}`;
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error", err);
    // Provide a slightly more descriptive message where possible
    const anyErr = err as { code?: string; responseCode?: number; message?: string };
    let msg = "Failed to send";
    if (anyErr?.code === "EAUTH" || anyErr?.responseCode === 535) {
      msg = "Invalid SMTP credentials. Check SMTP_USER/SMTP_PASS (and host/port).";
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
