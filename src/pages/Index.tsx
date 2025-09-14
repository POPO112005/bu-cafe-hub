import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Coffee, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";
import restaurantImage from "@/assets/restaurant-card.jpg";
import cafeImage from "@/assets/cafe-workspace.jpg";

const Index = () => {
  const featuredPlaces = [
    {
      name: "ครัวบ้านไผ่",
      type: "restaurant",
      image: restaurantImage,
      rating: 4.5,
      distance: "200 ม.",
      priceRange: "50-120 บาท",
      tags: ["อาหารไทย", "ราคานักศึกษา"]
    },
    {
      name: "The Coffee Bean Studio",
      type: "cafe",
      image: cafeImage,
      rating: 4.6,
      distance: "180 ม.",
      priceRange: "60-150 บาท",
      tags: ["นั่งทำงาน", "มินิมอล"]
    },
    {
      name: "Seoul Kitchen",
      type: "restaurant",
      image: restaurantImage,
      rating: 4.3,
      distance: "300 ม.",
      priceRange: "80-200 บาท",
      tags: ["อาหารเกาหลี", "Instagram-able"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 to-warm-brown/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ค้นหาร้านอาหาร & คาเฟ่
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            ใกล้มหาวิทยาลัยกรุงเทพ รังสิต
          </p>
          
          {/* Hero Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <Input 
                placeholder="ค้นหาร้านอาหาร คาเฟ่ หเมนูอาหาร..."
                className="pl-12 h-14 text-lg bg-card/95 backdrop-blur-sm border-0 shadow-card"
              />
              <Button size="lg" className="absolute right-2 top-2 h-10 bg-coffee hover:bg-coffee/90">
                ค้นหา
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-card/80 backdrop-blur-sm">
              คาเฟ่นั่งทำงาน
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-card/80 backdrop-blur-sm">
              ร้านอาหารราคานักศึกษา
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-card/80 backdrop-blur-sm">
              คาเฟ่เปิดเช้า
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4 bg-card/80 backdrop-blur-sm">
              อาหารอร่อยใกล้ ม.กรุงเทพ
            </Badge>
          </div>
        </div>
      </div>

      {/* Featured Places */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">สถานที่แนะนำ</h2>
          <p className="text-lg text-muted-foreground">ร้านอาหารและคาเฟ่ยอดนิยม ใกล้มหาวิทยาลัยกรุงเทพ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPlaces.map((place, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warm-orange fill-current" />
                  <span className="text-sm font-medium">{place.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{place.name}</h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{place.distance}</span>
                  </div>
                  <span className="font-medium text-coffee">{place.priceRange}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/restaurants" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/90 to-coffee/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <UtensilsCrossed className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-2">ร้านอาหาร</h3>
                    <p className="text-lg opacity-90 mb-4">ค้นหาร้านอาหารอร่อยๆ ราคาเป็นกันเอง</p>
                    <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cafes" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee/90 to-warm-brown/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <Coffee className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-2">คาเฟ่</h3>
                    <p className="text-lg opacity-90 mb-4">คาเฟ่นั่งชิล นั่งทำงาน บรรยากาศดี</p>
                    <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>

      {/* Popular Keywords */}
      <div className="bg-card py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">คำค้นหายอดนิยม</h3>
            <p className="text-muted-foreground">คีย์เวิร์ดที่นักศึกษาค้นหามากที่สุด</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "คาเฟ่ ใกล้ม.กรุงเทพ",
              "ร้านกาแฟ ใกล้ม.กรุงเทพ รังสิต",
              "คาเฟ่นั่งทำงาน รังสิต",
              "คาเฟ่มินิมอล แถวมอกรุงเทพ",
              "ร้านอาหาร ใกล้ม.กรุงเทพ มื้อกลางวัน",
              "อาหารอร่อย ใกล้ ม.กรุงเทพ",
              "คาเฟ่เปิดเช้า ม.กรุงเทพ",
              "ร้านขนมหวาน ใกล้ ม.กรุงเทพ",
              "คาเฟ่ วิวดี ใกล้ ม.กรุงเทพ",
              "ร้านอาหารราคานักศึกษา ม.กรุงเทพ"
            ].map((keyword, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors duration-200"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
