import Header from "./components/Header";
import Hero from "./components/Hero";
import Principles from "./components/Principles";
import AudienceSplit from "./components/AudienceSplit";
import Services from "./components/Services";
import Process from "./components/Process";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Reveal from "./components/Reveal";
import Analytics from "./components/Analytics";

export default function App() {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Reveal><Principles /></Reveal>
        <Reveal><AudienceSplit /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Results /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
