
import HorizontalScroll from "./components/HorizontalScroll/horizontalScroll";
import SwitchBtn from "./components/SwitchBtn/switchBtn";
import Hero from "./components/Hero/hero";
import Herramientas from "./components/Herramientas/herramientas";
import Skills from "./components/Skills/skills";
import Colabs from "./components/Colabs/colabs";
import Productos from "./components/Productos/productos";

function App() {
  return (
    <>
      <Hero />
      <section className="bg-black py-8">
        <Herramientas />
      </section>

      <section className="bg-black pt-24 relative">
        <div className="container mx-auto flex flex-col relative">
          <HorizontalScroll />
        </div>
      </section>

      <section id="skills" className="bg-black pt-32 md:pt-0 pb-8 relative">
        <Skills />
      </section>

      <section className="bg-black px-4 md:px-2 py-8">
        <div className="container mx-auto flex flex-col justify-center items-center gap-0">
          <SwitchBtn />
        </div>
      </section>

      <section className="bg-black pt-8 mb-32 w-full h-[50vh] flex flex-col items-center justify-start relative">
        <Colabs />
      </section>

      <section id="world" className="bg-black px-4 md:px-0 py-24 w-full flex flex-col items-center justify-start relative">
        <Productos />
      </section>
    </>
  );
}

export default App;
