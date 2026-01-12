import { CheckCircle2, ChevronRight } from "lucide-react";
import { ProtocolSection } from "@/data/protocolData";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  module: ProtocolSection;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
}

const colorClasses = {
  blue: "border-l-primary bg-primary/5 hover:bg-primary/10",
  green: "border-l-secondary bg-secondary/5 hover:bg-secondary/10",
  yellow: "border-l-accent bg-accent/5 hover:bg-accent/10",
  red: "border-l-destructive bg-destructive/5 hover:bg-destructive/10",
};

const iconColorClasses = {
  blue: "text-primary bg-primary/10",
  green: "text-secondary bg-secondary/10",
  yellow: "text-accent bg-accent/10",
  red: "text-destructive bg-destructive/10",
};

export function ModuleCard({ module, isCompleted, onClick, index }: ModuleCardProps) {
  const Icon = module.icon;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full text-left transition-all duration-300",
        "rounded-xl border-l-4 p-6 shadow-card hover:shadow-card-hover",
        "animate-fade-in bg-card",
        colorClasses[module.color]
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
          iconColorClasses[module.color]
        )}>
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-muted-foreground">
              Module {module.number}
            </span>
            {isCompleted && (
              <CheckCircle2 className="h-4 w-4 text-secondary" />
            )}
          </div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {module.description}
          </p>
          <div className="mt-3 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Start learning
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  );
}
