import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const portraitImage = PlaceHolderImages.find(p => p.id === 'portrait');

  return (
    <div className="relative isolate overflow-hidden min-h-[calc(100vh-56px)] flex items-center">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-background/80" />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 animate-gradient-xy"
        />
        <div 
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            <p className="text-lg font-medium text-accent">Data and Business Analyst</p>
            <h1 className="font-headline text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary mt-2">
              Claudio E. Enobas Ese
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-xl mx-auto md:mx-0">
              I am a passionate analyst dedicated to transforming complex data into actionable insights and clear, user-centered reports. Welcome to my digital portfolio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <a href="/cv.pdf" download="Claudio_Enobas_CV.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download CV (PDF)
                </a>
              </Button>
              <div className="flex items-center gap-x-4">
                  <Button variant="ghost" size="icon" asChild className="group">
                    <Link href="https://www.linkedin.com/in/claudioenobas/" aria-label="LinkedIn" target="_blank">
                      <Linkedin className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-foreground group-hover:scale-110" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild className="group">
                    <Link href="https://github.com/claudioen" aria-label="GitHub" target="_blank">
                      <Github className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-foreground group-hover:scale-110" />
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild className="group">
                    <Link href="mailto:claudioenobas@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-foreground group-hover:scale-110" />
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
           {portraitImage && (
              <div className="relative flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1 group-[.reduce-motion]:hover:transform-none">
                      <Image
                          src={portraitImage.imageUrl}
                          alt="A high-quality portrait of Claudio E. Enobas Ese"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                          priority
                          data-ai-hint={portraitImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                  </div>
              </div>
           )}
        </div>
      </div>
    </div>
  );
}
