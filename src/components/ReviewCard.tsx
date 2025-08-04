import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const ReviewCard = ({ name, rating, comment, date }: ReviewCardProps) => {
  return (
    <Card className="bg-card border-border animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating 
                    ? "fill-accent text-accent" 
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{comment}</p>
      </CardContent>
    </Card>
  );
};