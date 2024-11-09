import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GettingStartedSection() {
  const steps = [
    {
      title: "Clone the Repository",
      command: "git clone https://github.com/eliasnau/phantom-starter.git",
    },
    {
      title: "Install Dependencies",
      command: "cd phantom-starter && npm install",
    },
    { title: "Set Up Environment", command: "cp .env.example .env" },
    { title: "Start Development Server", command: "npm run dev" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Getting Started
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
                  <code>{step.command}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Full Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
