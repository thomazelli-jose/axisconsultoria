import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  type: 'consultancy' | 'training';
  formData: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, formData }: ContactRequest = await req.json();
    
    let subject = "";
    let htmlContent = "";
    
    if (type === 'consultancy') {
      subject = "Nova Solicitação de Consultoria - Axis Consultoria";
      htmlContent = `
        <h2>Nova Solicitação de Consultoria</h2>
        <h3>Dados do Solicitante:</h3>
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Empresa:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefone:</strong> ${formData.phone || 'Não informado'}</p>
        <h3>Descrição da Necessidade:</h3>
        <p>${formData.message}</p>
        <hr>
        <p><small>Solicitação enviada em: ${new Date().toLocaleString('pt-BR')}</small></p>
      `;
    } else {
      subject = "Nova Solicitação de Treinamento - Axis Consultoria";
      htmlContent = `
        <h2>Nova Solicitação de Treinamento</h2>
        <h3>Dados do Solicitante:</h3>
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Empresa:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefone:</strong> ${formData.phone || 'Não informado'}</p>
        <h3>Detalhes do Treinamento:</h3>
        <p><strong>Tipo de Treinamento:</strong> ${formData.trainingType}</p>
        <p><strong>Data Preferencial:</strong> ${formData.date || 'Não informado'}</p>
        <p><strong>Número de Participantes:</strong> ${formData.participants || 'Não informado'}</p>
        <hr>
        <p><small>Solicitação enviada em: ${new Date().toLocaleString('pt-BR')}</small></p>
      `;
    }

    console.log(`Sending ${type} email to jose.thomazelli@gmail.com`);

    const emailResponse = await resend.emails.send({
      from: "Axis Consultoria <onboarding@resend.dev>",
      to: ["jose.thomazelli@gmail.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);