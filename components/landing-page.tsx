"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { Download, Check, Leaf, Clock, Utensils, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic import to avoid SSR issues with react-pdf
const AntiInflammationPDF = dynamic(
  () =>
    import("@/components/anti-inflammation-pdf").then(
      (mod) => mod.AntiInflammationPDF
    ),
  { ssr: false }
);

export function LandingPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(<AntiInflammationPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "21-Day-Anti-Inflammation-Program.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 3000);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              The 21-Day Program
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight text-balance">
              Anti-Inflammation
              <br />
              <span className="text-primary">Reset</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Stop feeling old. Reduce inflammation. Feel lighter in 14 days.
              Lock it in by Day 21.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={handleDownload}
                disabled={isGenerating}
                size="lg"
                className="text-base px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Generating PDF...
                  </>
                ) : isDownloaded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Free PDF Guide
                  </>
                )}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              9-page printable guide • Beginner-friendly • No rigid diets
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-12">
            What&apos;s Inside the Guide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Leaf className="w-6 h-6" />}
              title="Daily Game Plan"
              description="Your one-page reference with the 4 daily essentials and meal structure"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Week-by-Week Guides"
              description="Clear daily checklists, fibre ramp schedule, and sample meal timings"
            />
            <FeatureCard
              icon={<Utensils className="w-6 h-6" />}
              title="Build Your Own Meals"
              description="Flexible meal formulas so you're not stuck on rigid recipes"
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6" />}
              title="Shopping Lists"
              description="Everything you need organized by category with checkboxes"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-4">
              What You&apos;ll Feel by Day 21
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              This isn&apos;t about restriction—it&apos;s about giving your body
              what it needs to heal.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Less bloating",
                "Clearer head",
                "Steadier mood",
                "Deeper sleep",
                "Easier mornings",
                "Looser clothes",
                "Brighter skin",
                "Fewer sugar cravings",
                "Less joint stiffness",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-12">
            Your 21-Day Journey
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <TimelineItem
              days="Days 1-7"
              title="The Reset Begins"
              description="Less heaviness after meals. Deeper sleep starting. Sugar cravings flaring then easing."
            />
            <TimelineItem
              days="Days 8-14"
              title="Things Shift"
              description="Brain fog lifts. Skin brighter. Clothes loosen. Mood steadier. Sugar cravings weaker."
            />
            <TimelineItem
              days="Days 15-21"
              title="It Locks In"
              description="Waking refreshed. Steady energy all day. Joint aches reduced. People start noticing."
              isLast
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Ready to Start Your Reset?
            </h2>
            <p className="text-muted-foreground mb-8">
              Download your free 9-page printable guide and begin feeling better
              today.
            </p>
            <Button
              onClick={handleDownload}
              disabled={isGenerating}
              size="lg"
              className="text-base px-8 py-6"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download Free PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              By Daryl Stubbs, RMT, CAT(C), C.H.N.C.
            </p>
            <p className="text-xs max-w-2xl mx-auto">
              This guide is educational and not medical advice. If you take
              medication, are pregnant or nursing, or have a diagnosed GI
              condition, check with your practitioner before starting.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-background hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TimelineItem({
  days,
  title,
  description,
  isLast = false,
}: {
  days: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
        {!isLast && <div className="w-0.5 h-full bg-border mt-2" />}
      </div>
      <div className="pb-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {days}
        </span>
        <h3 className="font-semibold text-foreground mt-1">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
