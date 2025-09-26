"use client";

import { useState, useMemo } from 'react';
import type { Resource } from '@/types';
import { ResourceCard } from './ResourceCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ResourcesListProps = {
  resources: Resource[];
};

const types = ['All', 'Article', 'Book', 'Video'];

export function ResourcesList({ resources }: ResourcesListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('All');

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesType = activeType === 'All' || resource.type === activeType;
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }, [resources, searchTerm, activeType]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            aria-label="Search resources"
          />
        </div>
        <Select value={activeType} onValueChange={setActiveType}>
          <SelectTrigger className="w-full md:w-[180px]" aria-label="Filter by type">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            {types.map(type => (
              <SelectItem key={type} value={type} className="capitalize">{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {filteredResources.length > 0 ? (
        <div className="space-y-6">
          {filteredResources.map((resource, index) => (
             <div key={resource.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}>
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No resources found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
