import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Shield, Zap, Users, Star, Award, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const fortniteImage = "/lovable-uploads/4de401bc-3b97-4e1c-8f43-5a028fe8d1ec.png";
const freefireImage = "/lovable-uploads/bdce0646-48a6-4b27-a7bc-42ca95f856b7.png";
const minecraftImage = "/lovable-uploads/722d514e-f2e2-4266-9825-97d3b17af36b.png";
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [{
    name: "FORTNITE",
    image: fortniteImage,
    description: "V-Bucks, Club de Fortnite y objetos exclusivos"
  }, {
    name: "FREE FIRE",
    image: freefireImage,
    description: "Diamantes y contenido premium"
  }, {
    name: "MINECRAFT",
    image: minecraftImage,
    description: "Minecoins, cuentas y Game Pass"
  }];
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
  }];
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10">
          {/* Floating particles effect */}
          {[...Array(10)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }} />)}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-16">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6 mt-8 md:mt-0">
              <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full animate-float" loading="eager" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                KITSON KIT
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Productos digitales para gaming al mejor precio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/fortnite">
                <Button variant="gaming" size="xl" className="min-w-[200px] text-lg">
                  FORTNITE
                </Button>
              </Link>
              <Link to="/freefire">
                <Button variant="outline" size="xl" className="min-w-[200px] text-lg border-accent text-accent hover:bg-accent/10">
                  FREE FIRE
                </Button>
              </Link>
              <Link to="/minecraft">
                <Button variant="secondary-glow" size="xl" className="min-w-[200px] text-lg">
                  MINECRAFT
                </Button>
              </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
            const categoryRoute = category.name === "FORTNITE" ? "/fortnite" : category.name === "FREE FIRE" ? "/freefire" : "/minecraft";
            return <Link key={category.name} to={categoryRoute}>
                  <div className="group cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in rounded-lg overflow-hidden" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="relative overflow-hidden">
                      <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
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
                </Link>;
          })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="quienes-somos" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quienes Somos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bienvenido a Kitson Kit, tu centro de confianza para ¡Juegos, Servicios y Suscripciones! 🎮
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nos comprometemos a ofrecer un mercado seguro, confiable y agradable para nuestros clientes.
                Contamos con referencias de ventas en Facebook e Instagram.
              </p>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Nuestros Valores
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Profesionalismo</h4>
                <p className="text-muted-foreground">
                  Servicios de calidad con atención al detalle
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow" style={{
              animationDelay: '0.1s'
            }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Seguridad</h4>
                <p className="text-muted-foreground">
                  Tu seguridad es nuestra prioridad. Todas las transacciones están protegidas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow" style={{
              animationDelay: '0.2s'
            }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Precios</h4>
                <p className="text-muted-foreground">
                  Ofrecemos los precios más competitivos del mercado.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow" style={{
              animationDelay: '0.3s'
            }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Soporte</h4>
                <p className="text-muted-foreground">
                  Siempre disponibles con ayuda rápida las 24 horas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow" style={{
              animationDelay: '0.4s'
            }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Experiencia</h4>
                <p className="text-muted-foreground">Experiencia en la industria y conocimiento en servicios gaming.</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in hover:shadow-lg transition-shadow" style={{
              animationDelay: '0.5s'
            }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Calidad</h4>
                <p className="text-muted-foreground">
                  Siempre ofrecemos la más alta calidad en todos los productos.
                </p>
              </div>
            </div>
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
            <img src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" alt="Kitson Kit Logo" className="w-12 h-12 rounded-full" loading="lazy" />
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