import React from 'react';

export const StudentCases: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container-default">
        <h2 className="text-[32px] font-bold mb-8 text-black ">Кейси студентів</h2>
        
        {/* Мобільна версія */}
        <div className="md:hidden">
          <div className="bg-[#F1F5F9] rounded-[40px] p-4">
            {/* Зображення */}
            <div className="flex justify-center mb-4">
              <img 
                src="/images/5.png"
                alt="Student Case"
                className="w-[313px] h-[350px] object-cover rounded-[20px]"
              />
            </div>

            {/* Контент */}
            <div className="flex flex-col items-center text-left my-2 mx-8">
              <div className="bg-gray-800 rounded-2xl p-6 mb-8 w-fit border-2 border-black shadow-[0px_4px_0px_4px_#000000]">
                <h3 className="text-[24px] leading-[120%] font-bold mb-4 text-black">Web Development</h3>
                <p className="text-[14px] leading-[150%] text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Neque repellendus minima reiciendis nobis dolore obcaecati.
                </p>
              </div>

              {/* Теги */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">Web Development</span>
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">Digital Marketing</span>
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">SaaS Products</span>
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">Apps Development</span>
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">SEO Services</span>
                <span className="px-4 py-2 text-black rounded-full btn btn-outline text-[14px]">Data Analysis</span>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6">
            <button className="text-black">&lt;</button>
            <span className="text-sm text-black">1 / 3</span>
            <button className="text-black">&gt;</button>
          </div>
            </div>
          </div> 
        </div>

        {/* Десктопна версія */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-100 rounded-3xl p-8">
              <div className="flex gap-8">
                {/* Зображення */}
                <div className="h-[482px] flex items-center">
                  <img 
                    src="/images/5.png" 
                    alt="Student Case"
                    className="w-[340px] h-[482px] object-cover rounded-2xl shadow-sm"
                  />
                </div>

                {/* Інформація про кейс */}
                <div className="flex-1 flex flex-col justify-between py-5">
                  <div>
                    <div className="bg-gray-800 rounded-2xl p-6 mb-8 w-fit border-2 border-black shadow-[0px_4px_0px_4px_#000000]">
                      <h3 className="text-h3 text-black m-8">Web Development</h3>
                      <p className="text-gray-500 px-8 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
                      </p>
                    </div>
                  </div>

                  {/* Теги */}
                  <div>
                    <div className="flex flex-wrap gap-3 justify-center mb-10">
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">Web Development</span>
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">Digital Marketing</span>
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">SaaS Products</span>
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">Apps Development</span>
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">SEO Services</span>
                      <span className="px-4 py-2 text-black rounded-full btn btn-outline">Data Analysis</span>
                    </div>

                    {/* Навігація слайдера */}
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-black">&lt;</button>
                      <span className="text-black">1 / 3</span>
                      <button className="text-black">&gt;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 