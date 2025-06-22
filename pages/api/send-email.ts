// pages/api/send-email.ts or server/sendEmailHandler.ts
import type { Request, Response } from "express";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

export async function handler(req: Request, res: Response): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY || "API_KEY",
      // url: "https://api.eu.mailgun.net", // use this if you’re in EU region
    });

    const domain = process.env.MAILGUN_DOMAIN || "sandboxXYZ.mailgun.org";

    const data = await mg.messages.create(domain, {
      from: `Portfolio Contact <postmaster@${domain}>`,
      to: ["Deep Mondal <dm7041979@gmail.com>"], 
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      id: data.id,   
    });

  } catch (error: any) {
    console.error("Mailgun Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
