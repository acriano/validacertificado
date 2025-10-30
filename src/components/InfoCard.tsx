import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "secondary";
}

const InfoCard = ({ title, description, buttonText, buttonLink, variant = "primary" }: InfoCardProps) => {
  return (
    <Card className={`p-8 ${variant === "primary" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`text-sm mb-6 leading-relaxed ${variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
        {description}
      </p>
      <Button 
        variant={variant === "primary" ? "#122945" : "default"}
        className={
          variant === "primary"
            ? "border-2 border-white text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            : ""
        }
        asChild
      >
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </Card>
  );
};

export default InfoCard;
