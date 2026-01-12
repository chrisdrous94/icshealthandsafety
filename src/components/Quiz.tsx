import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { quizQuestions } from "@/data/protocolData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuizProps {
  onComplete: (score: number) => void;
  previousScore?: number;
}

export function Quiz({ onComplete, previousScore }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const correctCount = answers.filter(
        (ans, idx) => ans === quizQuestions[idx].correctAnswer
      ).length + (selectedAnswer === question.correctAnswer ? 1 : 0);
      const score = Math.round((correctCount / quizQuestions.length) * 100);
      onComplete(score);
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setIsFinished(false);
  };

  if (isFinished) {
    const correctCount = answers.filter(
      (ans, idx) => ans === quizQuestions[idx].correctAnswer
    ).length;
    const score = Math.round((correctCount / quizQuestions.length) * 100);
    const passed = score >= 70;

    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className={cn(
          "rounded-2xl p-8 text-center",
          passed ? "bg-secondary/10" : "bg-destructive/10"
        )}>
          <div className={cn(
            "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full",
            passed ? "bg-secondary/20" : "bg-destructive/20"
          )}>
            {passed ? (
              <Trophy className="h-10 w-10 text-secondary" />
            ) : (
              <XCircle className="h-10 w-10 text-destructive" />
            )}
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            {passed ? "Congratulations!" : "Keep Learning"}
          </h2>
          <p className="text-muted-foreground mb-4">
            You scored <span className="font-semibold text-foreground">{score}%</span> ({correctCount}/{quizQuestions.length} correct)
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            {passed
              ? "You've demonstrated a good understanding of the health and safety protocols."
              : "Review the modules and try again. You need 70% to pass."}
          </p>
          <Button onClick={handleRestart} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {previousScore !== undefined && previousScore > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
          <p className="text-sm text-secondary font-medium">
            Your best score: {previousScore}%
          </p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          {question.question}
        </h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = selectedAnswer === index;
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all duration-200",
                  !showResult && "hover:border-primary/50 hover:bg-primary/5",
                  isSelected && !showResult && "border-primary bg-primary/5",
                  !isSelected && !showResult && "border-border",
                  showResult && isCorrect && "border-secondary bg-secondary/10",
                  showResult && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                  showResult && !isSelected && !isCorrect && "border-border opacity-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                    isSelected && !showResult && "bg-primary text-primary-foreground",
                    !isSelected && !showResult && "bg-muted text-muted-foreground",
                    showResult && isCorrect && "bg-secondary text-secondary-foreground",
                    showResult && isSelected && !isCorrect && "bg-destructive text-destructive-foreground"
                  )}>
                    {showResult && isCorrect ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : showResult && isSelected && !isCorrect ? (
                      <XCircle className="h-5 w-5" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className="text-foreground">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-primary hover:bg-primary/90"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90"
          >
            {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </div>
    </div>
  );
}
