import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sprout, BookOpen, Camera, Music, ChefHat, Monitor, Award } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  // Mock data - in a real app this would come from the user ID
  const profileData = {
    name: "Eleanor",
    age: 68,
    occupation: "Retired Teacher",
    joinedYear: "2022",
    avatar: "EL",
    bio: "Eleanor is a retired teacher with a passion for gardening and a love for sharing her knowledge with others.",
    canTeach: [
      { name: "Gardening", icon: Sprout },
      { name: "Literature", icon: BookOpen },
      { name: "Photography", icon: Camera }
    ],
    wantsToLearn: [
      { name: "Music Theory", icon: Music },
      { name: "Culinary Arts", icon: ChefHat },
      { name: "Digital Skills", icon: Monitor }
    ],
    communityRole: "Community Mentor",
    badges: [
      { name: "Mentor Badge", icon: Award }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <div className="max-w-2xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-8">Profile</h1>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="text-center">
            {/* Profile Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center text-4xl font-bold text-gray-700 overflow-hidden">
              {profileData.avatar}
            </div>
            
            {/* Profile Info */}
            <h2 className="text-4xl font-bold text-foreground mb-2">{profileData.name}</h2>
            <p className="text-xl text-muted-foreground mb-2">
              {profileData.age}, {profileData.occupation}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Joined {profileData.joinedYear}
            </p>
            
            {/* Bio */}
            <p className="text-center text-muted-foreground leading-relaxed max-w-md mx-auto">
              {profileData.bio}
            </p>
          </div>

          {/* What I can teach */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What I can teach</h3>
            <div className="space-y-4">
              {profileData.canTeach.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* What I want to learn */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What I want to learn</h3>
            <div className="space-y-4">
              {profileData.wantsToLearn.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-secondary" />
                        </div>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Community Role */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">{profileData.communityRole}</h3>
            <div className="space-y-4">
              {profileData.badges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-lg font-medium">{badge.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;