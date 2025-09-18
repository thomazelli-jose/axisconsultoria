import { Star, Quote, Building2, Users, Award } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Metalúrgica São José",
      text: "A Axis reduziu nossas paradas não programadas em 40%. O atendimento é excepcional e a qualidade técnica incomparável.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      company: "Implementos Agrícolas Delta",
      text: "Consultoria que realmente entende do negócio. Conseguimos otimizar nossos processos e aumentar a produtividade.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Indústria Mecânica Força",
      text: "Manutenção preventiva que funciona. Desde que contratamos a Axis, não tivemos mais surpresas desagradáveis.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Empresas Atendidas", icon: Building2 },
    { number: "200+", label: "Profissionais Formados", icon: Users },
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "98%", label: "Satisfação dos Clientes", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-steel">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Empresas que confiam na Axis para manutenção mecânica e consultoria industrial
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-industrial-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-industrial-blue" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-industrial-dark mb-2">
                {stat.number}
              </div>
              <div className="text-industrial-steel font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-steel hover:shadow-industrial transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-industrial-blue" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-industrial-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-industrial-steel mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-industrial-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-industrial-steel">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-steel max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-industrial-dark mb-4">
              Sua empresa pode ser o próximo caso de sucesso
            </h3>
            <p className="text-industrial-steel mb-6">
              Entre em contato conosco e descubra como podemos otimizar seus processos e reduzir custos com manutenção
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-industrial-accent hover:bg-industrial-accent/90 text-industrial-dark font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento Gratuito
              </button>
              <button 
                className="border-2 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white font-semibold px-8 py-3 rounded-lg transition-all"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};