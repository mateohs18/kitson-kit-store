import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/3869feb0-7ccb-431c-95b7-53b04dbb7fdf.png" 
              alt="Kitson Kit Logo" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Kitson Kit</h1>
              <p className="text-xs text-muted-foreground">Gaming Store</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToProducts}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Quienes Somos
            </button>
            <button 
              onClick={scrollToContact}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <Button variant="gaming" size="sm" onClick={scrollToContact}>
            Comprar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
};