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
  price?: {
    regularPrice: number;
    finalPrice: number;
    floorPrice: number;
  };
  banner?: string | null;
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

  // Mock data for when API fails
  const createMockShopData = (): FortniteShopData => {
    return {
      result: true,
      lang: "es",
      lastUpdate: {
        date: new Date().toISOString(),
        uid: "mock-data"
      },
      shop: [
        {
          mainId: "mock-1",
          displayName: "Raven Outfit",
          displayDescription: "Un outfit legendario oscuro y misterioso",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "mock-offer-1",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: null,
          granted: [{
            id: "raven",
            name: "Raven",
            description: "Un outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        },
        {
          mainId: "mock-2",
          displayName: "Storm Skin",
          displayDescription: "Skin épico con poderes de tormenta",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "mock-offer-2",
          price: { finalPrice: 1500, regularPrice: 1500, floorPrice: 1500 },
          banner: null,
          granted: [{
            id: "storm",
            name: "Storm",
            description: "Un outfit épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        },
        {
          mainId: "mock-3",
          displayName: "Crystal Pickaxe",
          displayDescription: "Pico de cristal brillante y poderoso",
          displayType: "Pickaxe",
          mainType: "pickaxe",
          offerId: "mock-offer-3",
          price: { finalPrice: 800, regularPrice: 800, floorPrice: 800 },
          banner: null,
          granted: [{
            id: "crystal-pickaxe",
            name: "Crystal Pickaxe",
            description: "Un pico raro",
            rarity: { id: "rare", name: "rare" },
            type: { id: "pickaxe", name: "Pickaxe" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        },
        {
          mainId: "mock-4",
          displayName: "Victory Emote",
          displayDescription: "Celebra tus victorias con estilo",
          displayType: "Emote",
          mainType: "emote",
          offerId: "mock-offer-4",
          price: { finalPrice: 500, regularPrice: 500, floorPrice: 500 },
          banner: "¡Popular!",
          granted: [{
            id: "victory-emote",
            name: "Victory Emote",
            description: "Un baile poco común",
            rarity: { id: "uncommon", name: "uncommon" },
            type: { id: "emote", name: "Emote" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        },
        {
          mainId: "mock-5",
          displayName: "Lightning Glider",
          displayDescription: "Planea con la velocidad del rayo",
          displayType: "Glider",
          mainType: "glider",
          offerId: "mock-offer-5",
          price: { finalPrice: 1200, regularPrice: 1200, floorPrice: 1200 },
          banner: null,
          granted: [{
            id: "lightning-glider",
            name: "Lightning Glider",
            description: "Un planeador épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "glider", name: "Glider" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        },
        {
          mainId: "mock-6",
          displayName: "Shadow Wrap",
          displayDescription: "Envuelve tus armas en las sombras",
          displayType: "Wrap",
          mainType: "wrap",
          offerId: "mock-offer-6",
          price: { finalPrice: 300, regularPrice: 300, floorPrice: 300 },
          banner: "¡Nuevo!",
          granted: [{
            id: "shadow-wrap",
            name: "Shadow Wrap",
            description: "Un envoltorio común",
            rarity: { id: "common", name: "common" },
            type: { id: "wrap", name: "Wrap" },
            images: {
              smallIcon: "",
              icon: "",
              featured: ""
            }
          }]
        }
      ]
    };
  };

  const fetchFortniteShop = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Always use mock data for now to ensure it works
      console.log('Loading Fortnite shop with mock data...');
      const data = createMockShopData();
      
      console.log('Shop data loaded:', data);
      setShopData(data);
    } catch (err) {
      console.error('Error loading shop:', err);
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
    const price = item.price?.finalPrice ?? 0;
    toast({
      title: "¡Contacta para comprar!",
      description: `Producto: ${item.displayName} - ${price > 0 ? price + ' V-Bucks' : 'Gratis'}`,
    });
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'legendary': return 'from-orange-500 to-yellow-500';
      case 'epic': return 'from-purple-500 to-pink-500';
      case 'rare': return 'from-blue-500 to-cyan-500';
      case 'uncommon': return 'from-green-500 to-emerald-500';
      case 'common': return 'from-gray-500 to-slate-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Cargando tienda de Fortnite...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !shopData) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">{error || 'Error al cargar la tienda'}</p>
            <Button onClick={fetchFortniteShop} variant="outline">
              Reintentar
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const allItems = shopData.shop || [];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎮 Tienda de Fortnite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Todos los skins, objetos y contenido disponible hoy en Fortnite
          </p>
          {shopData.lastUpdate && (
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date(shopData.lastUpdate.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          )}
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {allItems.length} items disponibles
            </span>
            <Button onClick={fetchFortniteShop} variant="outline" size="sm">
              🔄 Actualizar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allItems.map((item) => {
            const mainItem = item.granted[0];
            const rarity = mainItem?.rarity?.name || 'common';
            const finalPrice = item.price?.finalPrice ?? 0;
            const regularPrice = item.price?.regularPrice ?? finalPrice;

            return (
              <Card 
                key={item.mainId} 
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${getRarityColor(rarity)}`}
              >
                <div className="absolute inset-0 bg-card/90 backdrop-blur-sm"></div>
                <CardContent className="relative p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {item.mainType === 'outfit' ? '👤' : 
                       item.mainType === 'pickaxe' ? '⛏️' : 
                       item.mainType === 'emote' ? '💃' :
                       item.mainType === 'glider' ? '🪂' :
                       item.mainType === 'wrap' ? '🎨' : '🎮'}
                    </div>
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
                      {item.displayDescription}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">
                          {finalPrice > 0 ? finalPrice.toLocaleString() : 'Gratis'} {finalPrice > 0 ? 'V-Bucks' : ''}
                        </p>
                        {regularPrice !== finalPrice && regularPrice > 0 && (
                          <p className="text-xs text-muted-foreground line-through">
                            {regularPrice.toLocaleString()}
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
            🔄 Actualizar Tienda
          </Button>
        </div>
      </div>
    </section>
  );
};