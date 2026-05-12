import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import VideoDemo from "@/components/VideoDemo";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <VideoDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}