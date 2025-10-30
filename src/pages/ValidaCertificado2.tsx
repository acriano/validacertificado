import Logo from "@/components/Logo";
import CertificateCard from "@/components/CertificateCard";
import InfoCard from "@/components/InfoCard";

const ValidaCertificado2 = () => {
  const certificateData = {
    course: "DOCÊNCIA APLICADA À EDUCAÇÃO TÉCNICA E PROFISSIONALIZANTE",
    studentName: "RODRIGO DE ARAÚJO GADELHA",
    cpf: "821.624.922-53",
    birthDate: "11/08/1997",
    startDate: "06/01/2025",
    completionDate: "24/07/2025",
    registryNumber: "2548",
    book: "2",
    page: "425"
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, hsl(48 100% 96%) 0%, hsl(120 60% 96%) 100%)'
    }}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="mb-12">
          <Logo />
        </header>

        {/* Certificate Card */}
        <div className="mb-8">
          <CertificateCard data={certificateData} />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <InfoCard
            title="SITE INSTITUCIONAL"
            description="A UNIFAHE é uma faculdade EAD dedicada a proporcionar educação de alta qualidade através de plataformas digitais avançadas. Nosso compromisso é oferecer uma experiência de aprendizado flexível e acessível, permitindo que os alunos estudem a qualquer hora e em qualquer lugar, sem comprometer a excelência acadêmica."
            buttonText="ACESSAR SITE"
            buttonLink="https://unifahe.edu.br/"
            variant="primary"
          />
          <InfoCard
            title="ACESSAR PLATAFORMA"
            description="A UNIFAHE se orgulha de ser uma instituição que valoriza o desenvolvimento pessoal e profissional dos seus alunos, oferecendo oportunidades para que cada um possa alcançar seus objetivos e contribuir positivamente para a sociedade."
            buttonText="ACESSAR PLATAFORMA"
            buttonLink="https://unifahe.edu.br/"
            variant="secondary"
          />
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground py-6">
          Todos os direitos reservados ~ Faculdade UNIFAHE
        </footer>
      </div>
    </div>
  );
};

export default ValidaCertificado2;


