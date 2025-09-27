import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconContainer } from "@/components/ui/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowLeft, ArrowRight, Target, Code, Palette, Camera, Music, BookOpen, Heart, Briefcase, Globe, Cpu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SkillsSelection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const availableSkills = ["Culinária", "Tricô", "Crochet", "Jardinagem", "Xadrez", "Damas"];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length === 0) {
      toast({
        title: "Selecione pelo menos uma área",
        description: "Escolha algumas áreas que lhe interessam para continuar.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save skills when Supabase is connected
    console.log("Selected skills:", selectedSkills);
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/profile-setup");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={3} totalSteps={3} className="mb-8" />
        </div>
        
        <div className="text-center mb-8">
          <IconContainer className="mx-auto mb-4">
            <Target className="w-8 h-8" />
          </IconContainer>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Escolha suas Áreas
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Selecione as áreas onde tem experiência ou interesse em aprender
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {availableSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={selectedSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 text-base px-4 py-2"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Skills Summary */}
        {selectedSkills.length > 0 && (
          <div className="max-w-4xl mx-auto mt-6">
            <Card className="bg-primary-light/50 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm font-medium text-primary mb-2">
                  Áreas selecionadas ({selectedSkills.length}):
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Continue Button */}
        <div className="max-w-md mx-auto mt-8">
          <Button 
            onClick={handleContinue}
            size="full"
            className="h-12"
          >
            Continuar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSelection;