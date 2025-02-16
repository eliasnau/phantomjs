import React from 'react';
import Link from "@docusaurus/Link";
import { Github, Star, GitFork, Lock, Database, Zap, Palette, Code2, Gauge } from 'lucide-react';

export default function MainPage(): JSX.Element {
  const features = [
    {
      title: "Authentication Ready",
      description: "Complete auth system with social logins and email verification. GitHub and Google integration included.",
      icon: <Lock className="h-6 w-6 text-white" />
    },
    {
      title: "Database Integration",
      description: "PostgreSQL with Drizzle ORM for type-safe queries. Automatic migrations and efficient query building.",
      icon: <Database className="h-6 w-6 text-white" />
    },
    {
      title: "Modern Stack",
      description: "Next.js 14+, TypeScript, and React Server Components. Built for performance and developer experience.",
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: "UI Components",
      description: "Beautifully designed components with dark mode support and responsive layouts.",
      icon: <Palette className="h-6 w-6 text-white" />
    },
    {
      title: "Developer Experience",
      description: "Hot reloading, type safety, and environment variable validation. Everything you need to code efficiently.",
      icon: <Code2 className="h-6 w-6 text-white" />
    },
    {
      title: "Production Ready",
      description: "Optimized for performance with edge computing support and efficient caching strategies.",
      icon: <Gauge className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,200,255,0.2),rgba(255,255,255,1))]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center hero-fade-in">
            <span className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium inline-block mb-8 animate-scale-in">
              Production Ready
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              Modern Web Starter Kit
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Launch your next project with a production-ready template. Everything you need to build modern web applications.
            </p>
    
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/docs/intro"
                className="button-link flex items-center justify-center px-6 py-3 rounded-full bg-black hover:bg-gray-800 text-white font-medium w-full sm:w-auto transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/eliasnau/starter-kit"
                className="button-link flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors w-full sm:w-auto bg-white hover:bg-gray-50 text-black"
              >
                <Github className="h-5 w-5" />
                <span>Star on GitHub</span>
              </Link>
            </div>
    
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>2.1k stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4" />
                <span>142 forks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 h-full feature-card hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 rounded-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="icon-wrapper">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}