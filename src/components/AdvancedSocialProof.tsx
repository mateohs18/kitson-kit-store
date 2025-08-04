import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, MapPin, Verified, Instagram, Twitter, Youtube } from "lucide-react";

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  caption: string;
}

interface Influencer {
  name: string;
  avatar: string;
  verified: boolean;
  followers: string;
  platform: "instagram" | "twitter" | "youtube";
  recentPost?: string;
}

export const AdvancedSocialProof = () => {
  const [liveStats, setLiveStats] = useState({
    onlineUsers: 234,
    todaysSales: 47,
    averageRating: 4.9,
    totalReviews: 1247
  });

  const recentActivities = [
    { user: "María", action: "compró Minecraft Premium", time: "hace 1 min", location: "México" },
    { user: "Carlos", action: "compró V-Bucks 2800", time: "hace 3 min", location: "Colombia" },
    { user: "Ana", action: "compró Free Fire Diamantes", time: "hace 5 min", location: "Perú" },
    { user: "Luis", action: "compró Robux", time: "hace 7 min", location: "Argentina" },
  ];

  const instagramPosts: InstagramPost[] = [
    { id: "1", image: "/placeholder.svg", likes: 245, caption: "¡Nuevo cliente feliz con su cuenta de Minecraft! 🎮" },
    { id: "2", image: "/placeholder.svg", likes: 189, caption: "Entrega instantánea de V-Bucks ⚡" },
    { id: "3", image: "/placeholder.svg", likes: 312, caption: "¡3 años siendo los mejores! 🏆" },
  ];

  const gamingInfluencers: Influencer[] = [
    { name: "GameMaster", avatar: "/placeholder.svg", verified: true, followers: "150K", platform: "youtube", recentPost: "¡Excelente servicio en Kitson Kit!" },
    { name: "ProGamer", avatar: "/placeholder.svg", verified: true, followers: "89K", platform: "instagram", recentPost: "Recomiendo 100% esta tienda" },
    { name: "ElitePlayer", avatar: "/placeholder.svg", verified: true, followers: "203K", platform: "twitter", recentPost: "Mejor precio y calidad garantizada" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        onlineUsers: Math.max(180, Math.min(350, prev.onlineUsers + Math.floor(Math.random() * 10) - 5)),
        todaysSales: prev.todaysSales + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram": return <Instagram className="h-4 w-4" />;
      case "twitter": return <Twitter className="h-4 w-4" />;
      case "youtube": return <Youtube className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Live Statistics */}
      <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 animate-scale-in-slow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-gaming font-bold text-accent animate-pulse">
              {liveStats.onlineUsers}
            </div>
            <p className="text-sm text-muted-foreground">Usuarios en línea</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-gaming font-bold text-primary">
              {liveStats.todaysSales}
            </div>
            <p className="text-sm text-muted-foreground">Ventas hoy</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-gaming font-bold text-yellow-500">{liveStats.averageRating}</span>
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground">Calificación</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-gaming font-bold text-secondary">
              {liveStats.totalReviews}
            </div>
            <p className="text-sm text-muted-foreground">Reseñas totales</p>
          </div>
        </div>
      </Card>

      {/* Recent Activities Feed */}
      <Card className="p-6 animate-slide-in-left">
        <h3 className="font-gaming text-lg text-foreground mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-accent" />
          Actividad Reciente
        </h3>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {recentActivities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg animate-fade-in hover:bg-muted/50 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-r from-accent to-primary text-white text-xs">
                    {activity.user[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-accent">{activity.user}</span> {activity.action}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                    <MapPin className="h-3 w-3" />
                    {activity.location}
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="border-green-500/30 text-green-500">
                Completado
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Gaming Influencers Testimonials */}
      <Card className="p-6 animate-slide-in-right">
        <h3 className="font-gaming text-lg text-foreground mb-4 flex items-center gap-2">
          <Verified className="h-5 w-5 text-blue-500" />
          Influencers Gaming
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gamingInfluencers.map((influencer, index) => (
            <div 
              key={index} 
              className="p-4 bg-gradient-to-br from-muted/20 to-card/50 rounded-lg border border-border/30 animate-stagger-fade hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={influencer.avatar} />
                  <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{influencer.name}</span>
                    {influencer.verified && <Verified className="h-4 w-4 text-blue-500" />}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getPlatformIcon(influencer.platform)}
                    {influencer.followers} seguidores
                  </div>
                </div>
              </div>
              {influencer.recentPost && (
                <p className="text-sm text-muted-foreground italic">
                  "{influencer.recentPost}"
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Instagram Feed Preview */}
      <Card className="p-6 animate-parallax-slow">
        <h3 className="font-gaming text-lg text-foreground mb-4 flex items-center gap-2">
          <Instagram className="h-5 w-5 text-pink-500" />
          Síguenos en Instagram
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group cursor-pointer animate-stagger-fade hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-2">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-red-500" />
                <span className="font-medium text-foreground">{post.likes} likes</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};