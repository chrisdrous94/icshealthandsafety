import logo from "@/assets/logo.png";

interface HeaderProps {
  completionPercentage: number;
}

export function Header({ completionPercentage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="I CAN SCHOOL" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-bold text-foreground">
                Health & Safety Training
              </h1>
              <p className="text-sm text-muted-foreground">
                Staff Protocol Learning Portal
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">
                Progress
              </p>
              <p className="text-xs text-muted-foreground">
                {completionPercentage}% Complete
              </p>
            </div>
            <div className="relative h-12 w-12">
              <svg className="h-12 w-12 -rotate-90 transform">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${completionPercentage * 1.256} 125.6`}
                  className="text-secondary transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
                {completionPercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
