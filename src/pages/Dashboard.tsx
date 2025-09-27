import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { Home, User, Users, MessageCircle, Search } from "lucide-react";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      const profile = JSON.parse(userProfile);
      setUserName(profile.name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="text-center mb-8">
          <IconContainer className="mx-auto mb-4">
            <Home className="w-8 h-8" />
          </IconContainer>
          <h1 className="text-3xl font-bold text-foreground mb-2">Olá, {userName}</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Faça aqui a gestão das suas conexões.</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Perfil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Edite suas informações pessoais e preferências
              </p>
              <Button variant="outline" className="w-full">
                Ver Perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Conexões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Veja suas conexões e gerencie seus contatos
              </p>
              <Button variant="outline" className="w-full">
                Ver Conexões
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Mensagens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Acesse suas conversas e mensagens
              </p>
              <Button variant="outline" className="w-full">
                Ver Mensagens
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Explorar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Encontre pessoas para aprender e ensinar habilidades
              </p>
              <Button variant="outline" className="w-full">
                Explorar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;