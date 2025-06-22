import type { Express } from "express";
import { createServer, type Server } from "http";
import { handler as sendEmailHandler } from "../pages/api/send-email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint using existing Vercel-style handler
  app.post("/api/contact", async (req, res) => {
    try {
      // The handler expects `req` and `res` like Next.js — just call it
      await sendEmailHandler(req, res);
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
