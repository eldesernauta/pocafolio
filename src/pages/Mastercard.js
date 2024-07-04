import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import BackBtn from "../components/BackBtn/backBtn"

const mockup = require("../img/mastercard-hero.png")
const MastercardImg = require("../img/mastercard.png")
const nextCaseImg = require("../img/la-cima-hero.png")

const text = require('../img/circle-text.png')
const separator = require('../img/separator.png')

const words = `Este proyecto me permitió desarrollar y aplicar habilidades en diseño UI bajo una demanda constante y alta presión. La creación de sistemas de diseño estandarizados fue clave para manejar eficientemente las solicitudes frecuentes y asegurar la calidad del trabajo. Además, la experiencia reforzó la importancia de la colaboración y la comunicación efectiva en un entorno dinámico y exigente.`;

const Mastercard = () => {
    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#FF8B00] to-[#C90C14] py-[100px]">
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={MastercardImg} alt="avianca hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Mastercard</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="" />
                        <h6 className="text-white absolute bottom-0 right-0">Dentsu Creative</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex justify-center items-start">
                        <p className="text-sm">En mi rol como diseñador de interfaces UI, trabajé en múltiples proyectos para Mastercard, colaborando estrechamente con los bancos asociados a esta cadena. La labor principal consistió en crear visuales para diversas campañas, incluyendo landing pages, correos electrónicos masivos, banners web y el diseño integral de la web. Este proyecto se desarrolló en colaboración con una agencia para la que trabajé en mi última experiencia profesional. La colaboración con Mastercard y sus bancos asociados me permitió trabajar en una variedad de proyectos, cada uno con sus propios desafíos y objetivos específicos. Sin embargo, la meta común era siempre la misma: crear diseños visuales que fueran no solo estéticamente agradables, sino también altamente funcionales y optimizados para la conversión. Esto implicaba un profundo entendimiento de las necesidades y expectativas del público objetivo, así como una habilidad para traducir esas expectativas en diseños efectivos y coherentes con la identidad de la marca Mastercard.</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-8 h-auto md:h-[460vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[140vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-5">El principal desafío fue manejar la alta demanda de una marca global como Mastercard, con solicitudes frecuentes que llegaban casi semanalmente. Esta frecuencia generaba una presión constante para cumplir con plazos de entrega ajustados, obtener feedback rápido y asegurar la aprobación del cliente. Al trabajar con varios bancos asociados, cada uno con sus propios requisitos y expectativas, la necesidad de adaptarse rápidamente y mantener una calidad consistente en todos los entregables se convirtió en una tarea crucial. Este entorno dinámico y exigente nos llevó a desarrollar sistemas de diseño eficientes para gestionar la alta carga de trabajo y asegurar la coherencia visual en todas las campañas.</p>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[250vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>
                        <p className="text-sm my-5">El proceso de diseño comenzó con una investigación centrada en los usuarios, realizando entrevistas y análisis de comportamiento para comprender sus necesidades y preferencias. Creamos sistemas de diseño estandarizados y guías de estilo para agilizar la producción y asegurar la coherencia visual. Utilizamos herramientas como Adobe XD y Figma para desarrollar wireframes y prototipos interactivos, que iteramos rápidamente a través de pruebas de usabilidad. Diseñamos landing pages, correos electrónicos y banners web, incorporando elementos interactivos para una experiencia envolvente. El feedback de retroalimentación era primordial, permitiéndonos ajustar y perfeccionar los diseños
                            en función de las opiniones de los stakeholders.</p>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[360vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-5">La solución final abordó múltiples aspectos clave para optimizar la presencia digital del proyecto. Implementamos sistemas de diseño que incluyeron guías de estilo detalladas y metodologías eficientes, permitiendo una producción rápida y consistente de visuales que reflejaran la esencia del ecohotel de manera atractiva y coherente.</p>
                        <p className="text-sm mb-5">Diseñamos landing pages específicamente para maximizar la conversión, con un diseño claro y funcional que guiara a los usuarios hacia la reserva de habitaciones y servicios. Además, desarrollamos correos electrónicos responsivos que se adaptaban sin problemas a cualquier dispositivo, asegurando que los mensajes de marketing alcanzaran a los clientes potenciales de manera efectiva.</p>
                        <p className="text-sm mb-5">Mediante un proceso de diseño iterativo y colaborativo, permitimos ajustes continuos basados en el feedback del cliente y los usuarios finales, asegurando así una implementación satisfactoria del proyecto.</p>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[470vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">Se lograron resultados destacados: la implementación de sistemas de diseño estandarizados no solo redujo el tiempo de producción, sino que también mejoró significativamente la eficiencia del equipo. Las campañas diseñadas obtuvieron una alta tasa de aprobación por parte de clientes y bancos asociados. Además, las landing pages y correos electrónicos diseñados mostraron un incremento notable en las tasas de conversión y engagement. Recibimos feedback positivo del equipo de Mastercard y los bancos asociados, quienes destacaron la calidad, coherencia y efectividad del trabajo entregado, fortaleciendo así la colaboración y la confianza en nuestras capacidades.</p>

                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24">
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
            </section>
            <section className="bg-[#1E1E1E] w-full  h-screen md:h-auto flex md:block justify-center items-center py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/la-cima'} className="mx-auto pt-8 md:pt-0">
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
                            <Link to={'/trabajo/la-cima'}>
                                <span className="hover:link-hover text-primary no-underline hover:underline">La Cima Ecohotel</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mastercard;