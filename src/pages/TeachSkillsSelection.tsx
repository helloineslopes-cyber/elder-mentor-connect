import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconContainer } from "@/components/ui/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const TeachSkillsSelection = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [teachSkills, setTeachSkills] = useState<string[]>([]);
  const availableSkills = ["Culinária", "Tricô", "Crochet", "Jardinagem", "Xadrez", "Damas"];
  const toggleTeachSkill = (skill: string) => {
    setTeachSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const handleContinue = () => {
    if (teachSkills.length === 0) {
      toast({
        title: "Selecione pelo menos uma área",
        description: "Escolha pelo menos uma área que você pode ensinar.",
        variant: "destructive"
      });
      return;
    }

    localStorage.setItem('teachSkills', JSON.stringify(teachSkills));
    console.log("Teach skills:", teachSkills);
    navigate("/learn-skills-selection");
  };
  const handleBack = () => {
    navigate("/profile-setup");
  };
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-0 py-0">
        <div className="max-w-md mx-auto px-6">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={3} totalSteps={4} className="mb-2" />
        </div>
        
        <div className="text-center mb-4">
          
          <h1 className="text-3xl font-bold text-foreground mb-2">
            O que quer ensinar?
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-center text-xl">Selecione as áreas em que tem conhecimento para ensinar.</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="p-6 px-[24px] py-[24px] my-0">
              <div className="flex flex-wrap gap-3 justify-center">
                {availableSkills.map(skill => <Badge key={skill} variant={teachSkills.includes(skill) ? "default" : "outline"} className="cursor-pointer transition-all hover:scale-105 text-base px-4 py-2" onClick={() => toggleTeachSkill(skill)}>
                    {skill}
                  </Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Continue Button */}
        <div className="max-w-md mx-auto mt-8">
          <Button onClick={handleContinue} size="full" className="h-12">
            Continuar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>;
};
export default TeachSkillsSelection;