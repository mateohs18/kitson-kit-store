import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const fortniteImage = "/lovable-uploads/383d8f72-882b-49ac-82a3-26fef488e6f6.png";

const FortnitePage = () => {
  const fortniteProducts = [
    {
      title: "CLUB DE FORTNITE",
      subtitle: "Cuenta con Error",
      description: "Acceso completo al pase de batalla y contenido exclusivo. Método seguro sin riesgo para tu cuenta principal.",
      price: "$5 USD • $105 MXN • 24 SOL • $24.000 COP",
      image: fortniteImage,
      category: "FORTNITE"
    },
    {
      title: "CLUB DE FORTNITE",
      subtitle: "Cuenta sin Error",
      description: "Cuenta premium sin errores, acceso completo a todos los beneficios del club. La opción más segura.",
      price: "$4 USD • $85 MXN • 18 SOL • $19.000 COP",
      image: fortniteImage,
      category: "FORTNITE"
    },
    {
      title: "OBJETOS VIA REGALO",
      subtitle: "Cualquier skin disponible",
      description: "Recibe cualquier skin o item del juego directamente como regalo. 100% seguro y legal.",
      price: "Varía",
      image: fortniteImage,
      category: "FORTNITE"
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
            <img src="/lovable-uploads/4de401bc-3b97-4e1c-8f43-5a028fe8d1ec.png" alt="Fortnite" className="w-32 h-32 mx-auto mb-8 rounded-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              FORTNITE
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              V-Bucks, Club de Fortnite y objetos exclusivos
            </p>
          </div>

          {/* Error Info */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              ¿Qué es el Error de Región?
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Es un error que aparece si jugaste en Xbox alguna vez. <strong className="text-foreground">Nosotros hacemos la recarga directa por Xbox</strong>, 
              saltando completamente ese error. <span className="text-primary font-medium">Sin riesgo ni métodos raros</span> - 
              proceso 100% seguro y confiable.
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {fortniteProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default FortnitePage;