import Navbr from "./components/nav";
import Hero from "./components/hero1";
import About from "./components/about";
import Partenaires from "./components/partenaires";
import Whyus from "./components/whyus";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Partenaires />
      <Whyus />
      <Contact />
    </div>
  );
}
