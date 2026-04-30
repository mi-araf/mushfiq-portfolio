import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isValidEmail(email = "") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
    try {
        const body = await request.json();

        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const message = String(body.message || "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;
        const shouldSendAutoReply = process.env.CONTACT_SEND_AUTO_REPLY !== "false";

        if (!process.env.RESEND_API_KEY || !receiverEmail || !fromEmail) {
            return NextResponse.json(
                { error: "Email service is not configured properly." },
                { status: 500 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

        const ownerEmail = await resend.emails.send({
            from: fromEmail,
            to: receiverEmail,
            replyTo: email,
            subject: `Portfolio inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
                    <h2 style="margin: 0 0 16px;">New portfolio message</h2>

                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>

                    <p style="margin-top: 18px;"><strong>Message:</strong></p>
                    <div style="padding: 16px; border-radius: 12px; background: #f3f4f6;">
                        ${safeMessage}
                    </div>
                </div>
            `
        });

        if (ownerEmail.error) {
            console.error("Owner email failed:", ownerEmail.error);

            return NextResponse.json(
                {
                    error:
                        ownerEmail.error.message ||
                        "Could not send the message to portfolio owner."
                },
                { status: 500 }
            );
        }

        let autoReplySent = false;

        if (shouldSendAutoReply) {
            const visitorEmail = await resend.emails.send({
                from: fromEmail,
                to: email,
                replyTo: receiverEmail,
                subject: "Thanks for contacting Mushfiq Iqbal Araf",
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
                        <h2 style="margin: 0 0 16px;">Message received 🚀</h2>

                        <p>Hi ${safeName},</p>

                        <p>
                            Thanks for reaching out. I received your message and will get back to you soon.
                        </p>

                        <p style="margin-top: 18px;"><strong>Your message:</strong></p>
                        <div style="padding: 16px; border-radius: 12px; background: #f3f4f6;">
                            ${safeMessage}
                        </div>

                        <p style="margin-top: 24px;">
                            Best,<br />
                            Mushfiq Iqbal Araf
                        </p>
                    </div>
                `
            });

            if (visitorEmail.error) {
                console.error("Visitor auto-reply failed:", visitorEmail.error);
            } else {
                autoReplySent = true;
            }
        }

        return NextResponse.json({
            success: true,
            message: "Message sent successfully.",
            autoReplySent
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}