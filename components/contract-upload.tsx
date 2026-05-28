"use client";

import { useState, useCallback } from "react";
import {
  Upload,
  FileText,
  X,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContractClause {
  title: string;
  originalText: string;
  simpleExplanation: string;
  type: "info" | "warning" | "good";
}

interface AnalysisResult {
  summary: string;
  clauses: ContractClause[];
  overallRisk: "low" | "medium" | "high";
}

// Simulated AI analysis (in production, this would call an API)
const analyzeContract = async (file: File): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Return mock analysis based on file name to show different scenarios
  const isRent = file.name.toLowerCase().includes("rent");
  const isDivorce = file.name.toLowerCase().includes("divorce");

  if (isRent) {
    return {
      summary:
        "This is a standard residential lease agreement. Overall, the terms are fairly common for rental contracts, but there are a few clauses you should pay attention to.",
      overallRisk: "low",
      clauses: [
        {
          title: "Monthly Rent & Payment",
          originalText:
            "Tenant agrees to pay $1,500 monthly, due on the 1st of each month...",
          simpleExplanation:
            "You need to pay $1,500 every month. Think of it like paying for your spot to live there. If you pay late, you might have to pay extra money as a penalty.",
          type: "info",
        },
        {
          title: "Security Deposit",
          originalText:
            "A security deposit equal to one month's rent shall be collected...",
          simpleExplanation:
            "You pay $1,500 upfront that the landlord holds onto. It's like a safety piggy bank - if you don't break anything and pay all your rent, you get it back when you move out.",
          type: "good",
        },
        {
          title: "Late Payment Fee",
          originalText:
            "A late fee of 10% shall be applied to any payment received after the 5th...",
          simpleExplanation:
            "If you don't pay by the 5th of the month, you owe an extra $150. That's pretty steep! Many places only charge 5%. Try to always pay on time.",
          type: "warning",
        },
        {
          title: "Maintenance Responsibilities",
          originalText:
            "Tenant shall be responsible for minor repairs under $100...",
          simpleExplanation:
            "If something small breaks (like a clogged drain or a broken doorknob), you have to fix it yourself if it costs less than $100. For bigger stuff, the landlord pays.",
          type: "info",
        },
      ],
    };
  }

  if (isDivorce) {
    return {
      summary:
        "This divorce agreement covers asset division, custody arrangements, and support payments. Several clauses require careful attention.",
      overallRisk: "medium",
      clauses: [
        {
          title: "Asset Division",
          originalText:
            "Marital assets shall be divided equally between parties...",
          simpleExplanation:
            "Everything you both bought or earned while married gets split 50/50. This includes the house, cars, savings, and retirement accounts. It's like splitting a pizza right down the middle.",
          type: "info",
        },
        {
          title: "Child Custody",
          originalText:
            "Joint legal custody with primary physical custody to Party A...",
          simpleExplanation:
            "Both parents get to make big decisions about the kids (school, doctor, etc.) together. But the kids will live mostly with one parent and visit the other.",
          type: "info",
        },
        {
          title: "Non-Compete Clause",
          originalText:
            "Neither party shall disparage the other in presence of minor children...",
          simpleExplanation:
            "You can't say mean things about each other in front of the kids. This is actually good - it protects the children from being caught in the middle.",
          type: "good",
        },
        {
          title: "Support Modification",
          originalText:
            "Support payments may only be modified through court proceedings...",
          simpleExplanation:
            "If you want to change how much money is paid, you have to go back to court. You can't just agree privately and change it - the court needs to approve.",
          type: "warning",
        },
      ],
    };
  }

  // Default analysis for any other contract
  return {
    summary:
      "This contract contains several standard legal provisions. We've identified the key terms and explained them in simple language below.",
    overallRisk: "low",
    clauses: [
      {
        title: "Term & Duration",
        originalText:
          "This agreement shall commence on the Effective Date and continue...",
        simpleExplanation:
          "This part tells you how long the deal lasts. Think of it like the expiration date on milk - after this time, the agreement ends unless you renew it.",
        type: "info",
      },
      {
        title: "Termination Rights",
        originalText:
          "Either party may terminate with 30 days written notice...",
        simpleExplanation:
          "If you want to end this agreement, you need to tell the other person in writing and wait 30 days. It's like giving notice before moving out.",
        type: "good",
      },
      {
        title: "Confidentiality",
        originalText:
          "All information shared shall remain confidential and not be disclosed...",
        simpleExplanation:
          "Whatever private information you share during this deal, the other person can't tell anyone else about it. It's like the pinky promise of legal documents.",
        type: "info",
      },
      {
        title: "Liability Limitation",
        originalText:
          "Neither party shall be liable for indirect, consequential, or punitive damages...",
        simpleExplanation:
          "If something goes wrong, you can only sue for the actual damage caused - not for extra stuff like emotional stress or lost opportunities. This protects both sides.",
        type: "warning",
      },
    ],
  };
};

