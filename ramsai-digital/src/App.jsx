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

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Principles />
        <AudienceSplit />
        <Services />
        <Process />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
