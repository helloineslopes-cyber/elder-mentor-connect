import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconContainer } from "@/components/ui/icon";
import { ArrowLeft, Users, MessageCircle, Check, X, Clock, User } from "lucide-react";

const Connections = () => {
  const navigate = useNavigate();

  // Mock data for connections
  const connections = [
    {
      id: 1,
      name: "Maria Silva",
      userType: "Ensinar",
      skills: ["Culinária", "Jardinagem"],
      avatar: "MS",
      isOnline: true
    },
    {
      id: 2,
      name: "João Santos",
      userType: "Aprender",
      skills: ["Tecnologia", "Línguas"],
      avatar: "JS",
      isOnline: false
    },
    {
      id: 3,
      name: "Ana Costa",
      userType: "Ambos",
      skills: ["Artesanato", "Música"],
      avatar: "AC",
      isOnline: true
    }
  ];

  // Mock data for connection requests
  const incomingRequests = [
    {
      id: 1,
      name: "Carlos Oliveira",
      userType: "Ensinar",
      skills: ["Carpintaria", "Eletricidade"],
      avatar: "CO",
      message: "Olá! Gostaria de partilhar os meus conhecimentos de carpintaria."
    },
    {
      id: 2,
      name: "Luísa Pereira",
      userType: "Aprender",
      skills: ["Costura", "Tricot"],
      avatar: "LP",
      message: "Procuro alguém para me ensinar técnicas de costura."
    }
  ];

  const outgoingRequests = [
    {
      id: 1,
      name: "Pedro Ferreira",
      userType: "Ensinar",
      skills: ["Fotografia", "Pintura"],
      avatar: "PF",
      status: "pending"
    }
  ];

  const handleAcceptRequest = (requestId: number) => {
    console.log("Aceitar pedido:", requestId);
    // Here you would implement the logic to accept the connection request
  };

  const handleDeclineRequest = (requestId: number) => {
    console.log("Recusar pedido:", requestId);
    // Here you would implement the logic to decline the connection request
  };

  const handleMessageUser = (userId: number) => {
    console.log("Enviar mensagem para:", userId);
    // Here you would navigate to the messaging interface
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Dashboard
          </Button>
          
          <div className="text-center">
            <IconContainer className="mx-auto mb-4">
              <Users className="w-8 h-8" />
            </IconContainer>
            <h1 className="text-3xl font-bold text-foreground mb-2">Conexões</h1>
            <p className="text-muted-foreground text-lg">Gerencie as suas conexões e pedidos</p>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="connections">Conexões</TabsTrigger>
              <TabsTrigger value="requests" className="relative">
                Pedidos
                <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                  2
                </span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="connections" className="mt-6">
              <div className="grid gap-4">
                {connections.length === 0 ? (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">Nenhuma conexão ainda</h3>
                      <p className="text-muted-foreground">Comece a explorar para encontrar pessoas para conectar!</p>
                    </CardContent>
                  </Card>
                ) : (
                  connections.map((connection) => (
                    <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                       <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="relative">
                              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                                {connection.avatar}
                              </div>
                              {connection.isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg truncate">{connection.name}</h3>
                              <Badge variant="secondary" className="mb-2">
                                {connection.userType}
                              </Badge>
                              <p className="text-sm text-muted-foreground break-words">
                                {connection.skills.join(", ")}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleMessageUser(connection.id)}
                              className="w-full sm:w-auto"
                            >
                              <MessageCircle className="w-4 h-4 sm:mr-2" />
                              <span className="hidden sm:inline">Mensagem</span>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              <User className="w-4 h-4 sm:mr-2" />
                              <span className="hidden sm:inline">Perfil</span>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              <Users className="w-4 h-4 sm:mr-2" />
                              <span className="hidden sm:inline">Ver Conexão</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="requests" className="mt-6">
              <div className="space-y-6">
                {/* Incoming Requests */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Pedidos Recebidos</h3>
                  <div className="grid gap-4">
                    {incomingRequests.length === 0 ? (
                      <Card>
                        <CardContent className="pt-6 text-center">
                          <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">Nenhum pedido recebido</p>
                        </CardContent>
                      </Card>
                    ) : (
                      incomingRequests.map((request) => (
                         <Card key={request.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex flex-col gap-4">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                                  {request.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold">{request.name}</h4>
                                  <Badge variant="secondary" className="mb-2">
                                    {request.userType}
                                  </Badge>
                                  <p className="text-sm text-muted-foreground mb-2 break-words">
                                    {request.skills.join(", ")}
                                  </p>
                                  <p className="text-sm bg-muted p-3 rounded-lg break-words">
                                    "{request.message}"
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-2">
                                <Button 
                                  variant="outline"
                                  size="sm" 
                                  className="w-full sm:w-auto"
                                >
                                  <User className="w-4 h-4 sm:mr-2" />
                                  Ver Perfil
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleDeclineRequest(request.id)}
                                  className="w-full sm:w-auto"
                                >
                                  <X className="w-4 h-4 sm:mr-2" />
                                  Recusar
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </div>

                {/* Outgoing Requests */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Pedidos Enviados</h3>
                  <div className="grid gap-4">
                    {outgoingRequests.length === 0 ? (
                      <Card>
                        <CardContent className="pt-6 text-center">
                          <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">Nenhum pedido enviado</p>
                        </CardContent>
                      </Card>
                    ) : (
                      outgoingRequests.map((request) => (
                        <Card key={request.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                                  {request.avatar}
                                </div>
                                <div>
                                  <h4 className="font-semibold">{request.name}</h4>
                                  <Badge variant="secondary" className="mb-2">
                                    {request.userType}
                                  </Badge>
                                  <p className="text-sm text-muted-foreground">
                                    {request.skills.join(", ")}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Pendente</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Connections;