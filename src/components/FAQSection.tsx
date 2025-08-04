import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo funciona la entrega de productos digitales?",
      answer: "Una vez confirmado el pago, recibirás tu producto digital al instante en tu email. Todos nuestros productos son códigos originales y válidos."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y criptomonedas. Todos los pagos son procesados de forma segura."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, todos nuestros productos tienen garantía de funcionalidad. Si tienes algún problema, nuestro soporte te ayudará a solucionarlo."
    },
    {
      question: "¿Puedo conseguir reembolso si no funciona?",
      answer: "Por supuesto. Si el producto no funciona correctamente, ofrecemos reembolso completo o reemplazo del código dentro de las primeras 24 horas."
    },
    {
      question: "¿Los códigos son originales?",
      answer: "100% originales. Trabajamos directamente con distribuidores oficiales para garantizar la autenticidad de todos nuestros productos."
    },
    {
      question: "¿Tienen soporte técnico?",
      answer: "Tenemos soporte 24/7 a través de WhatsApp, email y chat en vivo. Nuestro equipo te ayudará con cualquier duda o problema."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-gaming font-bold text-foreground">
              Preguntas 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-2">
                Frecuentes
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Encuentra respuestas a las dudas más comunes de nuestros clientes
          </p>
        </div>

        <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left hover:text-accent transition-colors">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <div className="flex items-center justify-center gap-2 text-accent hover:text-primary transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Contáctanos directamente</span>
          </div>
        </div>
      </div>
    </section>
  );
};