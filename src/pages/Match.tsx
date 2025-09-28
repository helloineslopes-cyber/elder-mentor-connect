import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon";
import { ArrowLeft, Calendar, Video, MessageCircle } from "lucide-react";

const Match = () => {
  const navigate = useNavigate();
  const { connectionId } = useParams();

  // Mock data - in a real app this would come from the connection ID
  const matchData = {
    name: "Maria Silva",
    age: 28,
    location: "Lisboa",
    avatar: "MS",
    userType: "Ensinar",
    skills: ["Culinária", "Jardinagem"]
  };

  const handleScheduleMeeting = () => {
    console.log("Agendar reunião");
    // Here you would implement meeting scheduling logic
  };

  const handleStartVideoChat = () => {
    console.log("Iniciar videochamada");
    // Here you would implement video chat logic
  };

  const handleStartChat = () => {
    console.log("Iniciar conversa");
    // Here you would navigate to messaging interface
  };

  const handleEndMatch = () => {
    console.log("Terminar conexão");
    // Here you would implement logic to end the match
  };

  const handleReportUser = () => {
    console.log("Reportar utilizador");
    // Here you would implement user reporting logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-2xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/connections")}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-8">Conexão</h1>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            {/* Profile Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold">
              {matchData.avatar}
            </div>
            
            {/* Profile Info */}
            <h2 className="text-4xl font-bold text-foreground mb-2">{matchData.name}</h2>
            <p className="text-xl text-muted-foreground">{matchData.age}, {matchData.location}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <Button 
              variant="secondary"
              onClick={handleStartChat}
              className="w-full py-6 text-lg font-semibold rounded-2xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Iniciar Conversa
            </Button>
            
            <Button 
              onClick={handleStartVideoChat}
              className="w-full py-6 text-lg font-semibold rounded-2xl"
            >
              <Video className="w-6 h-6 mr-3" />
              Iniciar Videochamada
            </Button>
            
            <Button 
              onClick={handleScheduleMeeting}
              className="w-full py-6 text-lg font-semibold rounded-2xl"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Agendar Reunião
            </Button>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center px-4 gap-4">
            <Button 
              variant="outline"
              onClick={handleEndMatch}
              className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground font-semibold px-6 py-2 text-sm whitespace-nowrap"
            >
              Terminar Conexão
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleReportUser}
              className="text-black border-black hover:bg-muted hover:text-foreground font-semibold px-6 py-2 text-sm whitespace-nowrap"
            >
              Reportar Utilizador
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;