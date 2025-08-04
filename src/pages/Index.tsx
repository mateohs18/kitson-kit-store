import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { ContactSection } from "@/components/ContactSection";
import { ReviewForm } from "@/components/ReviewForm";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TrustBadges } from "@/components/TrustBadges";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StatsCounter } from "@/components/StatsCounter";
import { FAQSection } from "@/components/FAQSection";
import { Shield, Zap, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import fortniteImage from "@/assets/fortnite-product.jpg";
import freefireImage from "@/assets/freefire-product.jpg";
import minecraftImage from "@/assets/minecraft-product.jpg";
const Index = () => {
  const products = [{
    title: "CLUB DE FORTNITE",
    subtitle: "Cuenta con Error",
    description: "Acceso completo al pase de batalla y contenido exclusivo. Método seguro sin riesgo para tu cuenta principal.",
    price: "Desde $15",
    image: fortniteImage,
    category: "Fortnite"
  }, {
    title: "CLUB DE FORTNITE",
    subtitle: "Cuenta sin Error",
    description: "Cuenta premium sin errores, acceso completo a todos los beneficios del club. La opción más segura.",
    price: "Desde $25",
    image: fortniteImage,
    category: "Fortnite"
  }, {
    title: "OBJETOS VIA REGALO",
    subtitle: "Cualquier skin disponible",
    description: "Recibe cualquier skin o item del juego directamente como regalo. 100% seguro y legal.",
    price: "Varía",
    image: fortniteImage,
    category: "Fortnite"
  }, {
    title: "DIAMANTES FREE FIRE",
    subtitle: "Recarga inmediata",
    description: "Diamantes oficiales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
    price: "Desde $5",
    image: freefireImage,
    category: "Free Fire"
  }, {
    title: "MINECOINS",
    subtitle: "Moneda oficial de Minecraft",
    description: "Minecoins oficiales para comprar contenido en Minecraft Marketplace. Entrega rápida.",
    price: "Desde $10",
    image: minecraftImage,
    category: "Minecraft"
  }];
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
  return <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-16">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full animate-float hover:animate-bounce-subtle transition-all duration-300" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-gaming font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
                Kitson Kit
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Los mejores productos digitales para gaming. +3 años ofreciendo 
              <span className="text-accent font-semibold"> precios bajos</span>, 
              <span className="text-primary font-semibold"> atención premium</span> y 
              <span className="text-secondary font-semibold"> entrega rápida</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="gaming" 
                size="xl" 
                onClick={scrollToProducts}
                className="group shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Ver Productos
              </Button>
              <Button 
                variant="secondary" 
                size="xl"
                className="hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5" />
                ¿Por qué elegirnos?
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">100% Seguro</h3>
                <p className="text-muted-foreground text-sm">Métodos legales, garantía total</p>
              </div>
              
              <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float hover:scale-105 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300" style={{
              animationDelay: '0.2s'
            }}>
                <Zap className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Entrega Rápida</h3>
                <p className="text-muted-foreground text-sm">Productos en minutos</p>
              </div>
              
              <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-float hover:scale-105 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300" style={{
              animationDelay: '0.4s'
            }}>
                <Users className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">+3 Años</h3>
                <p className="text-muted-foreground text-sm">Miles de clientes felices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gradient-to-br from-background to-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-foreground mb-4">
              Nuestros 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-2">
                Productos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Todo lo que necesitas para dominar tus juegos favoritos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-stagger-fade" style={{animationDelay: `${index * 0.15}s`}}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reseñas" className="py-20 bg-gradient-to-br from-muted/5 to-card/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-foreground mb-4">
              Lo que dicen nuestros 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-2">
                clientes
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}} />)}
              </div>
              <span className="text-lg font-gaming font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">• +1000 reseñas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div key={index} className="animate-stagger-fade" style={{animationDelay: `${index * 0.1}s`}}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <div id="contacto">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-muted/10 to-background py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8 group">
            <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-12 h-12 rounded-full group-hover:animate-bounce-subtle" />
            <div>
              <h3 className="text-2xl font-gaming font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                Kitson Kit
              </h3>
              <p className="text-muted-foreground">
                Tu tienda de confianza para productos digitales gaming
              </p>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm mb-2">
              © 2024 Kitson Kit. Todos los derechos reservados.
            </p>
            <p className="text-accent font-semibold text-sm">
              +3 años brindando el mejor servicio en gaming digital.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>;
};
export default Index;