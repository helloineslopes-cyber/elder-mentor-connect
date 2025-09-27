import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Home, User, BookOpen, Users } from "lucide-react";

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
    <SidebarProvider>
      {/* Global header with trigger */}
      <header className="h-12 flex items-center border-b bg-background">
        <SidebarTrigger className="ml-2" />
      </header>

      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <main className="flex-1 bg-gradient-to-br from-background to-muted">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Minhas Aulas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gerencie as aulas que você está oferecendo
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Aulas
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Conexões
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Veja suas conexões e conversas
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Conexões
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Edite suas informações pessoais
                  </p>
                  <Button variant="outline" className="w-full">
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Aprender
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Encontre pessoas para aprender novas habilidades
                  </p>
                  <Button variant="outline" className="w-full">
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;