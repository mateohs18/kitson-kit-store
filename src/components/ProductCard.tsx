import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, MessageCircle, Instagram } from "lucide-react";
import discordIcon from "@/assets/discord-icon.png";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const ProductCard = ({ title, subtitle, description, price, image, category }: ProductCardProps) => {
  const handleContact = (platform: string) => {
    const message = `Hola! Estoy interesado en ${title} - ${subtitle}. ¿Podrían darme más información?`;
    
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

  return (
    <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl animate-fade-in group rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-lg text-xs font-semibold border border-primary/20">
            {category}
          </div>
          <div className="absolute bottom-3 right-3 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-lg text-sm font-bold border border-accent/20">
            {price}
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              variant="professional" 
              size="sm" 
              className="flex-1"
              onClick={() => handleContact('facebook')}
            >
              <Facebook className="w-4 h-4" />
              Comprar
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="elegant" 
                size="sm"
                onClick={() => handleContact('discord')}
                className="px-3"
              >
                <img src={discordIcon} alt="Discord" className="w-4 h-4 filter brightness-0 invert" />
              </Button>
              <Button 
                variant="elegant" 
                size="sm"
                onClick={() => handleContact('instagram')}
                className="px-3"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="elegant" 
                size="sm"
                onClick={() => handleContact('whatsapp')}
                className="px-3"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};