import { About } from "./components/home/About";
import { Contact } from "./components/home/Contact";
import { Hero } from "./components/home/Hero";
import { PracticeBar } from "./components/home/PracticeBar";
import { Services } from "./components/home/Services";
import { Team } from "./components/home/Team";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

const App = () => (
  <div id="topo">
    <Header />
    <main>
      <Hero />
      <PracticeBar />
      <About />
      <Services />
      <Team />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
