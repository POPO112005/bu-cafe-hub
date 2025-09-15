import Navigation from "@/components/Navigation";
import PlaceCard from "@/components/PlaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import cafeImage from "@/assets/cafe-workspace.jpg";

const Cafes = () => {
  const cafes = [
    {
      name: "The Coffee Bean Studio",
      description: "คาเฟ่มินิมอลสไตล์โมเดิร์น เปิดเช้า Wi-Fi เร็ว เหมาะสำหรับนั่งทำงาน วิวสวน บรรยากาศสงบ",
      image: cafeImage,
      rating: 4.6,
      priceRange: "60-150 บาท",
      openHours: "06:30-21:00",
      distance: "180 ม.",
      tags: ["นั่งทำงาน", "เปิดเช้า", "มินิมอล", "Wi-Fi"],
      highlights: ["Cappuccino", "Croissant", "Cheesecake"]
    },
    {
      name: "Brew & Books",
      description: "คาเฟ่บุ๊คสโตร์ บรรยากาศอบอุ่น มีหนังสือให้อ่าน กาแฟหอมกรุ่น เปิดจนดึก เหมาะกับศึกษา",
      image: cafeImage,
      rating: 4.5,
      priceRange: "55-120 บาท",
      openHours: "08:00-23:00",
      distance: "220 ม.",
      tags: ["ร้านหนังสือ", "เปิดดึก", "อ่านหนังสือ", "ศึกษา"],
      highlights: ["Latte Art", "Brownie", "ชาไทย"]
    },
    {
      name: "Garden View Café",
      description: "คาเฟ่วิวสวน บรรยากาศธรรมชาติ โซนกลางแจ้ง โซนปรับอากาศ Instagram-able สวยงาม",
      image: cafeImage,
      rating: 4.4,
      priceRange: "70-180 บาท",
      openHours: "07:00-20:00",
      distance: "300 ม.",
      tags: ["วิวดี", "กลางแจ้ง", "Instagram", "ธรรมชาติ"],
      highlights: ["Americano", "Matcha Latte", "Waffle"]
    },
    {
      name: "Minimal Space",
      description: "คาเฟ่สไตล์มินิมอล โต๊ะทำงานกว้าง ปลั๊กไฟทุกที่นั่ง เงียบสงบ เหมาะทำงานกลุ่ม",
      image: cafeImage,
      rating: 4.3,
      priceRange: "50-130 บาท",
      openHours: "09:00-22:00",
      distance: "160 ม.",
      tags: ["มินิมอล", "ทำงานกลุ่ม", "ปลั๊กไฟ", "เงียบ"],
      highlights: ["Espresso", "Sandwich", "Cake"]
    },
    {
      name: "Sunrise Coffee",
      description: "คาเฟ่เปิดเช้า รับแสงแรก กาแฟสดทุกวัน เบเกอรี่หอมๆ เมนูอาหารเช้า ราคาดี",
      image: cafeImage,
      rating: 4.2,
      priceRange: "45-110 บาท",
      openHours: "05:30-18:00",
      distance: "270 ม.",
      tags: ["เปิดเช้า", "เบเกอรี่", "อาหารเช้า", "ราคาดี"],
      highlights: ["Morning Blend", "Croissant", "Yogurt"]
    },
    {
      name: "Rooftop Beans",
      description: "คาเฟ่ชั้นบนดาดฟ้า วิวเมือง บรรยากาศโรแมนติก เหมาะนัดเพื่อน Sunset view สวยมาก",
      image: cafeImage,
      rating: 4.7,
      priceRange: "80-200 บาท",
      openHours: "10:00-24:00",
      distance: "450 ม.",
      tags: ["ดาดฟ้า", "วิวเมือง", "Sunset", "โรแมนติก"],
      highlights: ["Cold Brew", "Tiramisu", "Smoothie"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-warm text-primary-foreground py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              คาเฟ่ใกล้ม.กรุงเทพ
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              ค้นหาคาเฟ่นั่งชิล นั่งทำงาน บรรยากาศดี ใกล้มหาวิทยาลัย
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                  <Input 
                    placeholder="ค้นหาคาเฟ่ เช่น นั่งทำงาน, วิวสวน, เปิดเช้า..."
                    className="pl-9 sm:pl-12 bg-card/95 backdrop-blur-sm border-0 h-12 sm:h-14 text-sm sm:text-base shadow-lg text-black"
                  />
                </div>
                <Button variant="secondary" className="h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base font-medium whitespace-nowrap shadow-lg">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="hidden sm:inline">กรองตัวเลือก</span>
                  <span className="sm:hidden">กรอง</span>
                </Button>
              </div>
              
   
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">คาเฟ่แนะนำ</h2>
          <p className="text-sm sm:text-base text-muted-foreground">คาเฟ่บรรยากาศดี เหมาะนั่งชิล นั่งทำงาน ใกล้มหาวิทยาลัยกรุงเทพ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cafes.map((cafe, index) => (
            <PlaceCard key={index} {...cafe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafes;