import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

interface WelcomeScreenProps {
  onLogin: (name: string, staffId: string) => void;
}

export function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  const [name, setName] = useState("");
  const [staffId, setStaffId] = useState("");
  const [errors, setErrors] = useState<{ name?: string; staffId?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; staffId?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your full name";
    if (!staffId.trim()) newErrors.staffId = "Please enter your Staff ID or Email";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onLogin(name.trim(), staffId.trim());
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-card rounded-2xl p-4 shadow-card mb-6">
            <img src={logo} alt="I CAN SCHOOL" className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Welcome
          </h1>
          <p className="text-muted-foreground">
            Please identify yourself to begin the Health & Safety Training
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-card space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Jane Smith"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="staffId" className="text-foreground font-medium">
              Staff ID / Email
            </Label>
            <Input
              id="staffId"
              placeholder="e.g. jsmith@icanschool.com"
              value={staffId}
              onChange={(e) => { setStaffId(e.target.value); setErrors((prev) => ({ ...prev, staffId: undefined })); }}
            />
            {errors.staffId && <p className="text-sm text-destructive">{errors.staffId}</p>}
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Start Training
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} I CAN SCHOOL. Health & Safety Training Portal.
        </p>
      </div>
    </div>
  );
}
