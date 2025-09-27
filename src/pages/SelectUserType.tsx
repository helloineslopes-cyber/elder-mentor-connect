import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-background px-4 py-8 flex flex-col">
      {/* Header with back button */}
      <div className="max-w-md mx-auto w-full">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-6 p-2"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="text-accessible-base">Back</span>
        </Button>

        {/* Title */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-accessible-2xl font-bold text-foreground">
            Tell us about yourself
          </h1>
          <p className="text-accessible-lg text-muted-foreground">
            Choose the option that best describes you
          </p>
        </div>

        {/* User Type Cards */}
        <div className="space-y-6">
          {/* Younger Person Card */}
          <Card 
            className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary border-2"
            onClick={() => handleUserTypeSelection("younger")}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-accessible-xl font-semibold text-foreground mb-2">
                  I'm a Younger Person
                </h3>
                <p className="text-accessible-base text-muted-foreground">
                  I want to learn new skills and connect with experienced mentors
                </p>
              </div>
            </div>
          </Card>

          {/* Older Adult Card */}
          <Card 
            className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary border-2"
            onClick={() => handleUserTypeSelection("older")}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-accessible-xl font-semibold text-foreground mb-2">
                  I'm an Older Adult
                </h3>
                <p className="text-accessible-base text-muted-foreground">
                  I want to share my knowledge and learn from younger generations
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SelectUserType;