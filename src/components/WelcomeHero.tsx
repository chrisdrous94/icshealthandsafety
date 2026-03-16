import { BookOpen, Shield, Award } from "lucide-react";
import logo from "@/assets/logo.png";

interface WelcomeHeroProps {
  userName?: string;
}

export function WelcomeHero({ userName }: WelcomeHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-12 mb-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="shrink-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <img src={logo} alt="I CAN SCHOOL" className="h-20 w-auto" />
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            {userName ? `Welcome, ${userName}!` : "Health & Safety Training Portal"}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-6">
            Complete all training modules, pass the knowledge quiz with 70% or higher, and download your certificate of completion.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium">{8} Modules</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Interactive Content</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">Certificate on Completion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
