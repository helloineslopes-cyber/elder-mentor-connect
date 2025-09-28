import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SelectUserType from "./pages/SelectUserType";
import ProfileSetup from "./pages/ProfileSetup";
import TeachSkillsSelection from "./pages/TeachSkillsSelection";
import LearnSkillsSelection from "./pages/LearnSkillsSelection";
import IDVerification from "./pages/IDVerification";
import Dashboard from "./pages/Dashboard";
import Connections from "./pages/Connections";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/select-user-type" element={<SelectUserType />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/teach-skills-selection" element={<TeachSkillsSelection />} />
          <Route path="/learn-skills-selection" element={<LearnSkillsSelection />} />
          <Route path="/id-verification" element={<IDVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connections" element={<Connections />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
