import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { CheckCircle, Shield, Users, AlertTriangle } from "lucide-react";
const Guidelines = () => {
  const navigate = useNavigate();
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleContinue = () => {
    navigate("/dashboard");
  };
  const guidelines = [{
    icon: Users,
    title: "Encontros",
    description: "Trate todos os membros com respeito e cortesia. Comunicação respeitosa é essencial."
  }, {
    icon: Shield,
    title: "Segurança Pessoal",
    description: "Nunca partilhe informações pessoais sensíveis como morada completa ou dados bancários."
  }, {
    icon: CheckCircle,
    title: "Encontros",
    description: "Honre os seus compromissos agendados. Se não puder comparecer, avise com antecedência."
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <IconContainer className="mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </IconContainer>
            <h1 className="text-3xl font-bold text-foreground mb-2">Segurança</h1>
            <p className="text-muted-foreground text-lg">Leia atentamente as nossas diretrizes para garantir uma experiência segura e positiva para todos.</p>
          </div>

          <div className="space-y-4 mb-8">
            {guidelines.map((guideline, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <guideline.icon className="w-6 h-6 text-primary" />
                    </div>
                    {guideline.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {guideline.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <Card className="hover:shadow-lg transition-shadow mb-8">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                Denúncie
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilize as ferramentas de segurança para terminar conexões ou reportar utilizadores se se sentir inseguro.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={handleContinue} className="px-8 py-3 text-lg font-semibold w-full sm:w-auto">
              <CheckCircle className="w-5 h-5 mr-2" />
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Guidelines;