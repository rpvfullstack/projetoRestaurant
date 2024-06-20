import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import Services from "./Services";
import Slider from "./Slider";
import Team from "./Team";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <Price />
      <Team />
      <Contact />
    </div>
  )
}