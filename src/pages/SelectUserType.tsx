import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SelectUserType = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType: "younger" | "older") => {
    // For now, we'll navigate to home. In Phase 2, this will go to profile setup
    console.log(`Selected user type: ${userType}`);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background px-6 py-8 flex flex-col mobile-safe-area">
      {/* Header with back button */}
      <div className="max-w-md mx-auto w-full no-select">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-8 -ml-2"
          size="sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold text-foreground">
            Who are you?
          </h1>
        </div>

        {/* User Type Buttons */}
        <div className="space-y-4">
          <Button 
            variant="default"
            size="full"
            onClick={() => handleUserTypeSelection("younger")}
            className="h-16 text-xl font-semibold"
          >
            Younger
          </Button>

          <Button 
            variant="default"
            size="full"
            onClick={() => handleUserTypeSelection("older")}
            className="h-16 text-xl font-semibold"
          >
            Older
          </Button>
        </div>

        {/* Helper text */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Select a role to continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectUserType;