import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import ListingsSection from "@/components/ListingsSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUsSection />
      <ListingsSection />
      <BlogSection />
    </div>
  );
}
