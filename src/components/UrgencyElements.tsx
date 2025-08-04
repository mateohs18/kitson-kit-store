import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Zap, Eye, ShoppingCart } from "lucide-react";

export const StockCounter = ({ initialStock = 5 }: { initialStock?: number }) => {
  const [stock, setStock] = useState(initialStock);

  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex items-center gap-1 text-orange-500">
        <Zap className="h-4 w-4 animate-pulse" />
        <span className="text-sm font-medium">Solo quedan {stock} unidades</span>
      </div>
      <Badge variant="destructive" className="animate-pulse">
        ¡Últimas unidades!
      </Badge>
    </div>
  );
};

export const ViewersCounter = () => {
  const [viewers, setViewers] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newValue = prev + change;
        return Math.max(8, Math.min(25, newValue)); // Keep between 8-25
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-accent">
      <Eye className="h-4 w-4" />
      <span className="text-sm font-medium">{viewers} personas viendo este producto</span>
    </div>
  );
};

export const CountdownTimer = ({ minutes = 15 }: { minutes?: number }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (timeLeft <= 0) return null;

  return (
    <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-orange-500 animate-pulse" />
          <span className="font-medium text-foreground">Oferta especial termina en:</span>
        </div>
        <div className="text-xl font-gaming text-orange-500 animate-pulse">
          {formatTime(timeLeft)}
        </div>
      </div>
    </Card>
  );
};

export const RecentPurchases = () => {
  const [purchases] = useState([
    { name: "Juan", product: "Minecraft Premium", time: "hace 2 min", location: "México" },
    { name: "María", product: "Fortnite V-Bucks", time: "hace 5 min", location: "Colombia" },
    { name: "Carlos", product: "Free Fire Diamantes", time: "hace 8 min", location: "Perú" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % purchases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [purchases.length]);

  return (
    <Card className="p-3 bg-green-500/10 border-green-500/20 animate-slide-in-bottom">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">
            <span className="text-green-500">{purchases[currentIndex].name}</span> compró{" "}
            <span className="text-accent">{purchases[currentIndex].product}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {purchases[currentIndex].time} • {purchases[currentIndex].location}
          </p>
        </div>
      </div>
    </Card>
  );
};

export const SocialProof = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-accent" />
        <span className="text-sm text-muted-foreground">
          Más de <span className="font-bold text-accent">15,000 clientes</span> confían en nosotros
        </span>
      </div>
      <ViewersCounter />
      <RecentPurchases />
    </div>
  );
};