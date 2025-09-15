import { Button } from "@/components/ui/button";
import { Settings, Users, TrendingUp, Wrench, Target, BookOpen } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-steel">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Serviços Oferecidos
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Soluções completas em CNC e liderança industrial para maximizar a eficiência da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CNC Consultancy */}
          <div className="bg-white rounded-lg shadow-steel p-8 border border-industrial-light hover:shadow-industrial transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-industrial rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-industrial-dark">Consultoria em Máquinas CNC</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Wrench className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Programação e operação de máquinas CNC (torno, fresadora, plasma, laser, corte e dobra)</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Desenvolvimento de programas otimizados para redução de tempo de ciclo</p>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Análise de processos industriais e implementação de melhorias</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Redução de desperdícios e aumento da eficiência produtiva</p>
              </div>
            </div>

            <Button variant="industrial" className="w-full">
              Solicitar Consultoria CNC
            </Button>
          </div>

          {/* Leadership Consultancy */}
          <div className="bg-white rounded-lg shadow-steel p-8 border border-industrial-light hover:shadow-industrial transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-industrial rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-industrial-dark">Consultoria em Liderança e Gestão</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Estruturação de equipes técnicas de alta performance</p>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Implementação de práticas de Gestão Industrial</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Desenvolvimento de líderes e capacitação em gestão de processos</p>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-industrial-blue mt-1 flex-shrink-0" />
                <p className="text-industrial-steel">Formação de profissionais através de treinamentos técnicos e didáticos</p>
              </div>
            </div>

            <Button variant="industrial" className="w-full">
              Solicitar Consultoria em Gestão
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-steel p-8">
          <h3 className="text-3xl font-bold text-industrial-dark mb-8 text-center">
            Resultados e Diferenciais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-steel rounded-lg">
              <div className="text-3xl font-bold text-industrial-blue mb-2">20%</div>
              <p className="text-industrial-steel">Redução de custos em processos de corte e dobra</p>
            </div>
            <div className="text-center p-6 bg-gradient-steel rounded-lg">
              <div className="text-3xl font-bold text-industrial-blue mb-2">15%</div>
              <p className="text-industrial-steel">Redução no tempo de corte com programas CNC otimizados</p>
            </div>
            <div className="text-center p-6 bg-gradient-steel rounded-lg">
              <div className="text-3xl font-bold text-industrial-blue mb-2">100+</div>
              <p className="text-industrial-steel">Profissionais formados com aplicação prática imediata</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-industrial-blue rounded-full mt-2"></div>
              <p className="text-industrial-steel">Experiência em diferentes setores: implementos agrícolas, indústrias de transformação e docência técnica</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-industrial-blue rounded-full mt-2"></div>
              <p className="text-industrial-steel">Capacidade de alinhar chão de fábrica à visão estratégica da gestão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};