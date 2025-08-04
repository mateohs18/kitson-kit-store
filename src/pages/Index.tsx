import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { ContactSection } from "@/components/ContactSection";
import { ReviewForm } from "@/components/ReviewForm";
import { Shield, Zap, Users, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-professional.jpg";
const fortniteImage = "/lovable-uploads/deaf7a90-011e-4ebf-8f94-15b2606530db.png";
const freefireImage = "/lovable-uploads/eb5092b0-6bd5-4857-aea9-8d23475a831c.png";
const minecraftImage = "/lovable-uploads/b9d8b6a8-8825-41ab-9395-3015803d2753.png";
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "FORTNITE",
      image: fortniteImage,
      description: "V-Bucks, Club de Fortnite y objetos exclusivos"
    },
    {
      name: "FREE FIRE",
      image: freefireImage,
      description: "Diamantes y contenido premium"
    },
    {
      name: "MINECRAFT",
      image: minecraftImage,
      description: "Minecoins, cuentas y Game Pass"
    }
  ];

  const products = [
    // FORTNITE Category
    {
      title: "CLUB DE FORTNITE",
      subtitle: "Cuenta con Error",
      description: "Acceso completo al pase de batalla y contenido exclusivo. Método seguro sin riesgo para tu cuenta principal.",
      price: "$5 USD • $105 MXN • 24 SOL • $24.000 COP",
      image: fortniteImage,
      category: "FORTNITE"
    }, {
      title: "CLUB DE FORTNITE",
      subtitle: "Cuenta sin Error",
      description: "Cuenta premium sin errores, acceso completo a todos los beneficios del club. La opción más segura.",
      price: "$4 USD • $85 MXN • 18 SOL • $19.000 COP",
      image: fortniteImage,
      category: "FORTNITE"
    }, {
      title: "OBJETOS VIA REGALO",
      subtitle: "Cualquier skin disponible",
      description: "Recibe cualquier skin o item del juego directamente como regalo. 100% seguro y legal.",
      price: "Varía",
      image: fortniteImage,
      category: "FORTNITE"
    },
    // FREE FIRE Category
    {
      title: "100 + 10 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "110 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$5",
      image: freefireImage,
      category: "FREE FIRE"
    }, {
      title: "310 + 31 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "341 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$15",
      image: freefireImage,
      category: "FREE FIRE"
    }, {
      title: "520 + 52 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "572 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$25",
      image: freefireImage,
      category: "FREE FIRE"
    }, {
      title: "1060 + 106 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "1166 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$50",
      image: freefireImage,
      category: "FREE FIRE"
    }, {
      title: "2180 + 218 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "2398 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$100",
      image: freefireImage,
      category: "FREE FIRE"
    }, {
      title: "5600 + 560 DIAMANTES",
      subtitle: "FREE FIRE",
      description: "6160 diamantes totales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
      price: "$250",
      image: freefireImage,
      category: "FREE FIRE"
    },
    // MINECRAFT Category
    {
      title: "MINECOINS",
      subtitle: "Moneda oficial de Minecraft",
      description: "Minecoins oficiales para comprar contenido en Minecraft Marketplace. Entrega rápida y segura.",
      price: "Desde $10",
      image: minecraftImage,
      category: "MINECRAFT"
    }, {
      title: "MINECRAFT XBOX",
      subtitle: "Game Pass Ultimate",
      description: "Acceso completo a Minecraft Xbox con Game Pass Ultimate incluido. Compatible con Xbox Series X/S, Xbox One y PC Windows.",
      price: "Desde $20",
      image: minecraftImage,
      category: "MINECRAFT"
    }, {
      title: "MINECRAFT PC",
      subtitle: "Cuenta nueva",
      description: "Cuenta nueva de Minecraft Java Edition para PC. Acceso completo y permanente al juego con tu propia cuenta.",
      price: "Desde $30",
      image: minecraftImage,
      category: "MINECRAFT"
    }
  ];

  const reviews = [{
    name: "Carlos M.",
    rating: 5,
    comment: "Excelente servicio! Recibí mis V-Bucks súper rápido y sin problemas. Definitivamente volveré a comprar.",
    date: "Hace 2 días"
  }, {
    name: "Ana L.",
    rating: 5,
    comment: "La mejor experiencia comprando diamantes para Free Fire. Atención al cliente 10/10.",
    date: "Hace 1 semana"
  }, {
    name: "Miguel R.",
    rating: 5,
    comment: "Llevo más de 6 meses comprando aquí. Siempre cumplen y con los mejores precios del mercado.",
    date: "Hace 2 semanas"
  }];

  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : [];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center" style={{ backgroundColor: '#D2D2D2' }}>
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6 mt-16">
              <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full animate-float" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Kitson Kit
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Los mejores productos digitales para gaming. +3 años ofreciendo 
              <span className="text-accent font-semibold"> precios bajos</span>, 
              <span className="text-primary font-semibold"> atención premium</span> y 
              <span className="text-secondary font-semibold"> entrega rápida</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button variant="gaming" size="xl" onClick={scrollToProducts} className="min-w-[200px]">
                <Zap className="w-5 h-5" />
                Ver Productos
              </Button>
              <Button variant="secondary" size="xl" className="min-w-[200px]">
                <Shield className="w-5 h-5" />
                ¿Por qué elegirnos?
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">100% Seguro</h3>
                <p className="text-muted-foreground text-sm">Métodos legales, garantía total</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float" style={{
              animationDelay: '0.2s'
            }}>
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Entrega Rápida</h3>
                <p className="text-muted-foreground text-sm">Productos en minutos</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float" style={{
              animationDelay: '0.4s'
            }}>
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">+3 Años</h3>
                <p className="text-muted-foreground text-sm">Miles de clientes felices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para dominar tus juegos favoritos
            </p>
          </div>

          {!selectedCategory ? (
            // Show Categories
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="group cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in rounded-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show Products for selected category
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a categorías
                </Button>
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedCategory}
                </h3>
              </div>
              
              {selectedCategory === "FORTNITE" && (
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
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
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reseñas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
              </div>
              <span className="text-lg font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">• +1000 reseñas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => <ReviewCard key={index} {...review} />)}
          </div>

          <div className="max-w-md mx-auto">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contacto">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Kitson Kit</h3>
              <p className="text-muted-foreground">
                Tu tienda de confianza para productos digitales gaming
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Kitson Kit. Todos los derechos reservados. 
              +3 años brindando el mejor servicio.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;