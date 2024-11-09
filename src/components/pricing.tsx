import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  negativeFeatures?: string[];
  highlighted?: boolean;
}

interface PricingProps {
  tiers: PricingTier[];
}

export function Pricing({ tiers }: PricingProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                tier.highlighted ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier.negativeFeatures?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  Choose {tier.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
