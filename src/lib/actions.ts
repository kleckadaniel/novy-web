"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { status: "error", message: "Vyplňte prosím všechna povinná pole." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Zadejte prosím platnou e-mailovou adresu." };
  }

  // In development (no SMTP env vars), log to console and return success.
  // In production, configure the following environment variables in .env.local:
  //   SMTP_HOST=smtp.gmail.com
  //   SMTP_PORT=587
  //   SMTP_USER=your-sender@gmail.com
  //   SMTP_PASS=your-app-password   (generate at myaccount.google.com/apppasswords)
  //   TO_EMAIL=kleckadaniel@gmail.com
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("[Contact Form] Dev mode — email not sent. Payload:", {
      name,
      email,
      message,
    });
    return {
      status: "success",
      message: "Zpráva odeslána. Ozvu se vám co nejdříve.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.TO_EMAIL ?? "kleckadaniel@gmail.com",
      subject: `Nová poptávka z webu danielklecka.cz`,
      text: `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return {
      status: "success",
      message: "Zpráva odeslána. Ozvu se vám co nejdříve.",
    };
  } catch (err) {
    console.error("[Contact Form] SMTP error:", err);
    return {
      status: "error",
      message: "Něco se pokazilo. Zkuste to prosím znovu nebo mi napište přímo na e-mail.",
    };
  }
}
