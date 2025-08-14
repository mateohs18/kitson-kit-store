
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20">
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
              <h1 className="text-xl font-bold text-foreground">KITSON KIT</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-accent transition-colors text-xs md:text-sm font-medium uppercase tracking-wide"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={scrollToContact}
              className="text-muted-foreground hover:text-accent transition-colors text-xs md:text-sm font-medium uppercase tracking-wide"
            >
              Contacto
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};