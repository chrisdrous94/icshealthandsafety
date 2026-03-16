import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import logo from "@/assets/logo.png";

interface CertificateProps {
  staffName: string;
  quizScore: number;
}

export function Certificate({ staffName, quizScore }: CertificateProps) {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleDownload = async () => {
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

    // Load logo as base64
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logo;
    await new Promise((resolve) => { img.onload = resolve; img.onerror = resolve; });

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);
    const logoBase64 = canvas.toDataURL("image/png");

    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();

    // Border
    doc.setDrawColor(30, 120, 190);
    doc.setLineWidth(2);
    doc.rect(10, 10, w - 20, h - 20);
    doc.setDrawColor(46, 160, 97);
    doc.setLineWidth(0.5);
    doc.rect(14, 14, w - 28, h - 28);

    // Logo
    doc.addImage(logoBase64, "PNG", w / 2 - 20, 22, 40, 40);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(30, 120, 190);
    doc.text("Certificate of Completion", w / 2, 75, { align: "center" });

    // Subtitle
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text("Health & Safety Training Protocol", w / 2, 85, { align: "center" });

    // Divider
    doc.setDrawColor(220, 170, 50);
    doc.setLineWidth(1);
    doc.line(w / 2 - 50, 92, w / 2 + 50, 92);

    // Certify text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("This is to certify that", w / 2, 105, { align: "center" });

    // Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(30, 60, 90);
    doc.text(staffName, w / 2, 118, { align: "center" });

    // Completion text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Has successfully completed the Health & Safety Training Protocol", w / 2, 130, { align: "center" });
    doc.text(`with a quiz score of ${quizScore}%`, w / 2, 138, { align: "center" });

    // Date
    doc.setFontSize(11);
    doc.text(`Date: ${today}`, w / 2, 152, { align: "center" });

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("I CAN SCHOOL — Keeping Our Community Safe", w / 2, h - 20, { align: "center" });

    doc.save(`Health_Safety_Certificate_${staffName.replace(/\s+/g, "_")}.pdf`);
  };

  const handleSendToAdmin = () => {
    const subject = encodeURIComponent(`Health & Safety Training Completion - ${staffName}`);
    const body = encodeURIComponent(
      `Dear Health & Safety Lead,\n\n` +
      `I am writing to confirm that I have completed the Health & Safety Training Protocol.\n\n` +
      `Name: ${staffName}\n` +
      `Quiz Score: ${quizScore}%\n` +
      `Date: ${today}\n\n` +
      `Please update the compliance records accordingly.\n\n` +
      `Kind regards,\n${staffName}`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
          <Download className="h-5 w-5 text-secondary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Training Complete!</h3>
          <p className="text-sm text-muted-foreground">
            You've completed all modules and passed the quiz with {quizScore}%
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleDownload} className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          <Download className="h-4 w-4" />
          Download Certificate
        </Button>
        <Button onClick={handleSendToAdmin} variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Mail className="h-4 w-4" />
          Send Results to Admin
        </Button>
      </div>
    </div>
  );
}
