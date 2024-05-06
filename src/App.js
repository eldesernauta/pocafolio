import Header from "./components/Header/header";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { WavyBackground } from "./components/ui/wavyBackground";
import CustomMarquee from "./components/Marquee/marquee";
import SpinBtn from "./components/SpinBtn/spinBtn";
import HorizontalScroll from "./components/HorizontalScroll/horizontalScroll";

import Marquee from "react-fast-marquee";
import SwitchBtn from "./components/SwitchBtn/switchBtn";

const separator = require("../src/img/separator.png")
const foto = require("../src/img/hero-foto.png")
const github = require("../src/img/github-logo.png")
const skills1 = require("../src/img/skills1.png")
const skills2 = require("../src/img/skills2.png")
const skills3 = require("../src/img/skills3.png")
const skills4 = require("../src/img/skills4.png")
const skills5 = require("../src/img/skills5.png")
const skills6 = require("../src/img/skills6.png")
const skills7 = require("../src/img/skills7.png")
const skills8 = require("../src/img/skills8.png")

const words = `Diseñador de producto centrado en las experiencias digitales del usuario mediante el diseño de interfaces interactivas, servicios innovadores, funcionales y atractivos.`;
const paragraph2 = `Estas habilidades son sólo el inicio. Mi experiencia abarca mucho más y juntos podemos explorar, potenciar nuevas capacidades para superar cualquier desafío y así alcanzar el éxito.`;

function App() {
  return (
    <>
      <WavyBackground className="w-full h-screen flex flex-col justify-end items-center">
        <Header />
        <img src={foto} alt="foto de andrés sanchez" className="w-[30vw] z-10 drag-none select-none" />
        <div className="absolute top-[25%] left-0">
          <CustomMarquee baseVelocity={-1}>
            incrustes
            <img
              src={separator}
              className="self-center mx-2 w-12 h-12"
              alt='separador de textos'
            />
            incrustes
            <img
              src={separator}
              className="self-center mx-2 w-12 h-12"
              alt='separador de textos'
            />
            incrustes
            <img
              src={separator}
              className="self-center mx-2 w-12 h-12"
              alt='separador de textos'
            />
            incrustes
            <img
              src={separator}
              className="self-center mx-2 w-12 h-12"
              alt='separador de textos'
            />
          </CustomMarquee>
        </div>
        <SpinBtn />
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-96 z-20"></div>
      </WavyBackground>
      <section className="bg-black py-8">
        <div className="container mx-auto flex flex-col justify-start items-center relative">
          <h2 className="text-gray-200 text-center text-3xl">Herramientas</h2>
          <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
          <div className="w-[100px] h-full absolute left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <Marquee className="mt-8">
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
          </Marquee>
          <div className="w-[100px] h-full absolute right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
        <div className="container mx-auto flex justify-center items-center text-center py-28">
          <TextGenerateEffect words={words} />
        </div>
      </section>
      <section className="bg-black pt-8 relative">
        <div className="container mx-auto flex flex-col relative">
          <h4 className="text-lg text-primary translate-x-16"> Todas mis </h4>
          <h2 className="text-9xl font-ClashDisplay font-medium text-white">Creaciones</h2>
          <HorizontalScroll />
        </div>
      </section>
      <section className="bg-black pb-8 relative">
        <div className="container mx-auto flex flex-col relative">
          <h4 className="text-lg text-primary translate-x-16"> Algunas de mis </h4>
          <h2 className="text-9xl font-ClashDisplay font-medium text-white">Habilidades</h2>
          <div className="grid grid-cols-4 grid-rows-2 gap-0 w-full mt-24">
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills1} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Microinteracciones</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className=" border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills2} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Investigación y diseño</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className=" border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills3} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Accesibilidad</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-1">
              <img src={skills4} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Confidencialidad</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills5} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Gestión de proyectos</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills6} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Pruebas de usuario</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-0">
              <img src={skills7} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Instant capture</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
            <div className="border border-1 border-white text-white p-4 border-t-0 border-b-0 border-r-1">
              <img src={skills8} alt="icono 1 habilidades" className="w-8" />
              <h4 className="text-titles mt-4 mb-2">Design thinking</h4>
              <p className="text-white">Interfaces interactivas dando
                una personalidad única. </p>
            </div>
          </div>
          <TextGenerateEffect words={paragraph2} className="scale-75 text-center mt-24" />
        </div>
      </section>

      <section className="bg-black py-8">
        <div className="container mx-auto flex flex-col justify-center items-center gap-0">
          <SwitchBtn />
        </div>
      </section>

      <section className="bg-black py-8 w-full h-[50vh] flex flex-col items-center justify-start relative">
        <h2 className="text-gray-200 text-center text-3xl">Colaboraciones</h2>
        <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
        <div className="w-[105vw] bg-primary pb-4 flex justify-between items-center rotate-6 absolute top-[200px]">
          <Marquee className="mt-8">
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
          </Marquee>
        </div>
        <div className="w-[105vw] bg-primary pb-4 flex justify-between items-center -rotate-6 absolute top-[200px]">
          <Marquee className="mt-8">
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
            <img
              src={github}
              className="self-center w-48 mx-12"
              alt='separador de textos'
            />
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default App;
