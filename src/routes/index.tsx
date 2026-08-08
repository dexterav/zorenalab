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

const title =
"Zorena Lab | Premium Websites for Local Businesses";
const description =
"Zorena Lab builds premium websites for plumbers, electricians, HVAC companies, salons and dental clinics across the USA.";

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
