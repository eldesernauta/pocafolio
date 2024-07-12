import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import BackBtn from "../components/BackBtn/backBtn"

const mockup = require("../img/la-cima-hero.png")
const LaCimaImg = require("../img/la-cima.png")
const nextCaseImg = require("../img/extras-footer.png")

const text = require('../img/circle-text.png')
const separator = require('../img/separator.png')

const words = `Este proyecto me permitió aplicar mis habilidades en diseño UX/UI
para un público específico y exigente. El trabajo colaborativo
y la atención al detalle en la estética visual fueron clave para el éxito del proyecto. Aprendí la importancia de la investigación de usuarios y las pruebas de usabilidad para asegurar que el diseño cumpliera con las expectativas del cliente y los usuarios finales.`;

const LaCima1 = require("../img/la-cima-1.png")
const LaCima2 = require("../img/la-cima-2.png")
const LaCima3 = require("../img/la-cima-3.png")
const LaCima4 = require("../img/la-cima-4.png")
const LaCima5 = require("../img/la-cima-5.png")
const LaCima6 = require("../img/la-cima-9.png")
const LaCima7 = require("../img/la-cima-7.png")
const LaCima8 = require("../img/la-cima-8.png")

const LaCima = () => {
    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#DFBA59] to-[#BC9B44] py-[100px]">
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={LaCimaImg} alt="la cima hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-semibold font-ClashDisplay">La Cima</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="object-contain" />
                        <h6 className="text-white absolute bottom-0 right-0">Freelancer</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex flex-col justify-center items-start">
                        <p className="text-sm mb-4">
                            En este proyecto, colaboré con un exclusivo Ecohotel llamado La Cima, ubicado en el corazón del Quindío, una región conocida por sus paisajes exuberantes y su rica biodiversidad. El ecohotel cuenta con cinco habitaciones, cada una diseñada para ofrecer una experiencia única
                            y personalizada a los huéspedes. Cada habitación refleja un tema diferente, desde la naturaleza vibrante del Quindío hasta la sofisticación
                            y el lujo contemporáneo. Mi rol en este proyecto fue liderar el rediseño de la interfaz y la experiencia del usuario (UX/UI), asegurando que la nueva página web no solo fuese atractiva y funcional, sino que también capturase la esencia del ecohotel y sus ofertas únicas. Para lograr esto, se necesitó una combinación de técnicas investigación de usuarios, diseño centrado en el usuario y pruebas de usabilidad, con el fin de crear
                            una experiencia en línea que alineara con las expectativas y deseos del público objetivo.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-8 h-auto md:h-[460vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[140vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-4">
                            El proyecto presentó múltiples desafíos, incluyendo la necesidad
                            de captar la atención de un público de estrato socioeconómico alto con expectativas elevadas y poco tiempo para decidir. La página web existente no reflejaba adecuadamente el lujo y la exclusividad del ecohotel, con cinco habitaciones únicas y un restaurante de alta cocina con las vistas más impresionantes del Quindío.
                            Además, nos enfrentábamos a reseñas negativas que habían sido descuidadas, afectando la confianza y credibilidad entre los usuarios potenciales, quienes valoran altamente las experiencias compartidas por otros. La navegación del sitio era confusa y poco intuitiva, dificultando la búsqueda de información y el proceso de reserva.
                            Abordamos estos desafíos con una investigación exhaustiva de usuarios, un rediseño visual completo y mejoras técnicas para crear una página web estéticamente agradable, funcional y capaz de inspirar confianza, destacando las experiencias únicas del ecohotel.
                        </p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima1} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima2} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[250vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>
                        <p className="text-sm my-4">
                            El proyecto presentó múltiples desafíos, incluyendo la necesidad de captar la atención de un público de estrato socioeconómico alto con expectativas elevadas y poco tiempo para decidir. La página web existente no reflejaba adecuadamente el lujo y la exclusividad del ecohotel, con cinco habitaciones únicas y un restaurante de alta cocina con las vistas más impresionantes del Quindío.
                        </p>
                        <p className="text-sm mb-4">
                            Además, nos enfrentábamos a reseñas negativas que habían sido descuidadas, afectando la confianza y credibilidad entre los usuarios potenciales. La navegación del sitio era confusa y poco intuitiva, dificultando la búsqueda de información y el proceso de reserva.
                        </p>
                        <p className="text-sm mb-4">
                            Abordamos estos desafíos con una investigación exhaustiva de usuarios, un rediseño visual completo y mejoras técnicas para crear una página web estéticamente agradable, funcional y capaz de inspirar confianza, destacando las experiencias únicas del ecohotel.
                        </p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima3} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima4} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div >
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[360vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-4">
                            Para abordar los desafíos planteados, implementamos un rediseño exhaustivo de la página web de La Cima Ecohotel, enfocándonos en mejorar tanto la estética visual como la funcionalidad del sitio
                        </p>
                        <p className="text-sm mb-4">
                            Desarrollamos un diseño elegante y moderno que capturó la esencia de lujo y exclusividad del Ecohotel, utilizando fotografías de alta calidad que destacaban sus impresionantes vistas y ambientes únicos.
                        </p>
                        <p className="text-sm">
                            En conjunto, estas mejoras no solo cumplieron con los parámetros
                            y expectativas del cliente, sino que también superaron las metas establecidas en la fase inicial del proyecto. La nueva página web
                            no solo captó la atención de manera efectiva del público objetivo
                            de estrato socioeconómico alto, sino que también facilitó
                            una experiencia de usuario superior que resultó en una mayor
                            iteración y conversiones de ventas para La Cima.
                        </p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima5} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima6} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[470vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">
                            El rediseño de la página web del Ecohotel La Cima logró mejorar significativamente la experiencia del usuario y la percepción de la marca. Implementamos un diseño visualmente atractivo y funcional, optimizando la navegación para facilitar la exploración y reserva de habitaciones. La integración de herramientas como videos y recorridos virtuales proporcionó una experiencia inmersiva, mientras que la optimización para dispositivos móviles aseguró accesibilidad desde cualquier plataforma. Estas mejoras resultaron en un aumento notable en la conversión de visitantes a clientes, reflejando el éxito del proyecto en cumplir con los objetivos de negocio del Ecohotel La Cima.
                        </p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima7} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={LaCima8} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section >

            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
            </section>
            <section className="bg-[#1E1E1E] w-full  h-screen md:h-auto flex md:block justify-center items-center py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/extras'} className="mx-auto pt-8 md:pt-0">
                        <img src={nextCaseImg} alt="avianca hero" />
                    </Link>
                    <div className="w-full flex justify-center relative md-4 md:mb-12">
                        <Link to={'/conectemos'} className="link-hover scale-75 ">
                            <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                            <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
                        </Link>
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <h4 className="text-white font-semibold text-xl md:text-3xl">Mira la siguiente experiencia con&nbsp;
                            <Link to={'/trabajo/extras'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">Extras</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LaCima;