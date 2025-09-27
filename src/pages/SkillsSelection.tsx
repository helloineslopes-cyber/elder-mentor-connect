import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconContainer } from "@/components/ui/icon";
import { ArrowLeft, ArrowRight, Target, Code, Palette, Camera, Music, BookOpen, Heart, Briefcase, Globe, Cpu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SkillsSelection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillCategories = [
    {
      title: "Tecnologia",
      icon: Code,
      skills: ["Programação", "Design UX/UI", "Marketing Digital", "Análise de Dados", "Cibersegurança", "Inteligência Artificial"]
    },
    {
      title: "Criatividade",
      icon: Palette,
      skills: ["Design Gráfico", "Fotografia", "Escrita", "Música", "Arte", "Culinária"]
    },
    {
      title: "Negócios",
      icon: Briefcase,
      skills: ["Empreendedorismo", "Vendas", "Gestão", "Finanças", "Recursos Humanos", "Consultoria"]
    },
    {
      title: "Bem-estar",
      icon: Heart,
      skills: ["Psicologia", "Yoga", "Nutrição", "Fitness", "Meditação", "Coaching"]
    },
    {
      title: "Educação",
      icon: BookOpen,
      skills: ["Ensino", "Línguas", "História", "Ciências", "Matemática", "Literatura"]
    },
    {
      title: "Outros",
      icon: Globe,
      skills: ["Jardinagem", "Carpintaria", "Costura", "Mecânica", "Viagens", "Voluntariado"]
    }
  ];

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
        <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
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
        <div className="max-w-4xl mx-auto space-y-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-light">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer transition-all hover:scale-105"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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