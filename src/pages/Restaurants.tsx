import Navigation from "@/components/Navigation";
import PlaceCard from "@/components/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import restaurantImage from "@/assets/restaurant-card.jpg";

const Restaurants = () => {
  const restaurants = [
    {
      name: "ครัวบ้านไผ่",
      description: "ร้านอาหารไทยต้นตำรับ เมนูหลากหลาย ราคาเป็นกันเอง เหมาะสำหรับนักศึกษา อาหารอร่อย บรรยากาศอบอุ่น",
      image: restaurantImage,
      rating: 4.5,
      priceRange: "50-120 บาท",
      openHours: "10:00-21:00",
      distance: "200 ม.",
      tags: ["อาหารไทย", "ราคานักศึกษา", "มื้อกลางวัน"],
      highlights: ["ข้าวผัดปูดอง", "ต้มยำกุ้ง", "ส้มตำไทย"]
    },
    {
      name: "Seoul Kitchen",
      description: "ร้านอาหารเกาหลีสไตล์โมเดิร์น เมนูยอดนิยม พร้อมบรรยากาศสบายๆ เหมาะสำหรับนักศึกษา",
      image: restaurantImage,
      rating: 4.3,
      priceRange: "80-200 บาท",
      openHours: "11:00-22:00",
      distance: "300 ม.",
      tags: ["อาหารเกาหลี", "ร้านใหม่", "Instagram-able"],
      highlights: ["บิบิมบับ", "บุลโกกิ", "ไก่ทอดเกาหลี"]
    },
    {
      name: "ข้าวซอยลุงดี",
      description: "ร้านข้าวซอยลำใสชาววินส์เข้มข้น รสชาติต้นตำรับ ราคาไม่แพง อิ่มอร่อยคุ้มค่า",
      image: restaurantImage,
      rating: 4.7,
      priceRange: "35-80 บาท",
      openHours: "08:00-16:00",
      distance: "150 ม.",
      tags: ["ข้าวซอย", "อาหารเหนือ", "ราคาถูก"],
      highlights: ["ข้าวซอยไก่", "ข้าวซอยเนื้อ", "แคบหมู"]
    },
    {
      name: "Pizza Corner",
      description: "พิซซ่าสดใหม่ หน้าหนา ราคาเป็นมิตรกับนักศึกษา มีโปรโมชั่นดีๆ พร้อมเครื่องดื่มเย็นๆ",
      image: restaurantImage,
      rating: 4.2,
      priceRange: "120-300 บาท",
      openHours: "11:00-23:00",
      distance: "400 ม.",
      tags: ["พิซซ่า", "อาหารฝรั่ง", "กลุ่ม"],
      highlights: ["Margherita", "Hawaiian", "Meat Lovers"]
    },
    {
      name: "ครัวลูกแมว",
      description: "ส้มตำรสจัดจ้าน บรรยากาศร่มๆ ย่านวิทยาเขต ราคาดี มีที่นั่งเยอะ เหมาะกับกิน กลุ่มใหญ่",
      image: "https://img.wongnai.com/p/1920x0/2022/09/03/fdeafffc8cca4777a280f33e4e6f1fe8.jpg",
      rating: 4.4,
      priceRange: "25-70 บาท",
      openHours: "16:00-22:00",
      distance: "250 ม.",
      tags: ["ส้มตำ", "อาหารอีสาน", "ราคาถูก"],
      highlights: ["ส้มตำไทย", "ลาบหมู", "ไก่ย่าง"]
    },
    {
      name: "Sushi Express",
      description: "ซูชิสดใหม่ คุณภาพดี ราคาเริ่มต้นลาน 40 บาท เหมาะสำหรับคนรักซูชิ บรรยากาศสะอาด",
      image: "https://img.wongnai.com/p/1920x0/2022/08/06/246fd37f8518462e8c4fd0a074e8d235.jpg",
      rating: 4.1,
      priceRange: "40-150 บาท",
      openHours: "11:00-21:30",
      distance: "350 ม.",
      tags: ["ซูชิ", "อาหารญี่ปุ่น", "สด"],
      highlights: ["ซูชิแซลมอน", "เทมปุระ", "อูดง"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-warm text-primary-foreground py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">ร้านอาหารใกล้ม.กรุงเทพ</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8">ค้นหาร้านอาหารอร่อยๆ ราคาเป็นกันเอง สำหรับนักศึกษา</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input 
                placeholder="ค้นหาร้านอาหาร เช่น ข้าวผัด, ส้มตำ, พิซซ่า..."
                className="pl-9 sm:pl-10 pr-20 sm:pr-24 bg-card border-0 h-10 sm:h-12 text-sm sm:text-base text-black rounded-lg"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm bg-coffee hover:bg-coffee/90 rounded-md"
              >
                ค้นหา
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">ร้านอาหารแนะนำ</h2>
          <p className="text-sm sm:text-base text-muted-foreground">ร้านอาหารอร่อยๆ ใกล้มหาวิทยาลัยกรุงเทพ ราคาเป็นกันเอง</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {restaurants.map((restaurant, index) => (
            <PlaceCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;