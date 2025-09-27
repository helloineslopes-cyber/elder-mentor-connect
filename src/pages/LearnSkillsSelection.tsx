import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconContainer } from "@/components/ui/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LearnSkillsSelection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [learnSkills, setLearnSkills] = useState<string[]>([]);
  const [teachSkills, setTeachSkills] = useState<string[]>([]);

  const availableSkills = ["Culinária", "Tricô", "Crochet", "Jardinagem", "Xadrez", "Damas"];

  useEffect(() => {
    // Load teach skills from previous step
    const savedTeachSkills = localStorage.getItem('teachSkills');
    if (savedTeachSkills) {
      setTeachSkills(JSON.parse(savedTeachSkills));
    }
  }, []);

  const toggleLearnSkill = (skill: string) => {
    setLearnSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleContinue = () => {
    if (teachSkills.length === 0 && learnSkills.length === 0) {
      toast({
        title: "Selecione pelo menos uma área",
        description: "Escolha pelo menos uma área que quer ensinar ou aprender.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save skills when Supabase is connected
    console.log("Teach skills:", teachSkills);
    console.log("Learn skills:", learnSkills);
    
    // Clean up localStorage
    localStorage.removeItem('teachSkills');
    
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/teach-skills-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-md mx-auto px-6">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={4} totalSteps={4} className="mb-8" />
        </div>
        
        <div className="text-center mb-8">
          <IconContainer className="mx-auto mb-4">
            <Target className="w-8 h-8" />
          </IconContainer>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            O que quer aprender?
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Selecione as áreas que gostaria de aprender
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {availableSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={learnSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 text-base px-4 py-2"
                    onClick={() => toggleLearnSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Continue Button */}
        <div className="max-w-md mx-auto mt-8">
          <Button 
            onClick={handleContinue}
            size="full"
            className="h-12"
          >
            {learnSkills.length > 0 ? 'Finalizar' : 'Pular esta etapa'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnSkillsSelection;