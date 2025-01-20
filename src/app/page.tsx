import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import ListingsSection from "@/components/ListingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="mt-6">
      <Hero />
      <AboutUsSection />
      <ListingsSection />
      <BlogSection />
      <TestimonialsSection />
    </div>
  );
}
