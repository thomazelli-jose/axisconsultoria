import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mail, Phone, Calendar, MessageSquare, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [consultancyForm, setConsultancyForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [trainingForm, setTrainingForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    trainingType: "",
    date: "",
    participants: ""
  });

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handlePhoneChange = (value: string, formType: 'consultancy' | 'training') => {
    const formatted = formatPhone(value);
    if (formType === 'consultancy') {
      setConsultancyForm({...consultancyForm, phone: formatted});
    } else {
      setTrainingForm({...trainingForm, phone: formatted});
    }
  };

  const handleConsultancySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de email ou backend
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em até 24 horas.",
    });
    setConsultancyForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const handleTrainingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com um sistema de agendamento
    toast({
      title: "Treinamento agendado!",
      description: "Você receberá a confirmação por email em breve.",
    });
    setTrainingForm({ name: "", company: "", email: "", phone: "", trainingType: "", date: "", participants: "" });
  };

  return (
    <section className="py-20 bg-white" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
            Pronto para transformar sua operação industrial? Vamos conversar sobre suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-steel border-industrial-light">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-industrial-blue" />
                  <span className="text-industrial-steel">Bebedouro – SP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-industrial-blue" />
                  <span className="text-industrial-steel">contato@axiscnc.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-industrial-blue" />
                  <span className="text-industrial-steel">(17) 99999-9999</span>
                </div>
                
                <div className="pt-6 border-t border-industrial-light">
                  <h3 className="font-semibold text-industrial-dark mb-3">Horário de Atendimento</h3>
                  <p className="text-industrial-steel text-sm">
                    Segunda a Sexta: 8h às 18h<br/>
                    Sábado: 8h às 12h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            <Card className="shadow-steel border-industrial-light">
              <CardHeader>
                <CardTitle className="text-3xl text-industrial-dark text-center">
                  Entre em Contato Conosco
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="consultancy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="consultancy" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Solicitar Consultoria
                    </TabsTrigger>
                    <TabsTrigger value="training" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Solicitar Treinamento
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="consultancy" className="mt-6">
                    <form onSubmit={handleConsultancySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Nome *
                          </label>
                          <Input
                            type="text"
                            required
                            value={consultancyForm.name}
                            onChange={(e) => setConsultancyForm({...consultancyForm, name: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Empresa *
                          </label>
                          <Input
                            type="text"
                            required
                            value={consultancyForm.company}
                            onChange={(e) => setConsultancyForm({...consultancyForm, company: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            required
                            value={consultancyForm.email}
                            onChange={(e) => setConsultancyForm({...consultancyForm, email: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Telefone
                          </label>
                          <Input
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={consultancyForm.phone}
                            onChange={(e) => handlePhoneChange(e.target.value, 'consultancy')}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-industrial-dark mb-2">
                          Descreva sua necessidade *
                        </label>
                        <Textarea
                          required
                          rows={4}
                          value={consultancyForm.message}
                          onChange={(e) => setConsultancyForm({...consultancyForm, message: e.target.value})}
                          placeholder="Conte-nos sobre os desafios da sua empresa e como podemos ajudar..."
                          className="border-industrial-light focus:border-industrial-blue"
                        />
                      </div>

                      <Button type="submit" variant="industrial" className="w-full">
                        Solicitar Consultoria
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="training" className="mt-6">
                    <form onSubmit={handleTrainingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Nome *
                          </label>
                          <Input
                            type="text"
                            required
                            value={trainingForm.name}
                            onChange={(e) => setTrainingForm({...trainingForm, name: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Empresa *
                          </label>
                          <Input
                            type="text"
                            required
                            value={trainingForm.company}
                            onChange={(e) => setTrainingForm({...trainingForm, company: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            required
                            value={trainingForm.email}
                            onChange={(e) => setTrainingForm({...trainingForm, email: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Telefone
                          </label>
                          <Input
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={trainingForm.phone}
                            onChange={(e) => handlePhoneChange(e.target.value, 'training')}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Tipo de Treinamento *
                          </label>
                          <select
                            required
                            value={trainingForm.trainingType}
                            onChange={(e) => setTrainingForm({...trainingForm, trainingType: e.target.value})}
                            className="w-full px-3 py-2 border border-industrial-light rounded-md focus:border-industrial-blue focus:outline-none"
                          >
                            <option value="">Selecione o treinamento</option>
                            <option value="cnc-basico">CNC Básico</option>
                            <option value="cnc-avancado">CNC Avançado</option>
                            <option value="soldagem">Soldagem</option>
                            <option value="gestao-industrial">Gestão Industrial</option>
                            <option value="processos-fabricacao">Processos de Fabricação</option>
                            <option value="customizado">Treinamento Customizado</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-industrial-dark mb-2">
                            Data Preferencial
                          </label>
                          <Input
                            type="date"
                            value={trainingForm.date}
                            onChange={(e) => setTrainingForm({...trainingForm, date: e.target.value})}
                            className="border-industrial-light focus:border-industrial-blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-industrial-dark mb-2">
                          Número de Participantes
                        </label>
                        <Input
                          type="number"
                          min="1"
                          value={trainingForm.participants}
                          onChange={(e) => setTrainingForm({...trainingForm, participants: e.target.value})}
                          placeholder="Quantas pessoas participarão?"
                          className="border-industrial-light focus:border-industrial-blue"
                        />
                      </div>

                      <Button type="submit" variant="accent" className="w-full">
                        Agendar Treinamento
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};