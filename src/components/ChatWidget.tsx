import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Soy tu asistente virtual de Kitson Kit. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "¿Cómo funciona la entrega?",
    "¿Qué métodos de pago aceptan?",
    "¿Tienen garantía?",
    "Quiero ver productos de Minecraft"
  ];

  const botResponses: Record<string, string> = {
    "¿Cómo funciona la entrega?": "📦 La entrega es instantánea! Una vez confirmado el pago, recibirás tu producto digital por email en menos de 5 minutos.",
    "¿Qué métodos de pago aceptan?": "💳 Aceptamos PayPal, tarjetas de crédito/débito, transferencias bancarias y criptomonedas. ¡Totalmente seguro!",
    "¿Tienen garantía?": "✅ ¡Por supuesto! Ofrecemos garantía de reemplazo de 30 días. Si hay algún problema, lo solucionamos inmediatamente.",
    "Quiero ver productos de Minecraft": "🎮 ¡Excelente elección! Tenemos cuentas premium, cosmetics, y más. Puedes ver todos nuestros productos de Minecraft en la sección de productos.",
    "default": "🤔 Entiendo tu consulta. Para obtener una respuesta más específica, puedes contactarnos por WhatsApp o email. ¡Estamos aquí para ayudarte!"
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[inputValue] || botResponses.default,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    sendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-accent/20 ${
          isOpen ? 'rotate-180' : 'animate-pulse-glow'
        }`}
        aria-label="Chat de soporte"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 z-40 w-80 h-96 bg-card/95 backdrop-blur-md border-accent/20 shadow-2xl animate-slide-in-bottom">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-border/30 bg-gradient-to-r from-accent/10 to-primary/10">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-gaming text-sm text-foreground">Asistente Kitson</h3>
                  <p className="text-xs text-muted-foreground">En línea</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-accent to-primary text-white"
                          : "bg-muted/50 text-foreground border border-border/30"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && (
                          <Bot className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                        )}
                        {message.sender === "user" && (
                          <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />
                        )}
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground text-center">Preguntas frecuentes:</p>
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="w-full text-left justify-start text-xs h-auto p-2 hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border/30">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};