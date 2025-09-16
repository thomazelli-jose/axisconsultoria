import { Building2, GraduationCap, Wrench, Briefcase } from "lucide-react";
export const Experience = () => {
  const experiences = [{
    title: "Consultoria em Corte e Dobra",
    company: "SL Equipamentos",
    period: "2024–2025",
    description: "Liderança de equipe e otimização de processos → aumento de eficiência operacional e redução de desperdícios.",
    icon: Wrench,
    current: true
  }, {
    title: "Professor Técnico",
    company: "ETEC de Bebedouro",
    period: "2024–Atual",
    description: "Aulas práticas e teóricas em Processos de Fabricação, CNC, Soldagem e Gestão Industrial.",
    icon: GraduationCap,
    current: true
  }, {
    title: "Analista de Engenharia de Produtos",
    company: "Nonino",
    period: "2022–2024",
    description: "Desenvolvimento de soluções para implementos agrícolas com foco em eficiência produtiva.",
    icon: Building2,
    current: false
  }, {
    title: "Engenheiro Mecânico Trainee",
    company: "Macritce",
    period: "2021–2022",
    description: "Gestão de projetos industriais e avaliação de desempenho de equipes.",
    icon: Briefcase,
    current: false
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Experiência Relevante
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Trajetória sólida com resultados comprovados em diferentes setores da indústria
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-industrial-blue"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-industrial-blue rounded-full border-4 border-white shadow-steel z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`bg-gradient-steel rounded-lg p-6 shadow-steel border-l-4 ${exp.current ? 'border-industrial-accent' : 'border-industrial-blue'}`}>
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${exp.current ? 'bg-industrial-accent' : 'bg-industrial-blue'}`}>
                        <exp.icon className={`w-5 h-5 ${exp.current ? 'text-industrial-dark' : 'text-white'}`} />
                      </div>
                      {exp.current}
                    </div>
                    
                    <h3 className="text-xl font-bold text-industrial-dark mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      
                      
                    </div>
                    <p className="text-industrial-steel leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};