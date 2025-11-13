import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Check if Resend API key is configured
    if (!Deno.env.get("RESEND_API_KEY")) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service is not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate request body
    let body: ContactEmailRequest;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, or message" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Trim and validate input
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return new Response(
        JSON.stringify({ error: "All fields are required and cannot be empty" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!isValidEmail(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate length limits
    if (trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name is too long (max 100 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (trimmedMessage.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long (max 5000 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact email from:", trimmedEmail, "Name:", trimmedName);

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Axiom Contact <onboarding@resend.dev>",
      to: ["aluaxiom@gmail.com"],
      reply_to: trimmedEmail,
      subject: `New Contact Message from ${escapeHtml(trimmedName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #4ade80; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${escapeHtml(trimmedName)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">
              ${escapeHtml(trimmedMessage).replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    });

    // Check if email was sent successfully
    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return new Response(
        JSON.stringify({ error: emailResponse.error.message || "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: emailResponse.data?.id,
        message: "Email sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred while sending the email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
