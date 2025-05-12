
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar a impulsionar seu negócio"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Envie uma mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível. 
                Estamos ansiosos para conhecer seu projeto e discutir como podemos ajudar.
              </p>
              
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Informações de Contato</h2>
              <div className="bg-jda-gray p-6 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-jda-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Florianópolis, Santa Catarina<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-jda-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                      <a 
                        href="mailto:contato@jdaconsult.com.br" 
                        className="text-jda hover:text-jda-accent transition-colors"
                      >
                        contato@jdaconsult.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-jda-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                      <a 
                        href="tel:+5548999999999" 
                        className="text-jda hover:text-jda-accent transition-colors"
                      >
                        (48) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-jda-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Siga-nos</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-jda-gray text-jda-dark hover:bg-jda hover:text-white transition-colors p-3 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-jda-gray text-jda-dark hover:bg-jda hover:text-white transition-colors p-3 rounded-full"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder for a future Google Maps integration */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">Nossa Localização</h2>
          <div className="h-96 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
            <p className="text-gray-500">
              Mapa será exibido aqui. Estamos localizados em Florianópolis, SC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
