import React from 'react';

const pricingPlans = [
  {
    title: "Колеги",
    subtitle: "Діє при оплаті навчання групи з трьох осіб",
    duration: "9 модулів за 6 тижнів",
    monthlyPrice: "3 329",
    fullPrice: "75 900",
    discount: "-5%",
    features: [
      "9 модулів за 6 тижнів",
      "Вебінари з експертами",
      "Практичні завдання",
      "Посвідчення про підвищення кваліфікації за підсумками навчання",
      "Безстроковий доступ до матеріалів",
      "Груповий чат з експертами та координаторами курсу",
      "Професійне ком'юніті"
    ]
  },
  {
    title: "Колеги",
    subtitle: "Діє при оплаті навчання групи з трьох осіб",
    monthlyPrice: "3 329",
    fullPrice: "75 900",
    duration: "9 модулів за 6 тижнів",
    discount: "-5%",
    features: [
      "9 модулів за 6 тижнів",
      "Вебінари з експертами",
      "Практичні завдання",
      "Посвідчення про підвищення кваліфікації за підсумками навчання",
      "Безстроковий доступ до матеріалів",
      "Груповий чат з експертами та координаторами курсу",
      "Професійне ком'юніті"
    ],
  },
  {
    title: "Колеги",
    subtitle: "Діє при оплаті навчання групи з трьох осіб",
    monthlyPrice: "3 329",
    fullPrice: "75 900",
    duration: "9 модулів за 6 тижнів",
    discount: "-5%",
    features: [
      "9 модулів за 6 тижнів",
      "Вебінари з експертами",
      "Практичні завдання",
      "Посвідчення про підвищення кваліфікації за підсумками навчання",
      "Безстроковий доступ до матеріалів",
      "Груповий чат з експертами та координаторами курсу",
      "Професійне ком'юніті"
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container-default">
        <h2 className="text-h2 text-black mb-8 md:mb-12">Тарифи навчання</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[10px]">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="pricing-card"
            >
              <h3 className="text-h3 mb-2">{plan.title}</h3>
              <p className="text-sm mb-4 md:mb-6">{plan.subtitle}</p>

              <div className="flex items-center gap-3 md:gap-6 mb-3">
                <span className="text-sm">{plan.duration}</span>
                <span className="text-sm">Одним платежом</span>
              </div>
              
              <div className="flex flex-wrap items-baseline gap-2 mb-4">
                <span className="text-h4">{plan.monthlyPrice}</span>
                <span className="text-sm">/місяць</span>
                <span className="text-h4">{plan.fullPrice}</span>
                <span className="text-xs md:text-sm px-2 py-1 bg-yellow-400 text-black rounded-full">
                  {plan.discount}
                </span>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-black/90 transition-colors text-sm md:text-base">
                Вибрати
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 