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
      title: "100 + 10 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "110 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$5",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "310 + 31 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "341 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$15",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "520 + 52 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "572 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$25",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "1060 + 106 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "1166 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$50",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "2180 + 218 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "2398 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$100",
      image: freefireImage,
      category: "FREE FIRE"
    },
    {
      title: "5600 + 560 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "6160 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$250",
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