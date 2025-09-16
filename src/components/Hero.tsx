import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Users } from "lucide-react";
import heroImage from "@/assets/hero-cnc.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-steel overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Máquina CNC em operação" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-industrial opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            AXIS CONSULTORIA CNC
          </h1>
          <p className="text-xl md:text-2xl text-industrial-light font-light italic">
            "Movendo sua empresa no eixo da evolução"
          </p>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Consultoria em CNC e 
            <span className="text-industrial-accent"> Treinamento Industrial</span>
          </h2>
          <p className="text-xl md:text-2xl text-industrial-light mb-8 max-w-4xl mx-auto">
            Otimização de Processos | Redução de Custos | Formação de Profissionais
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Settings className="w-8 h-8 text-industrial-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">20%</h3>
            <p className="text-industrial-light">Redução de Custos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-industrial-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">15%</h3>
            <p className="text-industrial-light">Redução Tempo Ciclo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <ArrowRight className="w-8 h-8 text-industrial-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
            <p className="text-industrial-light">Profissionais Formados</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => document.getElementById('contato')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Solicitar Consultoria
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-white hover:bg-white text-slate-700" onClick={() => document.getElementById('contato')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Agendar Treinamento
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </div>
    </section>;
};