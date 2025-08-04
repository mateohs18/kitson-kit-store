import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Facebook, MessageCircle, Instagram } from "lucide-react";
import discordIcon from "@/assets/discord-icon.png";
export const ContactSection = () => {
  const handleContact = (platform: string) => {
    const message = "Hola! Me gustaría conocer más sobre sus productos digitales para gaming.";
    switch (platform) {
      case 'facebook':
        window.open('https://www.facebook.com/share/19pGami7Ab/', '_blank');
        break;
      case 'discord':
        window.open('https://discord.gg/gPumDeNvp6', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/kitsonkit2.0?igsh=ZjNlaGcyaGp4ZnM5', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/573156098437', '_blank');
        break;
    }
  };
  return <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Listo para conseguir tus productos favoritos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos por tu plataforma favorita y obtén atención personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100% Seguro</h3>
                  <p className="text-muted-foreground text-sm">Métodos legales, sin riesgo para tu cuenta</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Entrega Rápida</h3>
                  <p className="text-muted-foreground text-sm">Recibe tus productos rapido, sin esperas de 24</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">+3 Años de Experiencia</h3>
                  <p className="text-muted-foreground text-sm">Miles de clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-primary/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Escríbenos ahora
              </h3>
              
              <div className="space-y-4 mb-8">
                <Button variant="gaming" size="xl" className="w-full" onClick={() => handleContact('facebook')}>
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="social" className="flex-1" onClick={() => handleContact('discord')}>
                    <img src={discordIcon} alt="Discord" className="w-4 h-4 filter brightness-0 invert" />
                  </Button>
                  <Button variant="social" className="flex-1" onClick={() => handleContact('instagram')}>
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="social" className="flex-1" onClick={() => handleContact('whatsapp')}>
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Respuesta inmediata • Soporte 24/7 • Mejores precios
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};