export function ContractUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setAnalysis(null);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAnalysis(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeContract(file);
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setAnalysis(null);
  };

  const getTypeIcon = (type: ContractClause["type"]) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5" />;
      case "good":
        return <CheckCircle2 className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getTypeStyles = (type: ContractClause["type"]) => {
    switch (type) {
      case "warning":
        return "border-amber-200 bg-amber-50/60";
      case "good":
        return "border-emerald-200 bg-emerald-50/60";
      default:
        return "border-border bg-card";
    }
  };

  const getIconContainerStyles = (type: ContractClause["type"]) => {
    switch (type) {
      case "warning":
        return "bg-amber-100 text-amber-700";
      case "good":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-foreground/5 text-foreground";
    }
  };

  return (
    <section id="upload" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Upload your contract
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Drop your document and we'll explain it in plain English.
          </p>
        </div>

        <div
          className={`relative border-2 border-dashed transition-all ${
            isDragging
              ? "border-foreground bg-foreground/5"
              : file
                ? "border-border bg-card"
                : "border-border bg-card/50 hover:border-foreground/40"
          } p-8 md:p-12`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center bg-foreground/5">
                <Upload className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Drop your contract here
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                or click to browse your files
              </p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                onChange={handleFileChange}
              />
              <Button
                asChild
                variant="outline"
              >
                <label htmlFor="file-upload" className="cursor-pointer">
                  Browse files
                </label>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                PDF, Word, TXT, and image files supported
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-center justify-between border border-border bg-background p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-foreground/5">
                    <FileText className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFile}
                  disabled={isAnalyzing}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {!analysis && (
                <Button
                  className="w-full bg-foreground py-6 text-background hover:bg-foreground/90"
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing your contract...
                    </>
                  ) : (
                    <>Analyze contract</>
                  )}
                </Button>
              )}

              {analysis && (
                <div className="space-y-6">
                  <div className="border border-border bg-background p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-foreground" />
                        <h4 className="text-sm font-semibold text-foreground">
                          Quick summary
                        </h4>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 text-xs font-medium ${
                          analysis.overallRisk === "low"
                            ? "bg-emerald-100 text-emerald-700"
                            : analysis.overallRisk === "medium"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {analysis.overallRisk === "low"
                          ? "Low risk"
                          : analysis.overallRisk === "medium"
                            ? "Medium risk"
                            : "High risk"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {analysis.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold text-foreground">
                      Clause-by-clause breakdown
                    </h4>
                    <div className="space-y-3">
                      {analysis.clauses.map((clause, index) => (
                        <div
                          key={index}
                          className={`border p-5 ${getTypeStyles(clause.type)}`}
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div
                              className={`flex h-7 w-7 shrink-0 items-center justify-center ${getIconContainerStyles(clause.type)}`}
                            >
                              {getTypeIcon(clause.type)}
                            </div>
                            <h5 className="text-sm font-semibold text-foreground">
                              {clause.title}
                            </h5>
                          </div>
                          <div className="ml-10 space-y-3">
                            <div>
                              <p className="mb-1 text-xs font-medium text-muted-foreground">
                                What it says
                              </p>
                              <p className="text-sm italic text-muted-foreground">
                                &ldquo;{clause.originalText}&rdquo;
                              </p>
                            </div>
                            <div>
                              <p className="mb-1 text-xs font-medium text-foreground">
                                What it means
                              </p>
                              <p className="text-sm leading-relaxed text-foreground">
                                {clause.simpleExplanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={clearFile}
                    >
                      Analyze another
                    </Button>
                    <Button className="flex-1 bg-foreground text-background hover:bg-foreground/90">
                      Download PDF report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
