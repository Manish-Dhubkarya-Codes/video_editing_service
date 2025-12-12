import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import Workflow from './Components/WorkFlow';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import FAQ from './Components/Faq';
import Footer from './Components/Footer';
import ScrollReveal from './Css_Components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Hero doesn't need ScrollReveal because it's the first thing seen */}
      <Hero />
      
      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* Example: Connect Services (Neutral) to Portfolio (White) smoothly */}
      {/* If Services is bg-neutral and Portfolio is bg-white, the standard cut is fine. 
          But ensuring 0 margin is key. */}

      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>

      <ScrollReveal>
        <Workflow />
      </ScrollReveal>

      <ScrollReveal>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default App;