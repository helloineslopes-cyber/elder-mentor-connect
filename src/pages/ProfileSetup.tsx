import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { User, Camera, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ProfileSetup = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
    location: ""
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleContinue = () => {
    if (!formData.name || !formData.age || !formData.bio) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Save profile data when Supabase is connected
    navigate("/skills-selection");
  };
  const handleBack = () => {
    navigate("/select-user-type");
  };
  return <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-8 px-6">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={2} totalSteps={3} className="mb-8" />
        </div>
        
        <div className="text-center">
        <IconContainer className="mx-auto mb-6">
          
        </IconContainer>
        <h1 className="text-3xl font-bold text-foreground mb-2">Configure o seu perfil</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Conte-nos um pouco sobre si para encontrarmos as melhores conexões</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 pb-8">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center pb-6">
            <div className="relative mx-auto mb-4">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-border">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              
            </div>
            <CardTitle className="text-xl">Adicione sua foto</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome*</Label>
              <Input id="name" placeholder="Digite seu nome completo" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Idade*</Label>
              <Input id="age" type="number" placeholder="Digite sua idade" value={formData.age} onChange={e => handleInputChange("age", e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localização*</Label>
              <Input id="location" placeholder="Cidade, Estado" value={formData.location} onChange={e => handleInputChange("location", e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Sobre si*</Label>
              <Textarea id="bio" placeholder="Conte um pouco sobre suas experiências, interesses e o que está procurando..." className="min-h-[100px] resize-none" value={formData.bio} onChange={e => handleInputChange("bio", e.target.value)} />
            </div>

            <Button onClick={handleContinue} size="full" className="mt-8">
              Continuar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default ProfileSetup;