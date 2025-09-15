import { Award, Target, Users, Zap } from "lucide-react";
import aboutImage from "@/assets/about-engineer.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-industrial">
              <img 
                src={aboutImage} 
                alt="Engenheiro especialista em CNC" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-industrial opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
              Sobre Mim
            </h2>
            
            <div className="space-y-6 text-lg text-industrial-steel leading-relaxed">
              <p>
                Sou <strong>Engenheiro Mecânico</strong>, pós-graduado em <strong>Engenharia de Segurança do Trabalho</strong>, 
                com sólida experiência em consultoria de processos industriais, programação CNC e liderança de equipes técnicas.
              </p>
              
              <p>
                Minha trajetória me permitiu atuar em diferentes segmentos da indústria, do chão de fábrica à docência técnica, 
                unindo conhecimento prático, visão estratégica e capacidade de formar profissionais.
              </p>

              <div className="bg-gradient-steel p-6 rounded-lg border-l-4 border-industrial-blue">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-industrial-blue mr-3" />
                  <h3 className="text-xl font-semibold text-industrial-dark">Minha Missão</h3>
                </div>
                <p className="text-industrial-steel">
                  Apoiar empresas na busca por eficiência operacional, redução de custos e aumento de rentabilidade, 
                  sempre com foco em resultados sustentáveis e desenvolvimento humano.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-industrial-dark mb-6">Meus Princípios</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-industrial-blue" />
                  <span className="text-industrial-steel font-medium">Ética e Organização</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-industrial-blue" />
                  <span className="text-industrial-steel font-medium">Visão Analítica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-industrial-blue" />
                  <span className="text-industrial-steel font-medium">Liderança Sólida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-industrial-blue" />
                  <span className="text-industrial-steel font-medium">Foco em Resultados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};