import React from 'react';

const testimonials = [
  {
    id: 1,
    text: 'ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.',
    author: 'Yusuf Amin',
    role: 'Founder'
  },
  {
    id: 2,
    text: 'ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.',
    author: 'Fouad Osman',
    role: 'Officer'
  },
  {
    id: 3,
    text: 'ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.',
    author: 'Fairouz Mhmd',
    role: 'Manager'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-default">
        <h2 className="text-h2 mb-8 text-black">Відгуки</h2>
        
        <div className="bg-black rounded-3xl p-5 h-[330px]">
          <div className="flex h-full">
            {testimonials.map((testimonial, index) => (
              <React.Fragment key={testimonial.id}>
                <div className="flex-1 flex flex-col justify-between p-4 text-headline2">
                  <div>
                    <span className="text-8xl text-white">"</span>
                    <p className="text-white mb-4 translate-x-6 -translate-y-8">{testimonial.text}</p>
                    </div>
                  
                  <div>
                    <p className="font-bold text-white translate-x-6 -translate-y-4">{testimonial.author}</p>
                    <p className="text-white translate-x-6 -translate-y-4">{testimonial.role}</p>
                  </div>
                </div>
                {index < testimonials.length - 1 && (
                  <div className="w-px h-[211px] bg-white self-center mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Навігація слайдера */}
        <div className="flex justify-center mt-8 gap-2">
          <button className="w-1.5 h-1.5 rounded-full bg-gray-700"></button>
          <button className="w-2.5 h-2.5 rounded-full -translate-y-0.5 bg-black"></button>
          <button className="w-1.5 h-1.5 rounded-full bg-gray-700"></button>
        </div>
      </div>
    </section>
  );
}; 