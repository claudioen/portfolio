import type { Resource } from '@/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Film, Newspaper } from 'lucide-react';

type ResourceCardProps = {
  resource: Resource;
};

const typeIcons: { [key in Resource['type']]: React.ReactNode } = {
    Article: <Newspaper className="h-4 w-4" />,
    Book: <BookOpen className="h-4 w-4" />,
    Video: <Film className="h-4 w-4" />,
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:border-accent">
      <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="block p-6 group">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
            <div className='flex-grow'>
                <CardTitle className="font-headline text-xl mb-2 flex items-center">
                    {resource.title}
                    <ArrowUpRight className="h-4 w-4 ml-2 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                {typeIcons[resource.type]}
                <span className="capitalize">{resource.type}</span>
            </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                {tag}
                </Badge>
            ))}
        </div>
      </Link>
    </Card>
  );
}
