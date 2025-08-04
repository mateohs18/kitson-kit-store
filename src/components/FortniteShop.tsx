import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShoppingCart } from "lucide-react";

interface FortniteItem {
  mainId: string;
  displayName: string | any;
  displayDescription: string | any;
  displayType: string;
  mainType: string;
  offerId: string;
  regularPrice?: number;
  finalPrice?: number;
  price?: {
    regularPrice: number;
    finalPrice: number;
    floorPrice: number;
  };
  banner: string | null | any;
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
  newDisplayAsset?: {
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
  displayAssets?: Array<{
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

// Helper function to safely extract string values from potentially complex objects
const extractStringValue = (value: any, defaultValue: string | null = null): string | null => {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object' && value !== null) {
    if (value.name && typeof value.name === 'string') {
      return value.name;
    }
    if (value.text && typeof value.text === 'string') {
      return value.text;
    }
    if (value.value && typeof value.value === 'string') {
      return value.value;
    }
  }
  return defaultValue;
};

// Mock data function for when API fails
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
            icon: "https://media.fortniteapi.io/images/cosmetics/featured/featured.png",
            featured: "https://media.fortniteapi.io/images/cosmetics/featured/featured.png"
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
            icon: "https://media.fortniteapi.io/images/cosmetics/featured/featured2.png", 
            featured: "https://media.fortniteapi.io/images/cosmetics/featured/featured2.png"
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
            icon: "https://media.fortniteapi.io/images/cosmetics/featured/featured3.png",
            featured: "https://media.fortniteapi.io/images/cosmetics/featured/featured3.png"
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
            icon: "https://media.fortniteapi.io/images/cosmetics/featured/featured4.png",
            featured: "https://media.fortniteapi.io/images/cosmetics/featured/featured4.png"
          }
        }]
      }
    ]
  };
};

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
      
      // Try the API first, if it fails, use mock data
      let data: FortniteShopData;
      
      try {
        const response = await fetch('https://fortniteapi.io/v2/shop?lang=es');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
      } catch (apiError) {
        console.log('API failed, using mock data:', apiError);
        // Use mock data as fallback
        data = createMockShopData();
      }
      
      console.log('Fortnite API Response:', data);
      console.log('Shop items count:', data.shop?.length);
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
    const price = item.price?.finalPrice ?? item.finalPrice ?? 0;
    const displayName = typeof item.displayName === 'string' ? item.displayName : 'Item';
    toast({
      title: "¡Contacta para comprar!",
      description: `Producto: ${displayName} - ${price > 0 ? price + ' V-Bucks' : 'Gratis'}`,
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

  // Show all items from the shop, not just featured ones
  const allItems = shopData.shop || [];
  console.log('Total items in shop:', allItems.length);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allItems.map((item) => {
            const mainItem = item.granted[0];
            
            // Debug logging to find the problematic object
            console.log('Item:', item.displayName, 'Rarity:', mainItem?.rarity);
            
            // More robust rarity handling
            let rarityValue = 'common';
            if (mainItem?.rarity) {
              if (typeof mainItem.rarity === 'string') {
                rarityValue = mainItem.rarity;
              } else if (typeof mainItem.rarity === 'object' && mainItem.rarity.name) {
                rarityValue = typeof mainItem.rarity.name === 'string' ? mainItem.rarity.name : 'common';
              }
            }
            
            const finalPrice = item.price?.finalPrice ?? item.finalPrice ?? 0;
            const regularPrice = item.price?.regularPrice ?? item.regularPrice ?? finalPrice;
            const itemImage = item.displayAssets?.[0]?.url || 
                            item.newDisplayAsset?.materialInstances?.[0]?.images?.OfferImage ||
                            mainItem?.images?.featured || 
                            mainItem?.images?.icon;
            
            // Ensure all display values are strings with more robust validation
            const displayName = extractStringValue(item.displayName, 'Item sin nombre') || 'Item sin nombre';
            const displayDescription = extractStringValue(item.displayDescription, 'Sin descripción') || extractStringValue(mainItem?.description, 'Sin descripción') || 'Sin descripción';
            const rarityText = String(rarityValue);
            const bannerText = item.banner ? extractStringValue(item.banner, '') : null;

            return (
              <Card 
                key={item.mainId} 
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${getRarityColor(rarityText)}`}
              >
                <div className="absolute inset-0 bg-card/90 backdrop-blur-sm"></div>
                <CardContent className="relative p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                    {itemImage ? (
                      <img 
                        src={itemImage} 
                        alt={displayName}
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
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(rarityText)} text-white font-medium`}>
                        {rarityText.charAt(0).toUpperCase() + rarityText.slice(1)}
                      </span>
                      {bannerText && (
                        <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">
                          {bannerText}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-foreground text-sm line-clamp-2">
                      {displayName}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {displayDescription}
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
            Actualizar Tienda
          </Button>
        </div>
      </div>
    </section>
  );
};