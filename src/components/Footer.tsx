import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-industrial-accent rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-industrial-dark">AC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AXIS CONSULTORIA CNC</h3>
                <p className="text-sm text-gray-300 italic">"Movendo sua empresa no eixo da evolução"</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialista em máquinas CNC, processos industriais e liderança de equipes. 
              Transformando operações industriais através de consultoria especializada.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-industrial-accent" />
                <span className="text-gray-300 text-sm">Bebedouro – SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-industrial-accent" />
                <span className="text-gray-300 text-sm">contato@axiscnc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-industrial-accent" />
                <span className="text-gray-300 text-sm">(17) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-industrial-accent" />
                <a href="https://linkedin.com/in/josethomazelli" className="text-gray-300 text-sm hover:text-industrial-accent transition-colors">
                  linkedin.com/in/josethomazelli
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Consultoria em CNC</a></li>
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Programação de Máquinas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Otimização de Processos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Liderança Industrial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Treinamentos Técnicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-industrial-accent transition-colors">Gestão de Equipes</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Axis Consultoria CNC. Todos os direitos reservados. | 
            <span className="ml-2">Desenvolvido com foco em resultados industriais.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};