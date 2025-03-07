import React from 'react';

export const HowStudying: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-default">
        <h2 className="text-h2 text-black mb-12">Як проходить навчання</h2>
        
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Фонове зображення */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
               style={{ backgroundImage: 'url(/images/background.png)' }}>
          </div>

          {/* Контент */}
          <div className="relative p-6">
            <div className="grid grid-cols-2 gap-12">
              {/* Ліва частина */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[40px] p-4">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/images/4-1.png" 
                    alt="Процес навчання"
                    className="w-[467px] h-[321px] object-cover"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2 rounded-full mt-6 w-full">
                  <span className="w-6 h-6 flex items-center justify-center">▶</span>
                  Смотреть видео
                </button>
              </div>

              {/* Права частина */}
              <div className="text-black bg-white rounded-[40px] p-6 px-8 w-fit border-2 border-black shadow-[0px_4px_0px_4px_#000000]">
                <h3 className="text-h3 mb-12">Знакомьтесь с платформой</h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.
                </p>

                {/* Навігація слайдера */}
                <div className="flex items-center gap-4 mt-16">
                  <button className="text-black">&lt;</button>
                  <span className="text-black">1 / 4</span>
                  <button className="text-black">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 