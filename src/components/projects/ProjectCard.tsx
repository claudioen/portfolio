import Image from 'next/image';
import type { Project } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const CardContentWrapper = project.url ? Link : 'div';

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={project.image.src}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover"
            data-ai-hint={project.image.hint}
          />
        </div>
      <div className="flex flex-col flex-grow p-6">
        <CardHeader className="p-0 mb-2">
            <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
            <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </div>
      <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {project.url && (
            <Link href={project.url} className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center group" target="_blank" rel="noopener noreferrer">
                View Project <ArrowUpRight className="h-4 w-4 ml-1 transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
        )}
      </CardFooter>
    </Card>
  );
}
