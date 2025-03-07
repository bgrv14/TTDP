import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-14 rounded-t-[72px] -mt-16">
      <div className="container-default ">
        <div className="flex justify-between items-start mb-12  mr-6">
          {/* Логотип та опис */}
          <div className="max-w-[400px]">
            <div className="flex items-center gap-0 mb-8">
              <div className="w-5 h-5 -translate-y-2.5 bg-accent-purple rounded-md"></div>
              <div className="w-5 h-5 -translate-x-2.5 bg-primary rounded-3xl"></div>
              <span className="text-white text-h5">Logo</span>
            </div>
            <p className="text-white text-headline2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facere modi possimus dignissimos, aliquam nobis eaque? Voluptatem magnam quisquam rem.
            </p>
          </div>

          {/* Контактна інформація */}
          <div>
            <h3 className="text-white text-headline1 mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-white">example@support.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">📍</span>
                <span className="text-white">5 xyz st., abc, vallhalla</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижня частина */}
        <div className="flex justify-between items-center pt-8 ">
          <div className="text-white text-headline2">© 2024 Created by: Martin</div>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 