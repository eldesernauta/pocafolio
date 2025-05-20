import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Link } from "react-router-dom";

const paragraph2 = `Estas habilidades son solo una muestra. Junto a la experiencia técnica adquirida en cada proyecto, destaco por mi curiosidad, atención al detalle y capacidad de adaptación para crear soluciones efectivas en equipo.`;

const Skills = () => {
    const skills1 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403060/skills1_nc85gj.png"
    const skills2 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403060/skills2_uocewz.png"
    const skills3 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403060/skills3_q4dfy2.png"
    const skills4 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403060/skills4_ygz1ur.png"
    const skills5 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403061/skills5_enuupz.png"
    const skills6 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403061/skills6_z48ax5.png"
    const skills7 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403061/skills7_tx4ite.png"
    const skills8 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403061/skills8_gjyjro.png"

    return (
        <div className="bg-gradient-to-b from-transparent via-[#00000080] to-black">
            <div className="container mx-auto flex flex-col relative ">
                <h4 className="text-lg text-primary font-bold text-center md:text-left translate-x-0 md:translate-x-24"> Algunas de mis </h4>
                <h2 className="text-5xl md:text-9xl text-center md:text-left font-ClashDisplay font-medium text-white">Habilidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-0 w-full pt-32 pb-12 ">
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-0">
                        <img src={skills1} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Microinteracciones</h4>
                        <p className="text-white">Interfaces interactivas dando
                            una personalidad única. </p>
                    </div>
                    <div className=" border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-1 md:border-r-0">
                        <img src={skills2} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Atención al detalle</h4>
                        <p className="text-white">Precisión visual y pulido que elevan la calidad final. </p>
                    </div>
                    <div className=" border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-0">
                        <img src={skills3} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Pensamiento crítico</h4>
                        <p className="text-white">Toma de decisiones con criterio para resolver problemas.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-1">
                        <img src={skills4} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Colaboración efectiva</h4>
                        <p className="text-white">Trabajo fluido entre equipos para lograr objetivos claros.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-0 relative border-animated-bottom">
                        <img src={skills5} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Proactividad diaria</h4>
                        <p className="text-white"> Actúo sin esperar, siempre con enfoque en soluciones.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-1 md:border-r-0  relative border-animated-bottom">
                        <img src={skills6} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2"> Adaptabilidad ágil</h4>
                        <p className="text-white"> Me ajusto al cambio sin perder calidad ni enfoque.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-0  relative border-animated-bottom">
                        <img src={skills7} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Apertura al feedback</h4>
                        <p className="text-white">Valoro otras miradas para mejorar cada entrega.</p>
                    </div>
                    <div className="border border-1 border-[#FFFFFF50] text-white px-3 2xl:px-12 py-4 border-t-0 border-b-0 border-r-1  relative border-animated-bottom">
                        <img src={skills8} alt="icono 1 habilidades" className="w-8" />
                        <h4 className="text-titles mt-4 mb-2">Visión centrada en UX</h4>
                        <p className="text-white">Diseño con empatía, priorizando experiencia humana</p>
                    </div>
                </div>
                <TextGenerateEffect words={paragraph2} paragraph2="" align="center" className="scale-100 md:scale-75 text-center mt-12 mb-0 md:mt-4" />
                <Link to="/quien-soy" className="link-hover w-[300px] mx-auto relative inline-flex items-center justify-start py-3 pl-4 border-2 border-primary hover:border-black pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full  hover:pl-10 hover:pr-6 bg-black group ">
                    <span className="absolute -bottom-2 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full group-hover:bottom-0"></span>
                    <span className="absolute right-0 p-2 duration-200 ease-out group-hover:translate-x-12 -translate-x-2 rounded-full border-2 border-primary">
                        <svg className="w-5 h-5 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 p-2 -translate-x-12 group-hover:translate-x-2 ease-out duration-200 rounded-full border-2 border-black">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Revisar hoja de vida</span>
                </Link>
            </div>
        </div>
    );
}

export default Skills;