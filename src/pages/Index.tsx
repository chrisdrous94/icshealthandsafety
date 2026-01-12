import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { WelcomeHero } from "@/components/WelcomeHero";
import { ModuleCard } from "@/components/ModuleCard";
import { ModuleContent } from "@/components/ModuleContent";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { protocolData } from "@/data/protocolData";
import { useProgress } from "@/hooks/useProgress";

type View = "dashboard" | "module" | "quiz";

export default function Index() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const { progress, markModuleComplete, saveQuizScore, getCompletionPercentage } = useProgress();

  const completionPercentage = getCompletionPercentage(protocolData.length);
  const currentModule = protocolData.find((m) => m.id === selectedModule);

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
    setView("module");
  };

  const handleBack = () => {
    setSelectedModule(null);
    setView("dashboard");
  };

  const handleCompleteModule = () => {
    if (selectedModule) {
      markModuleComplete(selectedModule);
    }
  };

  const handleQuizComplete = (score: number) => {
    saveQuizScore("main", score);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header completionPercentage={completionPercentage} />
      
      <main className="container mx-auto px-4 py-8">
        {view === "dashboard" && (
          <>
            <WelcomeHero />
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Training Modules
                  </h2>
                  <p className="text-muted-foreground">
                    Complete all modules to finish your training
                  </p>
                </div>
                
                <Button
                  onClick={() => setView("quiz")}
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Take Quiz
                </Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {protocolData.map((module, index) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isCompleted={progress.completedModules.includes(module.id)}
                    onClick={() => handleModuleClick(module.id)}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {progress.quizScores.main !== undefined && (
              <div className="mt-8 p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Quiz Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Your best score: <span className="font-medium text-foreground">{progress.quizScores.main}%</span>
                    </p>
                  </div>
                  <Button
                    onClick={() => setView("quiz")}
                    variant="outline"
                    size="sm"
                  >
                    Retake Quiz
                  </Button>
                </div>
              </div>
            )}
          </>
        )}

        {view === "module" && currentModule && (
          <ModuleContent
            module={currentModule}
            onBack={handleBack}
            onComplete={handleCompleteModule}
            isCompleted={progress.completedModules.includes(currentModule.id)}
          />
        )}

        {view === "quiz" && (
          <div>
            <button
              onClick={() => setView("dashboard")}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Modules
            </button>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Knowledge Assessment
              </h2>
              <p className="text-muted-foreground">
                Test your understanding of the health and safety protocols
              </p>
            </div>
            
            <Quiz
              onComplete={handleQuizComplete}
              previousScore={progress.quizScores.main}
            />
          </div>
        )}
      </main>
      
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} I CAN SCHOOL. Health & Safety Training Portal.
          </p>
        </div>
      </footer>
    </div>
  );
}
