import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const minecraftImage = "/lovable-uploads/b140701b-1020-4a3e-a660-58e9b7ef1c5a.png";

const MinecraftPage = () => {
  const minecraftProducts = [
    {
      title: "MINECOINS",
      subtitle: "Moneda oficial de Minecraft",
      description: "Minecoins oficiales para comprar contenido en Minecraft Marketplace. Entrega rápida y segura.",
      price: "Varia",
      image: minecraftImage,
      category: "MINECRAFT"
    },
    {
      title: "MINECRAFT XBOX",
      subtitle: "Licencia Xbox",
      description: "Licencia completa de Minecraft Xbox. Compatible con Xbox Series X/S, Xbox One y PC Windows.",
      price: "$12",
      image: minecraftImage,
      category: "MINECRAFT"
    },
    {
      title: "MINECRAFT PC",
      subtitle: "Cuenta nueva",
      description: "Cuenta nueva de Minecraft Java & Bedrock Edition para PC. Acceso completo y permanente al juego.",
      price: "$12",
      image: minecraftImage,
      category: "MINECRAFT"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <img src="/lovable-uploads/2e978da3-b905-4a47-a8bb-b06143f020b2.png" alt="Minecraft" className="w-32 h-32 mx-auto mb-8 rounded-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              MINECRAFT
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Minecoins y cuentas de Minecraft
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {minecraftProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default MinecraftPage;