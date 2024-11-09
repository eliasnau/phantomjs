import Hero from "@/components/Hero";
import FeaturesSection from "@/components/features-section";
import { Pricing } from "@/components/pricing";
import RoadmapSection from "@/components/roadmap";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import GettingStartedSection from "@/components/getting-started";

export async function generateMetadata() {
  return {
    title: "Phantom Starter",
    description:
      "The most advanced Express.js starter template with enterprise-grade features",
  };
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  negativeFeatures?: string[];
  highlighted?: boolean;
}

const comparisonItems = [
  { feature: "in_development", phantom: true, others: false },
  { feature: "in_development", phantom: true, others: true },
  { feature: "in_development", phantom: true, others: false },
  { feature: "in_development", phantom: true, others: true },
];

const pricingTiers: PricingTier[] = [
  {
    name: "Community",
    price: "Free",
    description: "Free and Open Source for non-commercial use",
    features: [
      "All features",
      "Community support",
      "Temporarly free for commercial use. Does only include the current version on GitHub.",
    ],
    negativeFeatures: ["Commercial license", "Priority support"],
  },
  {
    name: "Commercial",
    price: "$150",
    description: "For commercial use with additional support",
    features: ["Commercial use", "Priority support", "Custom integrations"],
    negativeFeatures: ["Dedicated support", "Custom development"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale, fully supported applications",
    features: [
      "Dedicated support",
      "Custom development",
      "On-premise deployment",
      "Access to enterprise analytics",
    ],
  },
];

const faqItems = [
  {
    question: "What is Phantom Starter?",
    answer:
      "Phantom Starter is an advanced Express.js template that provides enterprise-grade authentication, authorization, and scalability features out of the box.",
  },
  {
    question: "Is Phantom Starter free to use?",
    answer:
      "Yes, Phantom Starter has a free Community tier that you can use for small projects and individual development. We also offer paid tiers for more commercial use and support.",
  },
  {
    question: "Can I customize Phantom Starter for my specific needs?",
    answer:
      "Phantom Starter is designed to be easily extendable and customizable. You can modify existing features or add new ones to fit your project requirements.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer different levels of support based on your plan. The Community tier includes access to our community forums, while the Pro and Enterprise tiers offer priority support and dedicated assistance.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturesSection />
      <Pricing tiers={pricingTiers} />
      <Comparison items={comparisonItems} />
      <RoadmapSection />
      <GettingStartedSection />
      <FAQ items={faqItems} />
    </div>
  );
};

export default Index;
