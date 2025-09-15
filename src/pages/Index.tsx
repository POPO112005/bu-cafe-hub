import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Search, Star, MapPin, Coffee, UtensilsCrossed, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-cafe.jpg";
import restaurantImage from "@/assets/restaurant-card.jpg";
import cafeImage from "@/assets/cafe-workspace.jpg";

const Index = () => {
  const keywords = [
    "คาเฟ่ ใกล้ม.กรุงเทพ",
    "คาเฟ่ วิวดี ใกล้ ม.กรุงเทพ", 
    "อาหารอร่อย ใกล้ ม.กรุงเทพ",
    "คาเฟ่นั่งทำงาน รังสิต",
    "ร้านกาแฟ ใกล้ม.กรุงเทพ รังสิต",
    "คาเฟ่มินิมอล แถวมอกรุงเทพ",
    "ร้านอาหาร ใกล้ม.กรุงเทพ มื้อกลางวัน",
    "คาเฟ่เปิดเช้า ม.กรุงเทพ",
    "ร้านขนมหวาน ใกล้ ม.กรุงเทพ",
    "ร้านอาหารราคานักศึกษา ม.กรุงเทพ",
    "คาเฟ่ Instagram-able รังสิต",
    "ร้านชาไข่มุก ใกล้ ม.กรุงเทพ",
    "อาหารตามสั่ง ใกล้ม.กรุงเทพ",
    "คาเฟ่ 24 ชั่วโมง รังสิต",
    "ร้านอาหารเกาหลี ใกล้ ม.กรุงเทพ"
  ];

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
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 to-warm-brown/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            ค้นหาร้านอาหาร & คาเฟ่
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90">
            ใกล้มหาวิทยาลัยกรุงเทพ รังสิต
          </p>
          
          {/* Hero Search */}
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
              {/* Mobile Layout */}
              <div className="relative sm:hidden">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="ค้นหาร้านอาหาร คาเฟ่..."
                  className="pl-10 pr-4 h-12 text-base bg-card/95 backdrop-blur-sm border-0 shadow-card text-black rounded-lg"
                />
              </div>
              <Button className="sm:hidden h-11 text-base bg-coffee hover:bg-coffee/90 rounded-lg">
                ค้นหา
              </Button>

              {/* Desktop/Tablet Layout */}
              <div className="relative hidden sm:block sm:flex-1">
                <Search className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                <Input 
                  placeholder="ค้นหาร้านอาหาร คาเฟ่ หรือเมนูอาหาร..."
                  className="pl-12 md:pl-14 pr-20 md:pr-24 h-12 md:h-14 text-base md:text-lg bg-card/95 backdrop-blur-sm border-0 shadow-card text-black rounded-l-lg sm:rounded-r-none"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 md:right-2 top-1 md:top-2 h-10 md:h-10 px-4 md:px-6 text-sm md:text-base bg-coffee hover:bg-coffee/90 rounded-lg"
                >
                  ค้นหา
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links Carousel */}
          <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 30,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                })
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 carousel-smooth">
                {keywords.map((keyword, index) => (
                  <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-auto">
                    <Badge 
                      variant="secondary" 
                      className="text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 bg-card/80 backdrop-blur-sm hover:bg-card/90 cursor-pointer badge-smooth-hover whitespace-nowrap"
                    >
                      {keyword}
                    </Badge>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Featured Places */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">สถานที่แนะนำ</h2>
          <p className="text-base sm:text-lg text-muted-foreground">ร้านอาหารและคาเฟ่ยอดนิยม ใกล้มหาวิทยาลัยกรุงเทพ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Link to="/restaurants" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-48 sm:h-56 lg:h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/90 to-coffee/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground px-4">
                    <UtensilsCrossed className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">ร้านอาหาร</h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">ค้นหาร้านอาหารอร่อยๆ ราคาเป็นกันเอง</p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/cafes" className="group">
            <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-48 sm:h-56 lg:h-64">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-coffee/90 to-warm-brown/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground px-4">
                    <Coffee className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">คาเฟ่</h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-3 sm:mb-4">คาเฟ่นั่งชิล นั่งทำงาน บรรยากาศดี</p>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium">
                      <span>ดูทั้งหมด</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
