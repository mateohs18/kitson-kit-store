import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const freefireImage = "/lovable-uploads/2e7f57ec-2038-4990-b90a-f42ff5d2fe88.png";

const FreefirePage = () => {
  const freefireProducts = [
    {
      title: "110 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "110 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 3.700 COP | 🇲🇽 18 MXN | 🇦🇷 1.190 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "220 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "220 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 7.000 COP | 🇲🇽 36 MXN | 🇦🇷 2.218 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "341 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "341 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 10.000 COP | 🇲🇽 48 MXN | 🇦🇷 3.200 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "572 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "572 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 15.500 COP | 🇲🇽 73 MXN | 🇦🇷 4.920 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "1166 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "1166 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 30.000 COP | 🇲🇽 145 MXN | 🇦🇷 9.500 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "2398 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "2398 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 59.000 COP | 🇲🇽 294 MXN | 🇦🇷 18.960 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "3564 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "3564 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 89.000 COP | 🇲🇽 417 MXN | 🇦🇷 28.159 ARS",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "6160 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "6160 diamantes para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "🇨🇴 145.000 COP | 🇲🇽 750 MXN | 🇦🇷 45.900 ARS",
      image: freefireImage,
      category: "FREE FIRE"
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
            <img src="/lovable-uploads/128204bb-4567-48ca-9648-827aae5b7f9a.png" alt="Free Fire" className="w-32 h-32 mx-auto mb-8 rounded-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              FREE FIRE
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diamantes y contenido premium
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {freefireProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default FreefirePage;