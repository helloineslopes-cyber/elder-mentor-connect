import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { CheckCircle, Shield, Users, AlertTriangle, Clock } from "lucide-react";

const Guidelines = () => {
  const navigate = useNavigate();
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
    if (isAtBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const handleContinue = () => {
    navigate("/dashboard");
  };

  const guidelines = [
    {
      icon: Users,
      title: "Respeito e Cortesia",
      description: "Trate todos os membros com respeito e cortesia. Comunicação respeitosa é essencial para uma comunidade saudável."
    },
    {
      icon: Shield,
      title: "Segurança Pessoal",
      description: "Nunca partilhe informações pessoais sensíveis como morada completa, dados bancários ou documentos de identificação."
    },
    {
      icon: CheckCircle,
      title: "Autenticidade",
      description: "Mantenha o seu perfil atualizado e verdadeiro. Informações falsas prejudicam a confiança da comunidade."
    },
    {
      icon: AlertTriangle,
      title: "Conteúdo Apropriado",
      description: "É proibido partilhar conteúdo ofensivo, discriminatório ou inadequado. Mantenha todas as interações profissionais."
    },
    {
      icon: Clock,
      title: "Compromissos",
      description: "Honre os seus compromissos agendados. Se não puder comparecer, avise com antecedência adequada."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <IconContainer className="mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </IconContainer>
            <h1 className="text-3xl font-bold text-foreground mb-2">Diretrizes da Comunidade</h1>
            <p className="text-muted-foreground text-lg">
              Leia atentamente as nossas diretrizes para garantir uma experiência segura e positiva para todos
            </p>
          </div>

          <div 
            className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-4"
            onScroll={handleScroll}
          >
            {guidelines.map((guideline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <guideline.icon className="w-6 h-6 text-primary" />
                    </div>
                    {guideline.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {guideline.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  O não cumprimento destas diretrizes pode resultar em:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Aviso formal
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Suspensão temporária da conta
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Banimento permanente da plataforma
                  </li>
                </ul>
                <p className="text-foreground mt-4 font-semibold">
                  Ao continuar, confirma que leu e aceita cumprir todas as diretrizes da comunidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleContinue}
              disabled={!hasScrolledToBottom}
              className="px-8 py-3 text-lg font-semibold"
            >
              {hasScrolledToBottom ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Aceito e Continuar
                </>
              ) : (
                "Leia todas as diretrizes para continuar"
              )}
            </Button>
            {!hasScrolledToBottom && (
              <p className="text-sm text-muted-foreground mt-2">
                Deslize até ao final para ativar o botão de continuar
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;