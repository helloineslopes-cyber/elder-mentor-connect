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
  const [teachSkills, setTeachSkills] = useState<string[]>([]);
  const [learnSkills, setLearnSkills] = useState<string[]>([]);

  const availableSkills = ["Culinária", "Tricô", "Crochet", "Jardinagem", "Xadrez", "Damas"];

  const toggleTeachSkill = (skill: string) => {
    setTeachSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

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
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/profile-setup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
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
            Selecione o que quer ensinar e o que quer aprender
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Teach Skills Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                O que quer ensinar?
              </h3>
              <div className="flex flex-wrap gap-3">
                {availableSkills.map((skill) => (
                  <Badge
                    key={`teach-${skill}`}
                    variant={teachSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 text-base px-4 py-2"
                    onClick={() => toggleTeachSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learn Skills Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                O que quer aprender?
              </h3>
              <div className="flex flex-wrap gap-3">
                {availableSkills.map((skill) => (
                  <Badge
                    key={`learn-${skill}`}
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

        {/* Selected Skills Summary */}
        {(teachSkills.length > 0 || learnSkills.length > 0) && (
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            {teachSkills.length > 0 && (
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-primary mb-2">
                    Quero ensinar ({teachSkills.length}):
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {teachSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {learnSkills.length > 0 && (
              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-secondary mb-2">
                    Quero aprender ({learnSkills.length}):
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {learnSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
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