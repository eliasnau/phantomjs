import { CheckCircle, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapSection() {
  const roadmapItems = [
    {
      title: "Advanced JWT Authentication System",
      status: "completed",
      description:
        "Implementing secure JWT authentication with automatic token rotation for enhanced security and user session management.",
      completedDate: "Q2 2024",
    },
    {
      title: "Advanced Features",
      status: "in-progress",
      description:
        "A comprehensive suite including user management with roles and permissions, flexible notifications, secure file uploads with cloud storage, and advanced search functionality with Elasticsearch integration.",
      expectedDate: "Q3 2024",
    },
    {
      title: "Next.js Frontend Integration",
      status: "planned",
      description:
        "Complete Next.js frontend framework integration with pre-built components, layouts, and TypeScript support for seamless full-stack development.",
      expectedDate: "Q4 2024",
    },
    {
      title: "Serverless Deployment Support",
      status: "planned",
      description:
        "Support for deploying Phantom Starter applications to serverless platforms like AWS Lambda and Vercel.",
      expectedDate: "Mid 2025",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Phantom Starter Roadmap
        </h2>
        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className="mb-8 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{item.title}</span>
                  <Badge
                    variant={
                      item.status === "completed"
                        ? "default"
                        : item.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {item.status === "completed"
                      ? "Completed"
                      : item.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center text-sm">
                  {item.status === "completed" ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : item.status === "in-progress" ? (
                    <Circle className="h-5 w-5 text-yellow-500 mr-2" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-300 mr-2" />
                  )}
                  <span>
                    {item.status === "completed"
                      ? `Completed in ${item.completedDate}`
                      : `Expected ${item.expectedDate}`}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
