import React from 'react';
import { Header } from './sections/Header';
import { Benefits } from './sections/Benefits';
import { Speakers } from './sections/Speakers';
import { HowStudying } from './sections/HowStudying';
import { StudentCases } from './sections/StudentCases';
import { CareerCenter } from './sections/CareerCenter';
import { CourseProgram } from './sections/CourseProgram';
import { ExpertCommunity } from './sections/ExpertCommunity';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { ContactUs } from './sections/ContactUs';
import { Footer } from './sections/Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Малюнок 1 - Хедер */}
      <Header />

      {/* Малюнок 2 - Кому буде корисний курс */}
      <Benefits />

      {/* Малюнок 3 - Спікери курсу */}
      <Speakers />

      {/* Малюнок 4 - Як проходить навчання */}
      <HowStudying />

      {/* Малюнок 5 - Кейси учнів */}
      <StudentCases />

      {/* Малюнок 6 - Центр кар'єри */}
      <CareerCenter />

      {/* Малюнок 7 - Програма курсу */}
      <CourseProgram />

      {/* Малюнок 8 - Експертна спільнота */}
      <ExpertCommunity />

      {/* Малюнок 9 - Тарифи навчання */}
      <Pricing />

      {/* Малюнок 10 - Відгуки */}
      <Testimonials />

      {/* Малюнок 11 - Зв'язок з нами */}
      <ContactUs />

      {/* Малюнок 12 - Футер */}
      <Footer />
    </div>
  );
}; 