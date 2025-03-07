import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[500px] md:h-[737px] text-white overflow-hidden rounded-b-[40px] md:rounded-b-[72px] -mb-8 md:-mb-16">
      {/* Фонове зображення з градієнтом */}
      <div className="hero-background bg-black">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Навігація */}
      <nav className="container-full relative z-20 py-4">
        <div className="container-default mx-auto">
          {/* Мобільне та десктопне меню */}
          <div className="flex justify-between items-center">
            {/* Лого */}
            <div className="flex items-center gap-0">
              <div className="w-5 h-5 -translate-y-2.5 bg-accent-purple rounded-md"></div>
              <div className="w-5 h-5 -translate-x-2.5 bg-primary rounded-3xl"></div>
              <span className="text-white text-[20pt] leading-[120%] font-semibold md:text-lg">Logo</span>
            </div>

            {/* Мобільна кнопка меню */}
            <button 
              className="md:hidden text-white text-[20pt] leading-[120%]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Десктопне меню */}
            <div className="hidden md:flex items-center space-x-12">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-black">Home</span>
              </div>
              <a href="#about" className="text-white hover:text-primary">About us</a>
              <a href="#services" className="text-white hover:text-primary">Services</a>
              <a href="#portfolio" className="text-white hover:text-primary">Portfolio</a>
              <a href="#blog" className="text-white hover:text-primary">Blog</a>
              <a href="#pages" className="text-white hover:text-primary">Pages</a>
              <a href="#contact" className="text-white hover:text-primary">Contact us</a>
            </div>
          </div>

          {/* Мобільне меню контент */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">About us</a>
              <a href="#services" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">Services</a>
              <a href="#portfolio" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">Portfolio</a>
              <a href="#blog" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">Blog</a>
              <a href="#pages" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">Pages</a>
              <a href="#contact" className="text-white hover:text-primary text-[20pt] leading-[120%] font-semibold">Contact us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Основний контент */}
      <div className="container-default relative z-10 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Мобільна версія */}
          <div className="flex flex-col items-center md:hidden w-full">
            {/* Текстовий контент */}
            <div className="text-center mb-8">
              <h1 className="text-[24pt] leading-[120%] font-semibold mb-4 md:text-h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-[14pt] leading-[150%] font-normal text-gray-300 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate!
              </p>
            </div>

            {/* Зображення для мобільної версії */}
            <div className="w-[280px] mb-6">
              <img 
                src="/images/1.png" 
                alt="3D модель навушників"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Аватари та текст для мобільної версії */}
            <div className="flex flex-col items-center mb-6">
              <img 
                src="/images/avatars.png"
                alt="Користувачі платформи"
                className="h-10 mb-3"
              />
              <p className="text-[12pt] leading-[120%] font-semibold text-gray-200 text-center max-w-[280px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
              </p>
            </div>

            {/* Кнопка для мобільної версії */}
            <button className="btn bg-white text-black text-[18pt] leading-[120%] font-semibold w-full max-w-[280px]">
              Зарегестрироваться
            </button>
          </div>

          {/* Десктопна версія */}
          <div className="hidden md:flex md:flex-row justify-between items-center w-full">
            {/* Текстовий контент */}
            <div className="max-w-[600px]">
              <h1 className="text-h1 font-bold mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-headline1 text-gray-300 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate!
              </p>
              <button className="btn btn-primary bg-white text-black">
                Зарегестрироваться
              </button>
            </div>

            {/* Зображення */}
            <div className="relative">
              <img 
                src="/images/1.png" 
                alt="3D модель навушників"
                className="w-[587px] h-[494px] object-contain"
              />
              {/* Блок з аватарами */}
              <div className="absolute bottom-2 left-16 flex items-center rounded-full p-4">
                <img 
                  src="/images/avatars.png"
                  alt="Користувачі платформи"
                  className="h-12"
                />
                <p className="ml-6 text-headline3 text-gray-200 max-w-[280px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 