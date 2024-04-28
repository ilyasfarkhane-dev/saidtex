import Navbr from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Partenaires from "./components/partenaires";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Partenaires />
    </div>
  );
}
