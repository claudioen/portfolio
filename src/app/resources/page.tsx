import { ResourcesList } from "@/components/resources/ResourcesList";
import { resources } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">Curated Resources</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          A collection of my favorite tools, articles, books, and videos for learning and development.
        </p>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
        <ResourcesList resources={resources} />
      </div>
    </div>
  );
}
