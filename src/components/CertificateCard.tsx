import { Card } from "@/components/ui/card";

interface CertificateData {
  course: string;
  studentName: string;
  cpf: string;
  birthDate: string;
  startDate: string;
  completionDate: string;
  registryNumber: string;
  book: string;
  page: string;
}

interface CertificateCardProps {
  data: CertificateData;
}

const CertificateCard = ({ data }: CertificateCardProps) => {
  return (
    <div className="card-glow relative p-[4px] rounded-3xl">
      <Card className="relative z-10 overflow-hidden rounded-3xl">
        <div className="p-8 md:p-12">
        <div className="mb-6">
         <h3 className="text-personalizado text-sm text-muted-foreground mb-2 uppercase tracking-wide" >
          
            UNIFAHE - VALIDAÇÃO DE CERTIFICADO
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            {data.course}
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-8">
            {data.studentName}
          </h3>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-sm">
            <span className="font-semibold">DOCUMENTO CPF:</span>{" "}
            <span className="font-semibold">{data.cpf}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">DATA DE NASCIMENTO:</span>{" "}
            <span className="font-semibold">{data.birthDate}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">DATA DE INGRESSO:</span>{" "}
            <span className="font-semibold">{data.startDate}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">DATA DA CONCLUSÃO:</span>{" "}
            <span className="font-semibold">{data.completionDate}</span>
          </p>
        </div>

        <p >
          REGISTRO Nº: {data.registryNumber} - LIVRO: {data.book} - FOLHA: {data.page}
        </p>

        {/* Watermark Logo */}
        <div className="absolute bottom-8 right-8 opacity-20">
          <img
            src="https://unifahe.com.br/site/valida-certificado/logo-faculdade-unifahe-icone.png"
            alt="Ícone UNIFAHE"
            width={250}
            height={250}
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
        </div>
      </Card>
    </div>
  );
};

export default CertificateCard;
