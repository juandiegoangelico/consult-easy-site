
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            className="border-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-mail <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            className="border-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Telefone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(48) 99999-9999"
            className="border-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da sua empresa"
            className="border-gray-300"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-gray-700">
            Serviço de interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-jda focus:ring-jda focus:outline-none"
          >
            <option value="">Selecione um serviço</option>
            <option value="startup">Consultoria para Startups</option>
            <option value="mei">Consultoria para MEI</option>
            <option value="modelagem">Modelagem de Negócios</option>
            <option value="valuation">Valuation de Startups</option>
            <option value="investimentos">Captação de Investimentos</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva como podemos ajudar você..."
            required
            className="border-gray-300 h-32"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="bg-jda hover:bg-jda-light w-full md:w-auto"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
};

export default ContactForm;
