import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Link } from "react-router-dom";

import CustomMarquee from "../components/Marquee/marquee";
import SpinBtn from "../components/SpinBtn/spinBtn";
import Cards from "../components/Cards/cards";

const separator = require("../img/separator.png")
const foto1 = require('../img/foto1.png')
const foto2 = require('../img/foto2.png')
const foto3 = require('../img/foto3.png')
const springImg = require("../img/cv-bg.png")

const words = `Diseñador de producto centrado en las experiencias digitales del usuario mediante el diseño de interfaces interactivas, servicios innovadores, funcionales y atractivos.`
const words2 = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen.`


function QuienSoy() {
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

            <section className="px-4 md:px-0">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center pt-12 md:pt-32">
                    <img src={foto1} alt="foto 1 de andres sanchez" className="hidden md:block" />
                    <img src={foto2} alt="foto 2 de andres sanchez" className="hidden md:block place-self-center  translate-y-0 md:-translate-y-32 " />
                    <img src={foto3} alt="foto 3 de andres sanchez" />
                </div>
            </section>

            <section className="container mx-auto flex flex-col gap-8 justify-center items-center text-center pt-12 md:pt-32 pb-12 px-4 md:px-0">
                <TextGenerateEffect words={words} paragraph2={words2} align="left" />
            </section>

            <section className="flex flex-col gap-16 md:gap-32 mt-24 relative px-4 md:px-0">
                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold underline">Dentsu Creative</h3>
                        <p className="text-white text-sm">Medellín - Híbrido</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Diseñador UI</h3>
                        <p className="text-white text-sm">2021 - 2024</p>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>MasterCard Latam
                            </h3>
                            <p className="text-white text-sm">Oct 2021 - Dic 2022</p>
                        </div>
                        <div className="flex flex-col pl-0 md:pl-4 mt-8">
                            <h3 className="text-white text-md md:text-2xl font-bold flex items-center gap-4">
                                <span><img src={separator} width={'15px'} alt="" /></span>Avianca
                            </h3>
                            <p className="text-white text-sm">Dic 2022 - Ene 2024</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold underline">Solved Puzzle</h3>
                        <p className="text-white text-sm">Miami - Remoto</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Graphic web designer</h3>
                        <p className="text-white text-sm">2021 - 2024</p>

                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold underline">Trainingym</h3>
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

                <div className="container mx-auto flex gap-2 md:gap-0 justify-between items-start z-10">
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold underline">Sammy Quiceno</h3>
                        <p className="text-white text-sm">Quindío - Presencial</p>
                    </div>
                    <div className="w-6/12 md:w-4/12 flex flex-col">
                        <h3 className="text-white text-xl md:text-3xl font-bold">Diseñador visual</h3>
                        <p className="text-white text-sm">2018 - 2019</p>

                    </div>
                    <div className="hidden md:block w-6/12 md:w-4/12 flex flex-col">
                    </div>
                </div>
                <Link to="/conectemos" className="link-hover my-12 w-[300px] mx-auto relative inline-flex items-center justify-start py-3 pl-0 md:pl-4 border-2 border-primary hover:border-black pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full  hover:pl-10 hover:pr-6 bg-black group ">
                    <span className="absolute -bottom-2 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full group-hover:bottom-0"></span>
                    <span className="absolute right-0 p-2 duration-200 ease-out group-hover:translate-x-12 -translate-x-2 rounded-full border-2 border-primary">
                        <svg className="w-5 h-5 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 p-2 -translate-x-12 group-hover:translate-x-2 ease-out duration-200 rounded-full border-2 border-black">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Descargar curriculum</span>
                </Link>
                <div className="rounded-full w-[700px] h-[500px] bg-[#4A1A99] opacity-75 blur-3xl absolute top-[20%] -right-[350px] z-0 scale-125"></div>
                <img src={springImg} className="hidden md:block w-[360px] absolute top-[30%] right-32" alt="spring" />
            </section>

            <section className="bg-black mt-12 pb-48 px-4 md:px-0">
                <Cards layout={'home'} />
            </section>
        </>
    );
}

export default QuienSoy;

