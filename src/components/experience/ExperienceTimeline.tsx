import type { Experience } from '@/types';
import { Briefcase, CheckCircle, Wrench } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
      {experiences.map((exp, index) => (
        <div key={exp.id} className="relative pl-12 mb-12 animate-fade-in" style={{ animationDelay: `${index * 200 + 400}ms`, animationFillMode: 'backwards' }}>
          <div className="absolute left-4 top-1 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md border border-border">
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <h3 className="text-xl font-headline font-bold mt-1 text-primary">{exp.role}</h3>
              <p className="text-md font-semibold text-accent">{exp.company}</p>
              <p className="mt-4 text-sm text-foreground/80">{exp.description}</p>
              
              <Accordion type="single" collapsible className="w-full mt-4">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm font-semibold">View Details</AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, i) => (
                          <span key={i} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}
