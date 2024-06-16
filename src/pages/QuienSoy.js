import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Link } from "react-router-dom";

import CustomMarquee from "../components/Marquee/marquee";
import Colabs from "../components/Colabs/colabs";
import SpinBtn from "../components/SpinBtn/spinBtn";

const separator = require("../img/separator.png")
const foto1 = require('../img/foto1.png')
const foto2 = require('../img/foto2.png')
const foto3 = require('../img/foto3.png')

const words = `Diseñador de producto centrado en las experiencias digitales del usuario mediante el diseño de interfaces interactivas, servicios innovadores, funcionales y atractivos.`;

function Trabajo() {
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
                <div className="absolute bottom-0 bg-gradient-to-b from-transparent via-[#00000080] to-black w-full h-[500px] z-20"></div>
            </div>

            <section>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center pt-32">
                    <img src={foto1} alt="foto 1 de andres sanchez" />
                    <img src={foto2} alt="foto 2 de andres sanchez" className="place-self-center -translate-y-32" />
                    <img src={foto3} alt="foto 3 de andres sanchez" />
                </div>
            </section>

            <div className="container mx-auto flex justify-center items-center text-center pt-12 md:pt-24 pb-12 md:pb-8">
                <TextGenerateEffect words={words} />
            </div>

            <section className="bg-black mb-24 w-full h-[50vh] flex flex-col items-center justify-start relative">
                <Colabs />
            </section>
        </>
    );
}

export default Trabajo;

const Card = ({ client, imgSrc, href }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                <div className='flex flex-col justify-start items-start'>
                    <div className='overflow-hidden'>
                        <img
                            src={imgSrc}
                            className='object-cover h-full md:h-auto rounded-sm w-full'
                            alt='imagen avianca'
                        />
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-start gap-8 md:gap-0 md:items-center mt-8'>
                        <div className='w-full md:w-8/12 flex flex-col justify-center items-start gap-2'>
                            <h2 className='text-white text-4xl font-bold'>{client}</h2>
                            <p className='text-white'>Aerovías del Continente Americano</p>

                        </div>
                        <div className='w-full md:w-4/12 flex flex-col items-end'>
                            <Link to={href} className='link-hover btn rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Revisar</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
