import content from "@/data/content";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyMe from "@/components/sections/WhyMe";
import About from "@/components/sections/About";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={content.hero} />
        <Services data={content.services} />
        <WhyMe data={content.whyMe} />
        <About data={content.about} />
        <References data={content.references} />
        <Contact data={content.contact} />
      </main>
    </>
  );
}
