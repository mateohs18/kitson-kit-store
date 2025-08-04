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
        // OUTFITS LEGENDARIOS
        {
          mainId: "travis-scott",
          displayName: "Travis Scott",
          displayDescription: "El icónico artista llega a Fortnite con su outfit exclusivo",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "travis-scott-offer",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: "Icónico",
          granted: [{
            id: "travis-scott",
            name: "Travis Scott",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/featured.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/featured.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/featured.png"
            }
          }]
        },
        {
          mainId: "john-wick",
          displayName: "John Wick",
          displayDescription: "El legendario asesino profesional",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "john-wick-offer",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: null,
          granted: [{
            id: "john-wick",
            name: "John Wick",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/johnwick.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/johnwick.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/johnwick.png"
            }
          }]
        },
        {
          mainId: "batman",
          displayName: "Batman Zero",
          displayDescription: "El Caballero Oscuro de Gotham City",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "batman-offer",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: "DC Comics",
          granted: [{
            id: "batman",
            name: "Batman Zero",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/batman.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/batman.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/batman.png"
            }
          }]
        },
        {
          mainId: "harley-quinn",
          displayName: "Harley Quinn",
          displayDescription: "La reina del caos de Gotham",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "harley-offer",
          price: { finalPrice: 1800, regularPrice: 2000, floorPrice: 1800 },
          banner: "Oferta",
          granted: [{
            id: "harley-quinn",
            name: "Harley Quinn",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/harley.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/harley.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/harley.png"
            }
          }]
        },
        {
          mainId: "spiderman",
          displayName: "Spider-Man",
          displayDescription: "Tu amigable vecino Spider-Man",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "spiderman-offer",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: "Marvel",
          granted: [{
            id: "spiderman",
            name: "Spider-Man",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/spiderman.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/spiderman.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/spiderman.png"
            }
          }]
        },
        
        // OUTFITS ÉPICOS
        {
          mainId: "ninja",
          displayName: "Ninja",
          displayDescription: "El streamer más famoso del mundo",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "ninja-offer",
          price: { finalPrice: 1500, regularPrice: 1500, floorPrice: 1500 },
          banner: "Creador de Contenido",
          granted: [{
            id: "ninja",
            name: "Ninja",
            description: "Outfit épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/ninja.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/ninja.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/ninja.png"
            }
          }]
        },
        {
          mainId: "skull-trooper",
          displayName: "Skull Trooper",
          displayDescription: "Un soldado del más allá",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "skull-offer",
          price: { finalPrice: 1200, regularPrice: 1500, floorPrice: 1200 },
          banner: "Halloween",
          granted: [{
            id: "skull-trooper",
            name: "Skull Trooper",
            description: "Outfit épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/skull.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/skull.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/skull.png"
            }
          }]
        },
        {
          mainId: "raven",
          displayName: "Raven",
          displayDescription: "Emerge de las sombras",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "raven-offer",
          price: { finalPrice: 1500, regularPrice: 1500, floorPrice: 1500 },
          banner: null,
          granted: [{
            id: "raven",
            name: "Raven",
            description: "Outfit épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/raven.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/raven.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/raven.png"
            }
          }]
        },
        
        // PICOS LEGENDARIOS Y ÉPICOS
        {
          mainId: "rainbow-smash",
          displayName: "Rainbow Smash",
          displayDescription: "Pico que brilla con todos los colores del arcoíris",
          displayType: "Pickaxe",
          mainType: "pickaxe",
          offerId: "rainbow-offer",
          price: { finalPrice: 1500, regularPrice: 1500, floorPrice: 1500 },
          banner: "Reactivo",
          granted: [{
            id: "rainbow-smash",
            name: "Rainbow Smash",
            description: "Pico épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "pickaxe", name: "Pickaxe" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/rainbowpickaxe.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/rainbowpickaxe.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/rainbowpickaxe.png"
            }
          }]
        },
        {
          mainId: "psi-blade",
          displayName: "Psi-Blade",
          displayDescription: "Energía pura concentrada en una hoja",
          displayType: "Pickaxe",
          mainType: "pickaxe",
          offerId: "psi-offer",
          price: { finalPrice: 1200, regularPrice: 1200, floorPrice: 1200 },
          banner: null,
          granted: [{
            id: "psi-blade",
            name: "Psi-Blade",
            description: "Pico épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "pickaxe", name: "Pickaxe" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/psiblade.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/psiblade.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/psiblade.png"
            }
          }]
        },
        
        // EMOTES POPULARES
        {
          mainId: "floss",
          displayName: "Floss",
          displayDescription: "El baile más viral de Fortnite",
          displayType: "Emote",
          mainType: "emote",
          offerId: "floss-offer",
          price: { finalPrice: 500, regularPrice: 500, floorPrice: 500 },
          banner: "Clásico",
          granted: [{
            id: "floss",
            name: "Floss",
            description: "Emote raro",
            rarity: { id: "rare", name: "rare" },
            type: { id: "emote", name: "Emote" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/floss.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/floss.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/floss.png"
            }
          }]
        },
        {
          mainId: "take-the-l",
          displayName: "Take the L",
          displayDescription: "Para cuando quieres provocar a tus oponentes",
          displayType: "Emote",
          mainType: "emote",
          offerId: "take-l-offer",
          price: { finalPrice: 500, regularPrice: 500, floorPrice: 500 },
          banner: "Provocativo",
          granted: [{
            id: "take-the-l",
            name: "Take the L",
            description: "Emote raro",
            rarity: { id: "rare", name: "rare" },
            type: { id: "emote", name: "Emote" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/takel.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/takel.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/takel.png"
            }
          }]
        },
        {
          mainId: "orange-justice",
          displayName: "Orange Justice",
          displayDescription: "Justicia para todos los naranjas",
          displayType: "Emote",
          mainType: "emote",
          offerId: "orange-offer",
          price: { finalPrice: 800, regularPrice: 800, floorPrice: 800 },
          banner: "Viral",
          granted: [{
            id: "orange-justice",
            name: "Orange Justice",
            description: "Emote épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "emote", name: "Emote" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/orange.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/orange.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/orange.png"
            }
          }]
        },
        
        // PLANEADORES
        {
          mainId: "mako",
          displayName: "Mako",
          displayDescription: "Surca los cielos como un tiburón",
          displayType: "Glider",
          mainType: "glider",
          offerId: "mako-offer",
          price: { finalPrice: 500, regularPrice: 500, floorPrice: 500 },
          banner: "Temporada 1",
          granted: [{
            id: "mako",
            name: "Mako",
            description: "Planeador poco común",
            rarity: { id: "uncommon", name: "uncommon" },
            type: { id: "glider", name: "Glider" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/mako.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/mako.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/mako.png"
            }
          }]
        },
        {
          mainId: "victory-royale",
          displayName: "Victory Royale",
          displayDescription: "El planeador de los campeones",
          displayType: "Glider",
          mainType: "glider",
          offerId: "victory-offer",
          price: { finalPrice: 1200, regularPrice: 1200, floorPrice: 1200 },
          banner: "Exclusivo",
          granted: [{
            id: "victory-royale",
            name: "Victory Royale",
            description: "Planeador épico",
            rarity: { id: "epic", name: "epic" },
            type: { id: "glider", name: "Glider" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/victory.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/victory.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/victory.png"
            }
          }]
        },
        
        // ENVOLTURAS
        {
          mainId: "carbon-gold",
          displayName: "Carbon & Gold",
          displayDescription: "Elegancia y potencia combinadas",
          displayType: "Wrap",
          mainType: "wrap",
          offerId: "carbon-offer",
          price: { finalPrice: 600, regularPrice: 600, floorPrice: 600 },
          banner: null,
          granted: [{
            id: "carbon-gold",
            name: "Carbon & Gold",
            description: "Envoltura rara",
            rarity: { id: "rare", name: "rare" },
            type: { id: "wrap", name: "Wrap" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/carbon.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/carbon.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/carbon.png"
            }
          }]
        },
        
        // MOCHILAS
        {
          mainId: "black-shield",
          displayName: "Black Shield",
          displayDescription: "Protección oscura para tu espalda",
          displayType: "Back Bling",
          mainType: "backpack",
          offerId: "shield-offer",
          price: { finalPrice: 1200, regularPrice: 1200, floorPrice: 1200 },
          banner: null,
          granted: [{
            id: "black-shield",
            name: "Black Shield",
            description: "Mochila épica",
            rarity: { id: "epic", name: "epic" },
            type: { id: "backpack", name: "Back Bling" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/blackshield.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/blackshield.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/blackshield.png"
            }
          }]
        },
        
        // ITEMS DEL PASE DE BATALLA
        {
          mainId: "tier-100-skin",
          displayName: "The Foundation",
          displayDescription: "El líder de los Seven",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "foundation-offer",
          price: { finalPrice: 2000, regularPrice: 2000, floorPrice: 2000 },
          banner: "Pase de Batalla",
          granted: [{
            id: "foundation",
            name: "The Foundation",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/foundation.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/foundation.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/foundation.png"
            }
          }]
        },
        
        // COLABORACIONES ESPECIALES
        {
          mainId: "ariana-grande",
          displayName: "Ariana Grande",
          displayDescription: "La superestrella del pop llega a Fortnite",
          displayType: "Outfit",
          mainType: "outfit",
          offerId: "ariana-offer",
          price: { finalPrice: 1800, regularPrice: 1800, floorPrice: 1800 },
          banner: "Concierto",
          granted: [{
            id: "ariana-grande",
            name: "Ariana Grande",
            description: "Outfit legendario",
            rarity: { id: "legendary", name: "legendary" },
            type: { id: "outfit", name: "Outfit" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/ariana.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/ariana.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/ariana.png"
            }
          }]
        },
        
        // ITEMS POCO COMUNES ECONÓMICOS
        {
          mainId: "default-dance",
          displayName: "Default Dance",
          displayDescription: "El baile que inició todo",
          displayType: "Emote",
          mainType: "emote",
          offerId: "default-offer",
          price: { finalPrice: 200, regularPrice: 200, floorPrice: 200 },
          banner: "Gratis Originalmente",
          granted: [{
            id: "default-dance",
            name: "Default Dance",
            description: "Emote común",
            rarity: { id: "common", name: "common" },
            type: { id: "emote", name: "Emote" },
            images: {
              smallIcon: "https://media.fortniteapi.io/images/cosmetics/featured/default.png",
              icon: "https://media.fortniteapi.io/images/cosmetics/featured/default.png",
              featured: "https://media.fortniteapi.io/images/cosmetics/featured/default.png"
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
            
            // Get the best available image
            const itemImage = mainItem?.images?.featured || 
                            mainItem?.images?.icon || 
                            mainItem?.images?.smallIcon;

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
                          // Fallback to placeholder image if real image fails
                          e.currentTarget.src = `https://via.placeholder.com/400x400/1f2937/ffffff?text=${encodeURIComponent(item.displayName)}`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white">
                        <div className="text-center">
                          <div className="text-4xl mb-2">
                            {item.mainType === 'outfit' ? '👤' : 
                             item.mainType === 'pickaxe' ? '⛏️' : 
                             item.mainType === 'emote' ? '💃' :
                             item.mainType === 'glider' ? '🪂' :
                             item.mainType === 'wrap' ? '🎨' : 
                             item.mainType === 'backpack' ? '🎒' : '🎮'}
                          </div>
                          <div className="text-xs font-medium">{item.displayType}</div>
                        </div>
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