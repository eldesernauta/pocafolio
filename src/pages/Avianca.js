import { Link } from "react-router-dom";

import StickyBox from "react-sticky-box";
import BackBtn from "../components/BackBtn/backBtn";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const mockup = require("../img/avianca-hero.png")
const avianca = require("../img/avianca.png")
const nextCaseImg = require("../img/mastercard-hero.png")

const text = require('../img/circle-text.png')
const separator = require('../img/separator.png')

const words = `Este proyecto me permitió aplicar mis habilidades en diseño UX/UI
para un público específico y exigente. El trabajo colaborativo
y la atención al detalle en la estética visual fueron clave para el éxito del proyecto. Aprendí la importancia de la investigación de usuarios y las pruebas de usabilidad para asegurar que el diseño cumpliera con las expectativas del cliente y los usuarios finales.`;


const Avianca = () => {
    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#EA0024] to-[#C0006C] py-[100px]">
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={avianca} alt="avianca hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-semibold font-ClashDisplay">Avianca</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="" />
                        <h6 className="text-white absolute bottom-0 right-0">2024</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex justify-center items-start">
                        <p className="text-sm">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-8 h-auto md:h-[460vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[130vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Problema</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">User Experience</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[240vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[350vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Ideación</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[460vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white pb-24">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
            </section>
            <section className="bg-[#1E1E1E] w-full py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/mastercard'} className="mx-auto">
                        <img src={nextCaseImg} alt="avianca hero" />
                    </Link>
                    <div className="w-full flex justify-center relative -mt-24 mb-12">
                        <Link to={'/conectemos'} className="link-hover scale-75 ">
                            <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                            <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <h4 className="text-white font-semibold text-3xl">Mira la siguiente experiencia con&nbsp;
                            <Link to={'/trabajo/mastercard'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">Mastercard</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Avianca;