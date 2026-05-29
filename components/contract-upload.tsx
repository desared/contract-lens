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
import { useTranslations } from "next-intl";

type ClauseType = "info" | "warning" | "good";

interface ContractClause {
  title: string;
  originalText: string;
  simpleExplanation: string;
  type: ClauseType;
}

interface AnalysisResult {
  summary: string;
  clauses: ContractClause[];
  overallRisk: "low" | "medium" | "high";
}

type MockTemplate = "rent" | "divorce" | "default";

export function ContractUpload() {
  const t = useTranslations("Upload");

  const buildAnalysis = (template: MockTemplate): AnalysisResult => {
    const summary = t(`mock.${template}.summary`);
    const clauses = t.raw(`mock.${template}.clauses`) as ContractClause[];
    const overallRisk =
      template === "divorce" ? "medium" : template === "rent" ? "low" : "low";
    return { summary, clauses, overallRisk };
  };

  const analyzeContract = async (file: File): Promise<AnalysisResult> => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const name = file.name.toLowerCase();
    if (name.includes("rent") || name.includes("miet")) {
      return buildAnalysis("rent");
    }
    if (name.includes("divorce") || name.includes("scheidung")) {
      return buildAnalysis("divorce");
    }
    return buildAnalysis("default");
  };

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

  const getTypeIcon = (type: ClauseType) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5" />;
      case "good":
        return <CheckCircle2 className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getTypeStyles = (type: ClauseType) => {
    switch (type) {
      case "warning":
        return "border-amber-200 bg-amber-50/60";
      case "good":
        return "border-emerald-200 bg-emerald-50/60";
      default:
        return "border-border bg-card";
    }
  };

  const getIconContainerStyles = (type: ClauseType) => {
    switch (type) {
      case "warning":
        return "bg-amber-100 text-amber-700";
      case "good":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-foreground/5 text-foreground";
    }
  };

  const riskLabel = (risk: AnalysisResult["overallRisk"]) =>
    risk === "low" ? t("riskLow") : risk === "medium" ? t("riskMedium") : t("riskHigh");

  return (
    <section id="upload" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {t("subheading")}
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
                {t("dropHere")}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {t("orBrowse")}
              </p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                onChange={handleFileChange}
              />
              <Button asChild variant="outline">
                <label htmlFor="file-upload" className="cursor-pointer">
                  {t("browseFiles")}
                </label>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                {t("supportedFormats")}
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
                      {(file.size / 1024).toFixed(1)} {t("kb")}
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
                      {t("analyzing")}
                    </>
                  ) : (
                    <>{t("analyze")}</>
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
                          {t("quickSummary")}
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
                        {riskLabel(analysis.overallRisk)}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {analysis.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold text-foreground">
                      {t("clauseBreakdown")}
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
                                {t("whatItSays")}
                              </p>
                              <p className="text-sm italic text-muted-foreground">
                                &ldquo;{clause.originalText}&rdquo;
                              </p>
                            </div>
                            <div>
                              <p className="mb-1 text-xs font-medium text-foreground">
                                {t("whatItMeans")}
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
                      {t("analyzeAnother")}
                    </Button>
                    <Button className="flex-1 bg-foreground text-background hover:bg-foreground/90">
                      {t("downloadReport")}
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
