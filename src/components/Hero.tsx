import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cnc.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-industrial overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Máquinas CNC industriais e manutenção mecânica" 
          className="w-full h-full object-cover opacity-15" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/90 via-industrial-dark/80 to-industrial-blue/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            AXIS CONSULTORIA
          </h1>
          <div className="text-2xl md:text-3xl text-industrial-accent font-semibold mb-2">
            CNC & MANUTENÇÃO MECÂNICA
          </div>
          <div className="flex items-center justify-center gap-2 text-lg text-industrial-light">
            <MapPin className="w-5 h-5" />
            <span>Bebedouro-SP e Região</span>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Reduzimos paradas, aumentamos produtividade e damos 
            <span className="text-industrial-accent"> suporte completo em máquinas CNC</span>
          </h2>
          <p className="text-xl md:text-2xl text-industrial-light mb-8 max-w-4xl mx-auto font-light">
            Consultoria industrial, liderança e manutenção mecânica de equipamentos
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-industrial-accent hover:bg-industrial-accent/90 text-industrial-dark font-semibold shadow-industrial" 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-industrial-dark font-semibold" 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Vistoria
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Manutenção Preventiva</h3>
            <p className="text-industrial-light text-sm">Evite paradas não programadas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Manutenção Corretiva</h3>
            <p className="text-industrial-light text-sm">Reparo rápido e eficiente</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Consultoria Industrial</h3>
            <p className="text-industrial-light text-sm">Otimização de processos</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </div>
    </section>
  );
};