import React from 'react';

export const ExpertCommunity: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-default">
        <h2 className="text-h2 text-black mb-12">Експертна Спільнота</h2>
        <div className="bg-black rounded-3xl p-8 flex justify-between items-center">
          {/* Текстовий контент */}
          <div className="max-w-[500px]">
            <h2 className="text-h2 mb-4">Центр карьеры</h2>
            <p className="text-white mb-8">
              ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint velipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-outline-white text-headline3">Востребованные профессии</button>
              <button className="btn btn-outline-white text-headline3">Практика на реальных задачах</button>
            </div>
          </div>

          {/* Зображення з іконками */}
          <div className="relative">
            <img 
              src="/images/8.png" 
              alt="Експерт"
              className="scale-125 -translate-y-3"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}; 