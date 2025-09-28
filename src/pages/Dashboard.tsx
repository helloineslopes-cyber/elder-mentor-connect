import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconContainer } from "@/components/ui/icon";
import { Home, User, Users, MessageCircle, Search, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [newConnections, setNewConnections] = useState(1); // Exemplo: 1 nova conexão
  const [newMessages, setNewMessages] = useState(2); // Exemplo: 2 novas mensagens

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      const profile = JSON.parse(userProfile);
      setUserName(profile.name);
    }
  }, []);

  const handleLogout = () => {
    // Limpar dados do localStorage
    localStorage.removeItem("userProfile");
    localStorage.removeItem("selectedUserType");
    localStorage.removeItem("teachSkills");
    localStorage.removeItem("learnSkills");
    
    // Redirecionar para a página inicial
    navigate("/");
  };

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
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/profile")}
              >
                Ver Perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Conexões
                </div>
                {newConnections > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {newConnections} nova{newConnections > 1 ? 's' : ''}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Veja aqui as suas conexões
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/connections")}
              >
                Ver Conexões
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Mensagens
                </div>
                {newMessages > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {newMessages} nova{newMessages > 1 ? 's' : ''}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Aceda às suas mensagens
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
                Encontre pessoas com quem conectar e coisas para aprender
              </p>
              <Button variant="outline" className="w-full">
                Explorar
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Logout Button */}
        <div className="max-w-4xl mx-auto mt-8">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;