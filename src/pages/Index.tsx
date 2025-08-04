import { useState } from "react";
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
import { ProductFilters, FilterState } from "@/components/ProductFilters";
import { ChatWidget } from "@/components/ChatWidget";
import { CountdownTimer, SocialProof } from "@/components/UrgencyElements";
import { AdvancedSocialProof } from "@/components/AdvancedSocialProof";
import { LazyImage } from "@/components/LazyImage";
import { ParallaxSection, StaggerAnimation, FadeInView } from "@/components/AnimationComponents";
import { analytics, usePerformanceTracking, useInteractionTracking } from "@/components/Analytics";
import { Shield, Zap, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import fortniteImage from "@/assets/fortnite-product.jpg";
import freefireImage from "@/assets/freefire-product.jpg";
import minecraftImage from "@/assets/minecraft-product.jpg";
const Index = () => {
  // Performance and interaction tracking
  usePerformanceTracking();
  useInteractionTracking();

  const products = [{
    title: "CLUB DE FORTNITE",
    subtitle: "Cuenta con Error",
    description: "Acceso completo al pase de batalla y contenido exclusivo. Método seguro sin riesgo para tu cuenta principal.",
    price: "Desde $15",
    image: fortniteImage,
    category: "fortnite",
    priceValue: 15
  }, {
    title: "CLUB DE FORTNITE",
    subtitle: "Cuenta sin Error",
    description: "Cuenta premium sin errores, acceso completo a todos los beneficios del club. La opción más segura.",
    price: "Desde $25",
    image: fortniteImage,
    category: "fortnite",
    priceValue: 25
  }, {
    title: "OBJETOS VIA REGALO",
    subtitle: "Cualquier skin disponible",
    description: "Recibe cualquier skin o item del juego directamente como regalo. 100% seguro y legal.",
    price: "Varía",
    image: fortniteImage,
    category: "fortnite",
    priceValue: 20
  }, {
    title: "DIAMANTES FREE FIRE",
    subtitle: "Recarga inmediata",
    description: "Diamantes oficiales para Free Fire con entrega inmediata. Sin baneos ni problemas.",
    price: "Desde $5",
    image: freefireImage,
    category: "freefire",
    priceValue: 5
  }, {
    title: "MINECOINS",
    subtitle: "Moneda oficial de Minecraft",
    description: "Minecoins oficiales para comprar contenido en Minecraft Marketplace. Entrega rápida.",
    price: "Desde $10",
    image: minecraftImage,
    category: "minecraft",
    priceValue: 10
  }];

  const [filteredProducts, setFilteredProducts] = useState(products);
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
  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...products];

    // Filter by category
    if (filters.category !== "all") {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max) {
        filtered = filtered.filter(product => product.priceValue >= min && product.priceValue <= max);
      } else {
        // Handle "50+" case
        filtered = filtered.filter(product => product.priceValue >= 50);
      }
    }

    // Sort products
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-high":
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "newest":
        // For demo purposes, reverse order
        filtered.reverse();
        break;
      case "popular":
        filtered.sort((a, b) => (b.priceValue - a.priceValue)); // Simulate popularity
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    setFilteredProducts(filtered);
  };

  const scrollToProducts = () => {
    analytics.track('cta_clicked', { 
      button: 'ver_productos',
      location: 'hero_section'
    });
    document.getElementById('productos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <ChatWidget />
      
      {/* Hero Section with Parallax */}
      <ParallaxSection offset={0.3}>
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${heroImage})`
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center pt-16">
            <FadeInView delay={200} duration={1500}>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <LazyImage 
                    src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" 
                    alt="Kitson Kit Logo" 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full animate-float hover:animate-bounce-subtle transition-all duration-500" 
                  />
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
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    variant="gaming" 
                    size="xl" 
                    onClick={scrollToProducts}
                    className="group shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105"
                  >
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    Ver Productos
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="xl"
                    className="hover:scale-105 transition-all duration-500"
                  >
                    <Shield className="w-5 h-5" />
                    ¿Por qué elegirnos?
                  </Button>
                </div>

                {/* Countdown Timer for special offers */}
                <div className="mb-12 animate-parallax-slow" style={{ animationDelay: '0.6s' }}>
                  <CountdownTimer minutes={30} />
                </div>

                <StaggerAnimation delay={300}>
                  {[
                    { icon: Shield, title: "100% Seguro", desc: "Métodos legales, garantía total", color: "primary" },
                    { icon: Zap, title: "Entrega Rápida", desc: "Productos en minutos", color: "accent" },
                    { icon: Users, title: "+3 Años", desc: "Miles de clientes felices", color: "secondary" }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-500"
                    >
                      <feature.icon className={`w-12 h-12 text-${feature.color} mx-auto mb-4 group-hover:animate-pulse-glow`} />
                      <h3 className={`text-lg font-semibold text-foreground mb-2 group-hover:text-${feature.color} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </StaggerAnimation>
              </div>
            </FadeInView>
          </div>
        </section>
      </ParallaxSection>

      {/* Trust Badges Section */}
      <FadeInView direction="up" delay={100}>
        <TrustBadges />
      </FadeInView>

      {/* Stats Counter Section */}
      <FadeInView direction="up" delay={200}>
        <StatsCounter />
      </FadeInView>

      {/* Advanced Social Proof Section */}
      <FadeInView direction="up" delay={300}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AdvancedSocialProof />
          </div>
        </section>
      </FadeInView>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gradient-to-br from-background to-muted/5">
        <div className="container mx-auto px-4">
          <FadeInView direction="up" delay={100}>
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
          </FadeInView>

          {/* Social Proof */}
          <FadeInView direction="up" delay={200}>
            <div className="mb-8">
              <SocialProof />
            </div>
          </FadeInView>
          
          {/* Product Filters */}
          <FadeInView direction="up" delay={300}>
            <ProductFilters onFilterChange={handleFilterChange} />
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              <StaggerAnimation delay={200}>
                {filteredProducts.map((product, index) => (
                  <div 
                    key={index}
                    onClick={() => analytics.track('product_clicked', { 
                      product_name: product.title,
                      category: product.category,
                      price: product.priceValue
                    })}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </StaggerAnimation>
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No se encontraron productos con estos filtros.</p>
                <Button 
                  variant="outline" 
                  onClick={() => handleFilterChange({ category: "all", priceRange: "all", sortBy: "featured" })}
                  className="mt-4"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ParallaxSection offset={0.2}>
        <section id="reseñas" className="py-20 bg-gradient-to-br from-muted/5 to-card/10">
          <div className="container mx-auto px-4">
            <FadeInView direction="up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-gaming font-bold text-foreground mb-4">
                  Lo que dicen nuestros 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-2">
                    clientes
                  </span>
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-accent text-accent animate-pulse-glow" style={{animationDelay: `${i * 0.2}s`}} />
                    ))}
                  </div>
                  <span className="text-lg font-gaming font-semibold text-foreground">5.0</span>
                  <span className="text-muted-foreground">• +1000 reseñas</span>
                </div>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <StaggerAnimation delay={300}>
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </StaggerAnimation>
            </div>

            <FadeInView direction="up" delay={500}>
              <div className="max-w-md mx-auto">
                <ReviewForm />
              </div>
            </FadeInView>
          </div>
        </section>
      </ParallaxSection>

      {/* FAQ Section */}
      <FadeInView direction="up" delay={100}>
        <FAQSection />
      </FadeInView>

      {/* Contact Section */}
      <FadeInView direction="up" delay={200}>
        <div id="contacto">
          <ContactSection />
        </div>
      </FadeInView>

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