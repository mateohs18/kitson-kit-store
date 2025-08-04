import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShoppingCart } from "lucide-react";

interface FortniteItem {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  regularPrice: number;
  finalPrice: number;
  banner: string | null;
  granted: Array<{
    id: string;
    name: string;
    description: string;
    rarity: {
      id: string;
      name: string;
    };
    type: {
      id: string;
      name: string;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
    };
  }>;
  layout?: {
    id: string;
    name: string;
    category: string;
    index: number;
  };
  tile?: {
    id: string;
    name: string;
    category: string;
  };
  newDisplayAsset: {
    id: string;
    cosmeticId: string;
    materialInstances: Array<{
      id: string;
      images: {
        OfferImage: string;
        Background: string;
      };
    }>;
  };
  displayAssets: Array<{
    displayAsset: string;
    materialInstance: string;
    url: string;
    flipbook: null;
    background_texture: string;
    background: string;
    full_background: string;
  }>;
}

interface FortniteShopData {
  result: boolean;
  lang: string;
  shop: FortniteItem[];
  lastUpdate: {
    date: string;
    uid: string;
  };
}

export const FortniteShop = () => {
  const [shopData, setShopData] = useState<FortniteShopData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchFortniteShop();
  }, []);

  const fetchFortniteShop = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using Fortnite API - this is a free public API
      const response = await fetch('https://fortniteapi.io/v2/shop?lang=es');
      
      if (!response.ok) {
        throw new Error('Failed to fetch Fortnite shop data');
      }
      
      const data: FortniteShopData = await response.json();
      setShopData(data);
    } catch (err) {
      console.error('Error fetching Fortnite shop:', err);
      setError('Error al cargar la tienda de Fortnite');
      toast({
        title: "Error",
        description: "No se pudo cargar la tienda diaria de Fortnite",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = (item: FortniteItem) => {
    toast({
      title: "¡Contacta para comprar!",
      description: `Producto: ${item.displayName} - ${item.finalPrice} V-Bucks`,
    });
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'legendary': return 'from-orange-500 to-yellow-500';
      case 'epic': return 'from-purple-500 to-pink-500';
      case 'rare': return 'from-blue-500 to-cyan-500';
      case 'uncommon': return 'from-green-500 to-emerald-500';
      case 'common': return 'from-gray-500 to-slate-500';
      case 'mythic': return 'from-yellow-400 to-amber-400';
      case 'transcendent': return 'from-red-500 to-rose-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
        <p className="text-muted-foreground">Cargando tienda diaria de Fortnite...</p>
      </div>
    );
  }

  if (error || !shopData) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground mb-4">{error || 'Error al cargar la tienda'}</p>
        <Button onClick={fetchFortniteShop} variant="outline">
          Reintentar
        </Button>
      </div>
    );
  }

  const featuredItems = shopData.shop.filter(item => 
    (item.layout && item.layout.category === 'Featured') || 
    (item.tile && item.tile.category === 'Featured') ||
    item.finalPrice >= 1500
  ).slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tienda Diaria de Fortnite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Los mejores skins y items disponibles hoy
          </p>
          {shopData.lastUpdate && (
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date(shopData.lastUpdate.date).toLocaleDateString('es-ES')}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => {
            const mainItem = item.granted[0];
            const rarity = mainItem?.rarity?.name || 'common';
            const itemImage = item.displayAssets[0]?.url || 
                            item.newDisplayAsset?.materialInstances[0]?.images?.OfferImage ||
                            mainItem?.images?.featured || 
                            mainItem?.images?.icon;

            return (
              <Card 
                key={item.mainId} 
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${getRarityColor(rarity)}`}
              >
                <div className="absolute inset-0 bg-card/90 backdrop-blur-sm"></div>
                <CardContent className="relative p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                    {itemImage ? (
                      <img 
                        src={itemImage} 
                        alt={item.displayName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(rarity)} text-white font-medium`}>
                        {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                      </span>
                      {item.banner && (
                        <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">
                          {item.banner}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-foreground text-sm line-clamp-2">
                      {item.displayName}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.displayDescription || mainItem?.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">
                          {item.finalPrice.toLocaleString()} V-Bucks
                        </p>
                        {item.regularPrice !== item.finalPrice && (
                          <p className="text-xs text-muted-foreground line-through">
                            {item.regularPrice.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handlePurchase(item)}
                      className="w-full mt-3"
                      variant="gaming"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button onClick={fetchFortniteShop} variant="outline" size="lg">
            Actualizar Tienda
          </Button>
        </div>
      </div>
    </section>
  );
};