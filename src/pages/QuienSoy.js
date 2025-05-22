import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import CustomMarquee from "../components/Marquee/marquee";
import SpinBtn from "../components/SpinBtn/spinBtn";
import Cards from "../components/Cards/cards";

const cv = require('../assets/Especialista_en_Diseno_Visual.pdf')

const words = `Soy diseñador UI, especialista en microinteracciones y en elevar el estilo gráfico de productos digitales. Me apasiona crear experiencias visuales claras, funcionales y con intención, cuidando cada detalle desde el concepto hasta el arte final. Trabajo colaborativamente, escucho activamente y siempre busco formas de mejorar.`
const words2 = `Fuera del diseño, me interesa entender cómo pensamos y actuamos como seres humanos. Disfruto leer sobre psicología, escuchar podcasts y dibujar como forma de expresión. También practico running, una disciplina que me ayuda a mantener el enfoque y la energía. Nací en Armenia, Quindío, un lugar que alimenta mi creatividad con su naturaleza y cultura.`

function QuienSoy() {
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'
    const springImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403068/cv-bg_wiwrbc.png"

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-end items-center">
                <div className="absolute top-[30%] md:top-[25%] left-0 z-10">
                    <CustomMarquee baseVelocity={-1}>
                        quién soy
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        quién soy
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        quién soy
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        quién soy
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                    </CustomMarquee>
                </div>
                <SpinBtn />
                <div className="rounded-full w-[700px] h-[500px] bg-[#4A1A99] opacity-75 blur-3xl absolute -top-[250px] -right-[350px] z-0 scale-125"></div>
            </div>


            <section className="container mx-auto flex flex-col gap-8 justify-center items-center text-center pt-12 md:pt-32 pb-12 px-4 2xl:px-0">
                <TextGenerateEffect words={words} paragraph2={words2} align="center" />
            </section>

            <section className="flex flex-col gap-16 md:gap-32 mt-24 relative px-4 2xl:px-0">
                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white hover:text-primary text-xl md:text-3xl font-bold underline">Mimusa</h3>
                        <p className="text-white text-sm">España - Remoto</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Diseñador UI</h3>
                        <p className="text-white text-sm">2025</p>

                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white hover:text-primary text-xl md:text-3xl font-bold underline">Dentsu Creative</h3>
                        <p className="text-white text-sm">Medellín - Híbrido</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Diseñador UI</h3>
                        <p className="text-white text-sm">2021 - 2024</p>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>Avianca
                            </h3>
                            <p className="text-white text-sm">Dic 2022 - Ene 2024</p>
                        </div>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>MasterCard Latam
                            </h3>
                            <p className="text-white text-sm">Oct 2021 - Dic 2022</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white hover:text-primary text-xl md:text-3xl font-bold underline">Solved Puzzle</h3>
                        <p className="text-white text-sm">Miami - Remoto</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Graphic web designer</h3>
                        <p className="text-white text-sm">2020 - 2021</p>

                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white hover:text-primary text-xl md:text-3xl font-bold underline">Trainingym</h3>
                        <p className="text-white text-sm">España - Remoto</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Diseñador UX/UI</h3>
                        <p className="text-white text-sm">2019 - 2020</p>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>Producto sistematizado
                            </h3>
                            <p className="text-white text-sm">Abr 2019 - Ago 2020</p>
                        </div>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>Investigación UX
                            </h3>
                            <p className="text-white text-sm">Jun 2019 - Abr 2019</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>


                <a href={cv} download className="a-hover my-12 w-[300px] mx-auto relative inline-flex items-center justify-start py-3 pl-0 md:pl-4 border-2 border-primary hover:border-black pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full  hover:pl-10 hover:pr-6 bg-black group ">
                    <span className="absolute -bottom-2 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full group-hover:bottom-0"></span>
                    <span className="absolute right-0 p-2 duration-200 ease-out group-hover:translate-x-12 -translate-x-2 rounded-full border-2 border-primary">
                        <svg className="w-5 h-5 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 p-2 -translate-x-12 group-hover:translate-x-2 ease-out duration-200 rounded-full border-2 border-black">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Descargar curriculum</span>
                </a>
                <div className="rounded-full w-[700px] h-[500px] bg-[#4A1A99] opacity-75 blur-3xl absolute top-[20%] -right-[350px] z-0 scale-125"></div>
                <img src={springImg} className="hidden md:block w-[360px] absolute top-[30%] right-32 animate-bounce" alt="spring" />
            </section>

            <section className="bg-black mt-12 pb-48 px-4 2xl:px-0">
                <Cards layout={'home'} />
            </section>
        </>
    );
}

export default QuienSoy;

