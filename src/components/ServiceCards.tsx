import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Settings, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

export const ServiceCards = () => {
  const services = [
    {
      title: "Manutenção Mecânica de Equipamentos",
      subtitle: "Preventiva e Corretiva",
      icon: Wrench,
      description: "Manutenção especializada em máquinas CNC, guilhotinas, dobradeiras, calandras, corte a laser e plasma",
      benefits: [
        "Redução significativa de downtime",
        "Aumento da vida útil dos equipamentos",
        "Melhoria no desempenho e qualidade",
        "Economia em reparos emergenciais"
      ],
      highlight: true
    },
    {
      title: "Consultoria Industrial",
      subtitle: "Otimização de Processos",
      icon: Settings,
      description: "Análise e otimização de processos produtivos para aumentar eficiência e reduzir custos operacionais",
      benefits: [
        "Análise detalhada de processos",
        "Identificação de gargalos",
        "Implementação de melhorias",
        "Acompanhamento de resultados"
      ],
      highlight: false
    },
    {
      title: "Liderança e Gestão",
      subtitle: "Desenvolvimento de Equipes",
      icon: Users,
      description: "Treinamento e desenvolvimento de líderes para gestão eficiente de equipes industriais",
      benefits: [
        "Capacitação de líderes",
        "Melhoria do clima organizacional",
        "Aumento da produtividade",
        "Desenvolvimento de talentos"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            O que fazemos
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Soluções completas para manutenção mecânica, consultoria industrial e desenvolvimento de liderança
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 shadow-steel transition-all duration-300 hover:shadow-industrial hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-gradient-industrial text-white border-2 border-industrial-accent' 
                  : 'bg-gradient-steel border border-border hover:border-industrial-blue/30'
              }`}
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight ? 'bg-white/20' : 'bg-industrial-blue/10'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.highlight ? 'text-white' : 'text-industrial-blue'
                  }`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  service.highlight ? 'text-white' : 'text-industrial-dark'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm font-medium ${
                  service.highlight ? 'text-industrial-accent' : 'text-industrial-blue'
                }`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className={`mb-6 leading-relaxed ${
                service.highlight ? 'text-white/90' : 'text-industrial-steel'
              }`}>
                {service.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className={`font-semibold mb-3 ${
                  service.highlight ? 'text-white' : 'text-industrial-dark'
                }`}>
                  Benefícios:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        service.highlight ? 'text-industrial-accent' : 'text-industrial-blue'
                      }`} />
                      <span className={`text-sm ${
                        service.highlight ? 'text-white/90' : 'text-industrial-steel'
                      }`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button 
                className={`w-full ${
                  service.highlight 
                    ? 'bg-white text-industrial-dark hover:bg-white/90' 
                    : 'bg-industrial-blue hover:bg-industrial-blue/90 text-white'
                }`}
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {service.highlight ? 'Solicitar Manutenção' : 'Saber Mais'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Key Differentials */}
        <div className="bg-gradient-steel rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-industrial-dark mb-6 text-center">
            Por que escolher a Axis Consultoria?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-industrial-blue" />
              </div>
              <h4 className="font-semibold text-industrial-dark mb-2">Experiência Prática</h4>
              <p className="text-sm text-industrial-steel">Anos de experiência em chão de fábrica</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-industrial-blue" />
              </div>
              <h4 className="font-semibold text-industrial-dark mb-2">Conhecimento Técnico</h4>
              <p className="text-sm text-industrial-steel">Especialização em equipamentos industriais</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-industrial-blue" />
              </div>
              <h4 className="font-semibold text-industrial-dark mb-2">Foco em Resultados</h4>
              <p className="text-sm text-industrial-steel">Agronegócio e indústria metalmecânica</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-industrial-blue" />
              </div>
              <h4 className="font-semibold text-industrial-dark mb-2">Atendimento Ágil</h4>
              <p className="text-sm text-industrial-steel">Resposta rápida em emergências</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};