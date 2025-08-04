import { FortniteShop } from "@/components/FortniteShop";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FortniteShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tienda de Fortnite</h1>
              <p className="text-muted-foreground">Explora todos los items disponibles</p>
            </div>
          </div>
        </div>
      </header>

      {/* Fortnite Shop Component */}
      <FortniteShop />
    </div>
  );
};

export default FortniteShopPage;