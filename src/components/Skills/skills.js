import { TextGenerateEffect } from "../ui/text-generate-effect";

const skills1 = require("../../img/skills1.png")
const skills2 = require("../../img/skills2.png")
const skills3 = require("../../img/skills3.png")
const skills4 = require("../../img/skills4.png")
const skills5 = require("../../img/skills5.png")
const skills6 = require("../../img/skills6.png")
const skills7 = require("../../img/skills7.png")
const skills8 = require("../../img/skills8.png")

const paragraph2 = `Estas habilidades son sólo el inicio. Mi experiencia abarca mucho más y juntos podemos explorar, potenciar nuevas capacidades para superar cualquier desafío y así alcanzar el éxito.`;

const Skills = () => {
    return (
        <div className="bg-gradient-to-b from-transparent via-[#00000080] to-black">
            <div className="container mx-auto flex flex-col relative ">
                <h4 className="text-lg text-primary font-bold text-center md:text-left translate-x-0 md:translate-x-24"> Algunas de mis </h4>
                <h2 className="text-5xl md:text-9xl text-center md:text-left font-ClashDisplay font-medium text-white">Habilidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-0 w-full pt-32 pb-12 ">
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-0">
                        <img src={skills1} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Microinteracciones</h4>
                        <p className="text-white">Interfaces interactivas dando
                            una personalidad única. </p>
                    </div>
                    <div className=" border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-1 md:border-r-0">
                        <img src={skills2} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Investigación y diseño</h4>
                        <p className="text-white">Tomar decisiones basadas
                            en estrategias de productos. </p>
                    </div>
                    <div className=" border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-0">
                        <img src={skills3} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Accesibilidad</h4>
                        <p className="text-white">Todos usuarios utilicen los
                            productos de manera efectiva.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-1">
                        <img src={skills4} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Confidencialidad</h4>
                        <p className="text-white">Optimizar la experiencia
                            del usuario con el tiempo.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-0 relative border-animated-bottom">
                        <img src={skills5} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Gestión de proyectos</h4>
                        <p className="text-white">Cumpliendo con los plazos
                            y presupuestos establecidos.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-1 md:border-r-0  relative border-animated-bottom">
                        <img src={skills6} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Pruebas de usuario</h4>
                        <p className="text-white">Problemas y oportunidades
                            de mejora para el usuario.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-0  relative border-animated-bottom">
                        <img src={skills7} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Instant capture</h4>
                        <p className="text-white">Save snippets from your
                            browser and Kindle.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 md:px-12 py-4 border-t-0 border-b-0 border-r-1  relative border-animated-bottom">
                        <img src={skills8} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Design thinking</h4>
                        <p className="text-white">Satisfacer las necesidades
                            del cliente de manera flexible.</p>
                    </div>
                </div>
                <TextGenerateEffect words={paragraph2} className="scale-100 md:scale-75 text-center mt-12 mb-12 md:mt-4" />
                <a href="#_" className="link-hover w-[300px] mx-auto relative inline-flex items-center justify-start py-3 pl-4 border-2 border-primary hover:border-black pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full  hover:pl-10 hover:pr-6 bg-black group ">
                    <span className="absolute -bottom-2 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full group-hover:bottom-0"></span>
                    <span className="absolute right-0 p-2 duration-200 ease-out group-hover:translate-x-12 -translate-x-2 rounded-full border-2 border-primary">
                        <svg className="w-5 h-5 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 p-2 -translate-x-12 group-hover:translate-x-2 ease-out duration-200 rounded-full border-2 border-black">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Revisar hoja de vida</span>
                </a>
            </div>
        </div>
    );
}

export default Skills;