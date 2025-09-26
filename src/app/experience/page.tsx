import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">Professional Journey</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          My career path, roles, and key accomplishments over the years.
        </p>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
}
