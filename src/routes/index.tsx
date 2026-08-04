import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import {
  Hero,
  Portfolio,
  Services,
  WhyChoose,
  Process,
  Testimonials,
  Pricing,
  Faq,
  FinalCta,
  Footer,
} from "@/components/site/sections";

const title = "LocalLift Studio — Premium Websites for Local Businesses";
const description =
  "LocalLift Studio designs premium, fast websites for plumbers, electricians, HVAC teams, dental clinics, salons and roofers that turn local visitors into paying customers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
