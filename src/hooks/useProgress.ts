import { useState, useEffect } from "react";

interface UserInfo {
  name: string;
  staffId: string;
}

interface Progress {
  completedModules: string[];
  quizScores: Record<string, number>;
  lastVisited: string | null;
  user: UserInfo | null;
}

const STORAGE_KEY = "ics-health-safety-progress";

const defaultProgress: Progress = {
  completedModules: [],
  quizScores: {},
  lastVisited: null,
  user: null,
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window === "undefined") return defaultProgress;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const setUser = (name: string, staffId: string) => {
    setProgress((prev) => ({
      ...prev,
      user: { name, staffId },
    }));
  };

  const markModuleComplete = (moduleId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
    }));
  };

  const saveQuizScore = (moduleId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: Math.max(prev.quizScores[moduleId] || 0, score),
      },
    }));
  };

  const setLastVisited = (moduleId: string) => {
    setProgress((prev) => ({
      ...prev,
      lastVisited: moduleId,
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  const getCompletionPercentage = (totalModules: number) => {
    return Math.round((progress.completedModules.length / totalModules) * 100);
  };

  return {
    progress,
    setUser,
    markModuleComplete,
    saveQuizScore,
    setLastVisited,
    resetProgress,
    getCompletionPercentage,
  };
}
