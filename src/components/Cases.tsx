import { TrendingUp, Clock, Shield } from "lucide-react";

export const Cases = () => {
  const cases = [
    {
      title: "Implementação de Programação Otimizada",
      category: "Projeto CNC",
      result: "12% de redução no tempo de produção",
      description: "Desenvolvimento e implementação de programação CNC otimizada para máquinas de corte, resultando em maior eficiência produtiva.",
      icon: Clock,
      color: "bg-industrial-blue"
    },
    {
      title: "Otimização de Fluxo Produtivo",
      category: "Projeto Corte e Dobra",
      result: "18% de redução em refugos",
      description: "Ajustes estratégicos no fluxo produtivo de corte e dobra, minimizando desperdícios e maximizando qualidade.",
      icon: TrendingUp,
      color: "bg-industrial-accent"
    },
    {
      title: "Formação Técnica Especializada",
      category: "Treinamento Técnico",
      result: "15% de aumento na capacidade produtiva",
      description: "Programa completo de formação de equipe em soldagem e CNC, com aplicação prática imediata dos conhecimentos.",
      icon: Shield,
      color: "bg-industrial-steel"
    }
  ];

  return (
    <section className="py-20 bg-gradient-steel">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Cases de Consultoria
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Resultados reais e mensuráveis alcançados através de soluções personalizadas
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-steel hover:shadow-industrial transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className={`${caseItem.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6 opacity-20">
                  <caseItem.icon className="w-full h-full" />
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-2">
                    {caseItem.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-industrial-blue mb-2">
                    {caseItem.result}
                  </div>
                  <p className="text-industrial-steel leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>

                {/* Progress Bar Visual */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-industrial-steel">Melhoria Alcançada</span>
                    <span className="font-semibold text-industrial-dark">
                      {caseItem.result.split('%')[0]}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${caseItem.color.replace('bg-', 'bg-')} transition-all duration-1000 group-hover:w-full`}
                      style={{ 
                        width: `${parseInt(caseItem.result.split('%')[0])}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-steel p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-industrial-dark mb-4">
              Transforme sua operação industrial
            </h3>
            <p className="text-lg text-industrial-steel mb-6">
              Cada projeto é único. Vamos conversar sobre como posso ajudar sua empresa a alcançar resultados similares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-industrial text-white px-8 py-3 rounded-lg font-semibold hover:shadow-industrial transition-all duration-300">
                Discutir Meu Projeto
              </button>
              <button className="border-2 border-industrial-blue text-industrial-blue px-8 py-3 rounded-lg font-semibold hover:bg-industrial-blue hover:text-white transition-all duration-300">
                Ver Mais Cases
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};