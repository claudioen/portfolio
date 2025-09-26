import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">My Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          A selection of projects that I'm proud of. Filter by category or search by keyword.
        </p>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
