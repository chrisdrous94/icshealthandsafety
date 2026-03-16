import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { useState } from "react";
import { ProtocolSection } from "@/data/protocolData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import floorPlan from "@/assets/floor-plan.png";

interface ModuleContentProps {
  module: ProtocolSection;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

const colorClasses = {
  blue: "bg-primary text-primary-foreground",
  green: "bg-secondary text-secondary-foreground",
  yellow: "bg-accent text-accent-foreground",
  red: "bg-destructive text-destructive-foreground",
};

export function ModuleContent({ module, onBack, onComplete, isCompleted }: ModuleContentProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([module.subsections[0]?.id]);
  const Icon = module.icon;

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const allSectionsRead = module.subsections.every((s) =>
    expandedSections.includes(s.id)
  );

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Modules
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "flex h-14 w-14 items-center justify-center rounded-xl",
            colorClasses[module.color]
          )}>
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Module {module.number}
            </p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              {module.title}
            </h1>
          </div>
          {isCompleted && (
            <div className="ml-auto flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-secondary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground max-w-2xl">
          {module.description}
        </p>
      </div>

      {module.id === "emergency" && (
        <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <MapPin className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">School Floor Plan & Evacuation Map</h3>
              <p className="text-sm text-muted-foreground">Reference diagram for evacuation routes and assembly points</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border mb-4">
            <img src={floorPlan} alt="School Floor Plan and Evacuation Map" className="w-full h-auto" />
          </div>
          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
            <p className="text-sm text-foreground font-medium mb-1">⚠️ Important</p>
            <p className="text-sm text-muted-foreground">
              Staff must familiarize themselves with both primary and secondary evacuation routes based on their specific classroom or office location. Identify the nearest fire exit and your designated assembly point (Front or Rear) before an emergency occurs.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4 mb-8">
        {module.subsections.map((subsection, index) => {
          const isExpanded = expandedSections.includes(subsection.id);
          
          return (
            <div
              key={subsection.id}
              className={cn(
                "rounded-xl border border-border bg-card overflow-hidden transition-all duration-300",
                isExpanded && "shadow-card"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleSection(subsection.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                    expandedSections.includes(subsection.id)
                      ? colorClasses[module.color]
                      : "bg-muted text-muted-foreground"
                  )}>
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-foreground">
                    {subsection.title}
                  </h3>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              
              {isExpanded && (
                <div className="px-5 pb-5 animate-fade-in">
                  <ul className="space-y-3 ml-11">
                    {subsection.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 rounded-xl bg-muted/50 border border-border">
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {isCompleted ? "Module Completed!" : "Ready to complete this module?"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isCompleted
              ? "You can review this content anytime."
              : allSectionsRead
              ? "You've reviewed all sections. Mark as complete to track your progress."
              : "Expand and read all sections above first."}
          </p>
        </div>
        <Button
          onClick={onComplete}
          disabled={isCompleted}
          className={cn(
            "shrink-0",
            isCompleted
              ? "bg-secondary hover:bg-secondary"
              : "bg-primary hover:bg-primary/90"
          )}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Completed
            </>
          ) : (
            "Mark as Complete"
          )}
        </Button>
      </div>
    </div>
  );
}
