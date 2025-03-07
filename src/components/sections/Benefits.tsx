import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white ">
      <div className="container-default mt-8 md:mt-16">
        <h2 className="text-h2 mb-8 md:mb-12 text-black pt-8 md:pt-16 ">Кому буде корисний курс</h2>
        
        <div className="relative rounded-[40px] md:rounded-3xl overflow-hidden bg-black p-[12px] md:p-[18px] ">
          {/* Фонове зображення */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat "
               style={{ backgroundImage: 'url(/images/background.png)' }}>
          </div>
          
          {/* Мобільна версія */}
          <div className="relative flex flex-col gap-[12px] md:hidden m-6 ">
            {/* Великий блок */}
            <div className="border border-white/20 rounded-[20px] p-3 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
              <h4 className="text-[16px] leading-[120%] font-bold mb-1.5 text-white">Trusted By Worldwide Clients Since 1</h4>
              <p className="text-white text-[11px] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
              </p>
            </div>
            
            {/* Контейнер для малих блоків */}
            <div className="grid grid-cols-2 gap-[12px]">
              {/* Малі блоки - перший ряд */}
              <div className="border border-white/20 rounded-[20px] p-3 mr-2 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
                <h4 className="text-[16px] leading-[120%] font-bold mb-1.5 text-white">First On Field</h4>
                <p className="text-white text-[11px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              <div className="border border-white/20 rounded-[20px] p-3 ml-2 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
                <h4 className="text-[16px] leading-[120%] font-bold mb-1.5 text-white">Worldwide</h4>
                <p className="text-white text-[11px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              {/* Малі блоки - другий ряд */}
              <div className="border border-white/20 rounded-[20px] p-3 mr-2 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
                <h4 className="text-[16px] leading-[120%] font-bold mb-1.5 text-white">Easy to reach</h4>
                <p className="text-white text-[11px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              <div className="border border-white/20 rounded-[20px] p-3 ml-2 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm">
                <h4 className="text-[16px] leading-[120%] font-bold mb-1.5 text-white">24/7 Support</h4>
                <p className="text-white text-[11px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
            </div>
          </div>

          {/* Десктопна версія */}
          <div className="relative hidden md:grid md:grid-cols-[1fr,auto] md:gap-[18px]">
            {/* Великий блок */}
            <div className="border border-white/20 rounded-2xl p-6 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm h-full">
              <h4 className="text-[24px] leading-[120%] font-bold mb-4 text-white">Trusted By Worldwide Clients Since 1</h4>
              <p className="text-white text-[16px] leading-[150%] mt-24">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
              </p>
            </div>
            
            {/* Контейнер для малих блоків */}
            <div className="grid grid-cols-2 gap-[18px] w-fit">
              {/* Малі блоки - перший ряд */}
              <div className="border border-white/20 rounded-2xl p-6 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm w-[245px]">
                <h4 className="text-[24px] leading-[120%] font-bold mb-4 text-white">First On Field</h4>
                <p className="text-white text-[16px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              <div className="border border-white/20 rounded-2xl p-6 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm w-[245px]">
                <h4 className="text-[24px] leading-[120%] font-bold mb-4 text-white">Worldwide</h4>
                <p className="text-white text-[16px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              {/* Малі блоки - другий ряд */}
              <div className="border border-white/20 rounded-2xl p-6 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm w-[245px]">
                <h4 className="text-[24px] leading-[120%] font-bold mb-4 text-white">Easy to reach</h4>
                <p className="text-white text-[16px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
              
              <div className="border border-white/20 rounded-2xl p-6 hover:bg-[#1A1A1A] transition-colors backdrop-blur-sm w-[245px]">
                <h4 className="text-[24px] leading-[120%] font-bold mb-4 text-white">24/7 Support</h4>
                <p className="text-white text-[16px] leading-[150%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

