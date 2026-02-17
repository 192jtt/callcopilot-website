import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <ProductPreview />
      <Features />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
