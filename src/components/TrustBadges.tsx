import { Shield, Clock, Award, Users, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Seguro",
      subtitle: "Transacciones protegidas",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Entrega Inmediata",
      subtitle: "En menos de 5 minutos",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "+3 Años Experiencia",
      subtitle: "Miles de clientes satisfechos",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "15,000+ Clientes",
      subtitle: "Comunidad gaming activa",
      color: "text-purple-400"
    },
    {
      icon: Star,
      title: "4.9/5 Estrellas",
      subtitle: "Calificación promedio",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Soporte 24/7",
      subtitle: "Siempre disponibles",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold text-foreground mb-4">
            ¿Por qué confiar en 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-2">
              Kitson Kit?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tu seguridad y satisfacción son nuestra prioridad absoluta
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 animate-stagger-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-muted to-muted/50 ${badge.color} group-hover:animate-pulse-glow transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {badge.subtitle}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};