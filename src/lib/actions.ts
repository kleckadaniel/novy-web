"use server";

import { Resend } from "resend";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Vyplňte prosím všechna povinná pole." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Zadejte prosím platnou e-mailovou adresu." };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_EMAIL = process.env.FROM_EMAIL;

  // Dev fallback: ať se nezasekneš lokálně, když env ještě nejsou nastavené
  if (!RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[Contact Form] Dev mode - email not sent. Missing env:", {
        RESEND_API_KEY: Boolean(RESEND_API_KEY),
        TO_EMAIL: Boolean(TO_EMAIL),
        FROM_EMAIL: Boolean(FROM_EMAIL),
      });
      console.log("[Contact Form] Payload:", { name, email, message });

      return {
        status: "success",
        message: "Zpráva odeslána. Ozvu se vám co nejdříve.",
      };
    }

    return {
      status: "error",
      message: "Chybí nastavení odesílání e-mailu (RESEND).",
    };
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "Nová poptávka z webu danielklecka.cz",
      replyTo: email,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">Nová poptávka z webu</h2>
          <p style="margin: 0 0 8px;"><strong>Jméno:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 8px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 12px 0 6px;"><strong>Zpráva:</strong></p>
          <div style="white-space: pre-wrap; background: #f6f6f6; padding: 12px; border-radius: 8px;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Zpráva odeslána. Ozvu se vám co nejdříve.",
    };
  } catch (err) {
    console.error("[Contact Form] Resend send error:", err);

    return {
      status: "error",
      message: "Nepodařilo se odeslat zprávu. Zkuste to prosím později.",
    };
  }
}

// Základní ochrana proti vložení HTML do mailu
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
