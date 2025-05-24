
const ProcessSection = () => {
  return (
    <section className="section-padding bg-jda-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Nosso Processo</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Uma abordagem estruturada para garantir os melhores resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section">
            <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
              1
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Diagnóstico</h3>
            <p className="text-gray-600">
              Análise detalhada da situação atual, identificando desafios e oportunidades específicas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "100ms" }}>
            <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
              2
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Planejamento</h3>
            <p className="text-gray-600">
              Desenvolvimento de um plano de ação personalizado com base nas necessidades identificadas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "200ms" }}>
            <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
              3
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Implementação</h3>
            <p className="text-gray-600">
              Execução das estratégias definidas com acompanhamento contínuo e suporte dedicado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "300ms" }}>
            <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
              4
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Avaliação</h3>
            <p className="text-gray-600">
              Medição dos resultados obtidos e ajustes necessários para garantir o sucesso contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
