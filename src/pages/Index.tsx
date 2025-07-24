import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const menuItems = [
    {
      category: "Напитки",
      items: [
        { name: "Эспрессо", description: "Классический крепкий кофе", price: "150₽" },
        { name: "Капучино", description: "Нежный кофе с молочной пенкой", price: "220₽" },
        { name: "Латте", description: "Мягкий кофе с большим количеством молока", price: "250₽" },
        { name: "Американо", description: "Эспрессо с горячей водой", price: "180₽" },
        { name: "Какао", description: "Горячий шоколадный напиток", price: "200₽" },
        { name: "Чай", description: "Черный, зеленый, травяной", price: "120₽" }
      ]
    },
    {
      category: "Десерты",
      items: [
        { name: "Тирамису", description: "Классический итальянский десерт", price: "350₽" },
        { name: "Чизкейк", description: "Нежный творожный торт", price: "320₽" },
        { name: "Круассан", description: "Французская выпечка с маслом", price: "180₽" },
        { name: "Штрудель", description: "Австрийский яблочный пирог", price: "280₽" },
        { name: "Эклер", description: "Заварное пирожное с кремом", price: "160₽" },
        { name: "Макарон", description: "Французское миндальное печенье", price: "120₽" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-amber-900/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={28} className="text-amber-100" />
              <h1 className="text-xl font-bold text-amber-100">Vintage Café</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-amber-100 hover:text-amber-200 transition-colors">Главная</a>
              <a href="#menu" className="text-amber-100 hover:text-amber-200 transition-colors">Меню</a>
              <a href="#atmosphere" className="text-amber-100 hover:text-amber-200 transition-colors">Атмосфера</a>
              <a href="#contact" className="text-amber-100 hover:text-amber-200 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
            Vintage Café
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 font-light max-w-2xl mx-auto">
            Окунитесь в атмосферу старинного европейского кафе, где каждая чашка кофе — это история, а каждый момент — воспоминание
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full text-lg">
              <Icon name="Menu" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button variant="outline" size="lg" className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-full text-lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Найти нас
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <Icon name="Coffee" size={64} className="text-amber-700" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <Icon name="Croissant" size={64} className="text-amber-700" />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Наше меню</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Отборные напитки и десерты, приготовленные по классическим рецептам с любовью к традициям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, idx) => (
              <Card key={idx} className="bg-amber-50/80 border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-amber-800 text-white">
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <Icon name={category.category === "Напитки" ? "Coffee" : "Cookie"} size={24} className="mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start border-b border-amber-200 pb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-amber-900 text-lg">{item.name}</h4>
                          <p className="text-amber-700 text-sm mt-1">{item.description}</p>
                        </div>
                        <span className="font-bold text-amber-800 text-lg ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Уютная атмосфера</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Наше кафе создано для тех, кто ценит комфорт, теплоту и неспешные беседы за чашкой ароматного кофе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Armchair" size={32} className="text-amber-100" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Мягкие кресла</h3>
                <p className="text-amber-700">Удобные винтажные кресла и диваны создают атмосферу домашнего уюта</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={32} className="text-amber-100" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Теплое освещение</h3>
                <p className="text-amber-700">Мягкий свет винтажных ламп создает камерную и романтичную обстановку</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Music" size={32} className="text-amber-100" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Джазовая музыка</h3>
                <p className="text-amber-700">Негромкий джаз и классическая музыка дополняют винтажную атмосферу</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-amber-900/10 border-amber-300 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-amber-800 mb-4">
                  "В нашем кафе время замедляется. Здесь каждый найдет свой уголок для размышлений, встреч с друзьями или просто наслаждения моментом с идеальной чашкой кофе."
                </blockquote>
                <p className="text-amber-700 font-semibold">— Основатели Vintage Café</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif">Добро пожаловать</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-amber-100">ул. Старинная, 42<br />Москва, 123456</p>
            </div>
            <div>
              <Icon name="Clock" size={24} className="mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Часы работы</h3>
              <p className="text-amber-100">Пн-Вс: 8:00 - 22:00<br />Без выходных</p>
            </div>
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-amber-100">+7 (495) 123-45-67<br />Бронирование столиков</p>
            </div>
          </div>
          <Button size="lg" className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-full">
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать столик
          </Button>
        </div>
      </section>
    </div>
  );
}