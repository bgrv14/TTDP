import React from 'react';

export const ContactUs: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white mb-8 md:mb-16 pt-8 md:pt-16">
      <div className="container-default">
        <h2 className="text-h2 text-black mb-6 md:mb-8">Зв'язок з нами</h2>
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ліва частина */}
            <div>
              <h2 className="text-h2 text-black mb-4">
                Є питання?<br />
                Зв'яжіться з нами!
              </h2>
              <p className="text-gray-400 mb-8">
                Наша команда готова допомогти вам з будь-якими питаннями, які у вас можуть виникнути. Просто заповніть форму нижче і ми з вами зв'яжемось протягом 24 годин.
              </p>
              <img 
                src="/images/1.png" 
                alt="Контакти"
                className="w-[200px] h-auto hidden md:block"
              />
            </div>

            {/* Права частина - Форма */}
            <form className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше ім'я*"
                  className="w-full px-6 md:px-10 py-3 rounded-2xl md:rounded-3xl placeholder-gray-200 border-0 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Ваш email*"
                  className="w-full px-6 md:px-10 py-3 rounded-2xl md:rounded-3xl placeholder-gray-200 border-0 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Ваш номер телефону*"
                  className="w-full px-6 md:px-10 py-3 rounded-2xl md:rounded-3xl placeholder-gray-200 border-0 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 rounded-xl md:rounded-3xl border-0"
                />
                <label htmlFor="privacy" className="text-xs md:text-sm text-gray-300">
                  Залишаючи свої дані, я погоджуюсь на обробку персональних даних відповідно до Політики конфіденційності
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-black/90 transition-colors text-sm md:text-base"
              >
                ВІДПРАВИТИ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 