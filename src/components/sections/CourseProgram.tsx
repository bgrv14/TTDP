import React, { useState } from "react";

interface CourseSection {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const courseSections: CourseSection[] = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["Web Development", "Digital Marketing", "SaaS Products"],
  },
  {
    title: "Digital Marketing",
    description:
      "Explicabo dolores debitis alias maiores consequatur facilis neque voluptatibus rerum dolore.",
    image: "/images/apps-development.png",
    tags: ["Digital Marketing", "SEO Services", "Data Analysis"],
  },
  {
    title: "SaaS Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["SaaS Products", "Digital Marketing", "Apps Development"],
  },
  { 
    title: "SaaS Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["SaaS Products", "Digital Marketing", "Apps Development"],
  },
  { 
    title: "SaaS Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["SaaS Products", "Digital Marketing", "Apps Development"],
  },
  { 
    title: "Apps Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["SaaS Products", "Digital Marketing", "Apps Development"],
  },
  { 
    title: "SEO Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["SEO Services", "Digital Marketing", "Apps Development"],
  },
  { 
    title: "Data Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    image: "/images/web-development.png",
    tags: ["Data Analysis", "Digital Marketing", "Apps Development"],
  },
];

export const CourseProgram: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courseSections.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + courseSections.length) % courseSections.length
    );
  };

  const { title, description, image, tags } = courseSections[currentIndex];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container-default">
        <h2 className="text-[32px] font-bold mb-8 text-black">Програма курсу</h2>
        
        {/* Мобільна версія */}
        <div className="md:hidden">
          <div className="bg-[#F1F5F9] rounded-[40px] p-4">
            {/* Зображення */}
            <div className="flex justify-center mb-4">
              <img 
                src="/images/7.png"
                alt="Course Program"
                className="w-[313px] h-[350px] object-cover rounded-[20px]"
              />
            </div>

            {/* Контент */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="bg-white rounded-[20px] p-6 border-2 border-black w-full mb-4 text-black">
                <h3 className="text-[24px] leading-[120%] font-bold mb-4 text-black">Web Development</h3>
                <p className="text-[14px] leading-[150%] text-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Neque repellendus minima reiciendis nobis dolore obcaecati.
                </p>
              </div>

              {/* Прогрес моб*/}
              <div className="flex flex-col items-center">
                      <div className="bg-white border-2 border-black rounded-full px-10 text-black text-headline2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </div>
                <div className="bg-black text-white text-headline2 rounded-b-[16px] px-4 py-1 flex items-center gap-10 ">
                        <span>{currentIndex + 1}</span>
                        <button onClick={handlePrev} className="headline3">←</button>
                        <button onClick={handleNext} className="headline3">+</button>
                        <button onClick={handleNext} className="headline3">→</button>
                        <span>{courseSections.length}</span>
                      </div>
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
                    src="/images/7.png"
                    alt="Course Program"
                    className="w-[340px] h-[482px] object-cover rounded-2xl shadow-sm"
                  />
                </div>

                {/* Інформація про програму */}
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <div className="bg-gray-800 rounded-2xl p-6 mb-8 w-fit border-2 border-black shadow-[0px_4px_0px_4px_#000000]">
                      <h3 className="text-h3 text-black m-6 ">Web Development</h3>
                      <p className="text-gray-500 px-8 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
                      </p>
                    </div>

                    {/* Прогрес */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white border-2 border-black rounded-full px-14 py-2 text-black text-headline2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </div>

                      <div className="bg-black text-white text-headline2 rounded-b-[16px] px-16 py-0 flex items-center gap-10 ">
                        <span>{currentIndex + 1}</span>
                        <button onClick={handlePrev} className="headline3">←</button>
                        <button onClick={handleNext} className="headline3">+</button>
                        <button onClick={handleNext} className="headline3">→</button>
                        <span>{courseSections.length}</span>
                      </div>
                    </div>

                    {/* Теги */}
                    <div>
                      <div className="flex flex-wrap gap-3 justify-center mt-12">
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline ">Web Development</span>
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline">Digital Marketing</span>
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline">SaaS Products</span>
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline">Apps Development</span>
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline">SEO Services</span>
                        <span className="px-4 py-2 text-black rounded-full btn btn-outline">Data Analysis</span>
                      </div>
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