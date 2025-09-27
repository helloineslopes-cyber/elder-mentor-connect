import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Lightbulb } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/select-user-type");
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 flex flex-col justify-center mobile-safe-area">
      <div className="max-w-md mx-auto w-full space-y-8 no-select">
        {/* App Title */}
        <div className="text-center space-y-4">
          <h1 className="text-accessible-3xl font-bold text-foreground leading-tight">
            Connecting Generations
          </h1>
          <p className="text-accessible-xl text-muted-foreground font-medium">
            Connecting generations through skills
          </p>
        </div>

        {/* Key Benefits */}
        <Card className="p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <Heart className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-accessible-lg font-semibold text-foreground">
                Share Your Wisdom
              </h3>
              <p className="text-accessible-base text-muted-foreground">
                Teach valuable skills and learn new ones from different generations
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Users className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-accessible-lg font-semibold text-foreground">
                Build Connections
              </h3>
              <p className="text-accessible-base text-muted-foreground">
                Meet like-minded people and create meaningful relationships
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Lightbulb className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-accessible-lg font-semibold text-foreground">
                Safe Learning
              </h3>
              <p className="text-accessible-base text-muted-foreground">
                Verified users and secure communication for peace of mind
              </p>
            </div>
          </div>
        </Card>

        {/* Get Started Button */}
        <Button 
          onClick={handleGetStarted}
          size="lg"
          className="w-full touch-target text-accessible-lg font-semibold"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;