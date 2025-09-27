import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User, Camera, ArrowRight, ArrowLeft, CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
const ProfileSetup = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    birthDate: undefined as Date | undefined,
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
    if (!formData.name || !formData.birthDate || !formData.bio || !formData.location) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Save profile data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    navigate("/teach-skills-selection");
  };
  const handleBack = () => {
    navigate("/select-user-type");
  };
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-8 px-6">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={2} totalSteps={5} className="mb-8" />
        </div>
        
        <div className="text-center">
        
        <h1 className="text-3xl font-bold text-foreground mb-2">Configure o seu perfil</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Conte-nos um pouco sobre si para encontrarmos as melhores conexões.</p>
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
            <CardTitle className="text-xl">Adicione uma foto sua</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome*</Label>
              <Input id="name" placeholder="Ex: Maria" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de nascimento*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.birthDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.birthDate ? (
                      format(formData.birthDate, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione a data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.birthDate}
                    onSelect={(date) => setFormData(prev => ({ ...prev, birthDate: date }))}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localização*</Label>
              <Input id="location" placeholder="Ex: Lisboa" value={formData.location} onChange={e => handleInputChange("location", e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Sobre si*</Label>
              <Textarea id="bio" placeholder="Fale um pouco sobre si, os seus interesses e o que o traz aqui..." className="min-h-[100px] resize-none" value={formData.bio} onChange={e => handleInputChange("bio", e.target.value)} />
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