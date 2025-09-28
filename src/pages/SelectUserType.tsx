import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";
import ageIllustration from "@/assets/age-illustration.png";
const SelectUserType = () => {
  const navigate = useNavigate();
  const handleUserTypeSelection = (userType: "younger" | "older") => {
    // Navigate to profile setup
    console.log(`Selected user type: ${userType}`);
    navigate("/profile-setup");
  };
  const handleBack = () => {
    navigate("/");
  };
  return <div className="min-h-screen bg-background px-6 py-8 flex flex-col mobile-safe-area">
      {/* Header with back button */}
      <div className="max-w-md mx-auto w-full no-select">
        <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        <ProgressBar currentStep={1} totalSteps={3} className="mb-8" />

        {/* Title */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-foreground">Vamos começar!</h1>
          <p className="text-muted-foreground text-sm">Escolha a sua faixa etária</p>
        </div>

        {/* User Type Buttons */}
        <div className="space-y-4 mb-8">
          <Button variant="default" size="full" onClick={() => handleUserTypeSelection("younger")} className="h-16 text-xl font-semibold">Jovem (18 a 35 anos)</Button>

          <Button variant="default" size="full" onClick={() => handleUserTypeSelection("older")} className="h-16 text-xl font-semibold">Sénior (+60)</Button>
        </div>

        {/* Illustration */}
        <div className="text-center">
          <img 
            src={ageIllustration} 
            alt="Ilustração de pessoas de diferentes idades" 
            className="w-64 h-auto mx-auto opacity-80"
          />
        </div>
      </div>
    </div>;
};
export default SelectUserType;