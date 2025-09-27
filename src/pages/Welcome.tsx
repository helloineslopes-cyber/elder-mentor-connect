import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
const Welcome = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/select-user-type");
  };
  return <div className="min-h-screen bg-background px-6 py-12 flex flex-col justify-center mobile-safe-area">
      <div className="max-w-md mx-auto w-full space-y-12 no-select">
        {/* App Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground leading-tight tracking-tight">. em comum</h1>
          <p className="text-lg text-muted-foreground">Aproximar gerações através da aprendizagem</p>
        </div>

        {/* Features List */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <IconContainer variant="primary" size="md">
              <Check className="w-full h-full text-primary" />
            </IconContainer>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Aprende coisas novas</h3>
              <p className="text-muted-foreground text-base leading-relaxed">Descobre saberes que atravessam gerações.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconContainer variant="primary" size="md">
              <Check className="w-full h-full text-primary" />
            </IconContainer>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Partilha o que sabes</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Pass on your expertise to eager young learners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconContainer variant="primary" size="md">
              <Check className="w-full h-full text-primary" />
            </IconContainer>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Build connections
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Forge meaningful relationships across age groups.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button onClick={handleGetStarted} size="full" className="touch-target font-semibold text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>;
};
export default Welcome;