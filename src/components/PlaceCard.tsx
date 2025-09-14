import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";

interface PlaceCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  openHours: string;
  distance: string;
  tags: string[];
  highlights?: string[];
}

const PlaceCard = ({
  name,
  description,
  image,
  rating,
  priceRange,
  openHours,
  distance,
  tags,
  highlights = []
}: PlaceCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-warm-orange fill-current" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{openHours}</span>
          </div>
          <span className="font-medium text-coffee">{priceRange}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {highlights.length > 0 && (
          <div className="space-y-1">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-sm text-coffee font-medium">
                • {highlight}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceCard;