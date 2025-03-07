import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "Юлія Петренко",
    role: "Frontend Developer",
    text: "Навчання в TTDP повністю змінило мій професійний шлях. Викладачі дійсно знають свою справу і допомагають на кожному етапі.",
    image: "/testimonials/student1.jpg"
  },
  {
    id: 2,
    name: "Олександр Коваленко",
    role: "UX/UI Designer",
    text: "Практичний підхід до навчання та реальні проекти допомогли мені швидко знайти роботу в провідній компанії.",
    image: "/testimonials/student2.jpg"
  },
  {
    id: 3,
    name: "Марія Іваненко",
    role: "Full Stack Developer",
    text: "Чудова програма навчання та підтримка менторів. Я отримала не лише знання, але й впевненість у своїх силах.",
    image: "/testimonials/student3.jpg"
  }
]

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-h3 md:text-h2 font-bold mb-4">
            Відгуки наших випускників
          </h2>
          <p className="text-headline1 text-gray-300 max-w-2xl mx-auto">
            Дізнайтеся, що кажуть про навчання наші випускники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-headline2 font-bold">{testimonial.name}</h3>
                  <p className="text-headline3 text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-headline2 text-gray-400">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 