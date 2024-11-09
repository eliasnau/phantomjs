import { Shield, Zap, Battery, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            🚀 Quick Start your launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most advanced Express.js starter template, featuring
            enterprise-grade authentication, authorization, and scalability out
            of the box.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Enterprise Security Built-in"
            features={[
              "JWT with automatic rotation",
              "Multi-factor authentication",
              "Rate limiting and brute force protection",
              "CSRF, XSS, and SQL injection protection",
            ]}
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-purple-600" />}
            title="Developer Experience First"
            features={[
              "TypeScript for type safety",
              "Prisma ORM with PostgreSQL",
              "Redis for caching and sessions",
              "Docker and Docker Compose setup",
            ]}
          />
          <FeatureCard
            icon={<Battery className="h-10 w-10 text-green-600" />}
            title="Batteries Included"
            features={[
              "Role-based access control (RBAC)",
              "Email verification system",
              "Audit logging",
              "API documentation",
            ]}
          />
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <Badge variant="secondary" className="text-sm py-1 px-2">
            <Github className="mr-1 h-4 w-4" />
            CI Status
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-2">
            MIT License
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-2">
            Latest Release
          </Badge>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
          >
            Get Started with Phantom
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  features: string[];
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-2xl font-bold">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
