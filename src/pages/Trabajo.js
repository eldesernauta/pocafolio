import { Link } from "react-router-dom";

import CustomMarquee from "../components/Marquee/marquee";
import Colabs from "../components/Colabs/colabs";
import SpinBtn from "../components/SpinBtn/spinBtn";

const separator = require("../img/separator.png")
const trabajos1 = require('../img/trabajo_card_avianca.png')
const trabajos2 = require('../img/trabajo_card_lacima.png')
const trabajos3 = require('../img/trabajo_card_mastercard.png')
const trabajos4 = require('../img/trabajo_card_extras.png')

function Trabajo() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-end items-center">
                <div className="absolute top-[30%] md:top-[25%] left-0 z-10">
                    <CustomMarquee baseVelocity={-1}>
                        mi trabajo
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        mi trabajo
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        mi trabajo
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        mi trabajo
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
            <section className="container mx-auto gap-0 md:gap-24 px-4 md:px-0 pt-12 flex flex-col md:flex-row justify-center items-center overflow-hidden">
                <div className="w-full md:w-3/6 flex justify-center items-center">
                    <Card
                        client={'Avianca'}
                        imgSrc={trabajos1}
                        href={"/trabajo/avianca"}
                        subtitle={'Aerovías del Continente Americano'} />
                </div>
                <div className="w-full md:w-3/6 mt-16 md:mt-48">
                    <Card
                        client={'Mastercard'}
                        imgSrc={trabajos3}
                        href={"/trabajo/mastercard"}
                        subtitle={'Entidad Bancaria'} />
                </div>

            </section>
            <section className="container mx-auto gap-0 md:gap-24 px-4 md:px-0 pb-12 flex flex-col md:flex-row justify-center items-center overflow-hidden">
                <div className="w-full md:w-3/6 flex justify-center items-center">
                    <Card
                        client={'La Cima Ecohotel'}
                        imgSrc={trabajos2}
                        href={"/trabajo/la-cima"}
                        subtitle={'Glamping en Buenavista, Quindío'} />
                </div>
                <div className="w-full md:w-3/6 mt-16 md:mt-48">
                    <Card
                        client={'Extras'}
                        imgSrc={trabajos4}
                        href={"/trabajo/extras"}
                        subtitle={'Más colaboraciones'}
                    />
                </div>
            </section>
            <section className="w-full flex justify-center items-center  mt-24">
                <Link to="/conectemos" className="link-hover w-[300px] mx-auto relative inline-flex items-center justify-start py-3 pl-4 border-2 border-primary hover:border-black pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full  hover:pl-10 hover:pr-6 bg-black group ">
                    <span className="absolute -bottom-2 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full group-hover:bottom-0"></span>
                    <span className="absolute right-0 p-2 duration-200 ease-out group-hover:translate-x-12 -translate-x-2 rounded-full border-2 border-primary">
                        <svg className="w-5 h-5 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 p-2 -translate-x-12 group-hover:translate-x-2 ease-out duration-200 rounded-full border-2 border-black">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-black">Conectemos y creemos</span>
                </Link>
            </section>
            <section className="bg-black mb-24 w-full h-[50vh] flex flex-col items-center justify-start relative">
                <Colabs />
            </section>
        </>
    );
}

export default Trabajo;

const Card = ({ client, imgSrc, href, subtitle }) => {
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
                            <p className='text-white'>{subtitle}</p>

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
