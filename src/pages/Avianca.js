import { Link } from "react-router-dom";

import StickyBox from "react-sticky-box";
import BackBtn from "../components/BackBtn/backBtn";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `La colaboración con equipos multidisciplinarios fortaleció mis habilidades en comunicación y trabajo en equipo, mientras que trabajar en un ciclo iterativo de diseño me hizo ágil y adaptable, asegurando alta calidad en los entregables. Este proyecto me ayudó a comprender mejor la importancia de la coherencia visual y la usabilidad en el diseño de interfaces y experiencias.`;

const Avianca = () => {
    const mockup = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-hero_chjvbp.png"
    const avianca = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403064/avianca_y59uh7.png"
    const nextCaseImg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/mastercard-hero_oyrz0w.png"
    const text = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/circle-text_wdzwpv.png'
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'
    const Avianca1 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-1_un7icl.png"
    const Avianca2 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-2_mfvos0.png"
    const Avianca3 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-3_xfo8nm.png"
    const Avianca4 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-4_jhi4vq.png"
    const Avianca5 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-5_zdqmxl.png"
    const Avianca6 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403065/avianca-6_rwuzqh.png"
    const Avianca7 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-7_m8rsvz.png"
    const Avianca8 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-8_bb8co0.png"
    const Avianca9 = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/avianca-9_n5vudx.png"

    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#EA0024] to-[#C0006C] py-[100px]">
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={avianca} alt="avianca hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Avianca</h1>
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
                        <p className="text-sm">Gracias a la agencia en la que trabajaba, tuve la oportunidad de unirme al equipo de la aerolínea Avianca, una de las compañías aéreas más importantes de América Latina. Mi rol como diseñador de interfaces fue integral en la creación de diversas soluciones digitales, incluyendo landing pages, banners para múltiples plataformas y journey maps para campañas de correo electrónico. Este proyecto fue especialmente desafiante debido a la alta demanda de producción y la necesidad de mantener una calidad y consistencia excepcionales en todos los entregables. Además, Avianca requiere que cada componente de su diseño refleje su marca y proporcione una experiencia de usuario superior, lo cual demandaba una atención al detalle y una comprensión profunda de sus usuarios.</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-8 h-auto md:h-[460vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[130vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Desafío del proyecto</h2>
                        <p className="text-sm my-5">El principal desafío fue administrar UI kit para Avianca, asegurando que fuera fácil de utilizar y proporcionara suficiente iteración en cada componente. Con un flujo constante de trabajo
                            y alta demanda de visuales, era crucial ejecutar todas las solicitudes bajo parámetros muy estructurados, basados en la investigación
                            de usuarios. La comunicación efectiva entre equipos era primordial para avanzar en los visuales, que eran testeados continuamente, reduciendo el margen de error. La solución implicó adherirse estrictamente a un sistema de diseño y crear componentes solo cuando era absolutamente necesario, garantizando la coherencia
                            y calidad en todos los entregables.</p>
                        {/* <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">Design System</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple text-purple">User Experience</span>
                        </div> */}
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca1} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca2} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[240vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso de diseño</h2>
                        <p className="text-sm my-5">El proceso de diseño para Avianca consistió en seguir y ejecutar el UI kit optimizado bajo las directrices del líder del grupo. Mi función principal era asegurar la precisión y coherencia en todas las solicitudes. Esto incluía crear e integrar imágenes para diversas plataformas, derivando al menos nueve variaciones de cada banner por imagen. La subida de estas imágenes, cada una con una nomenclatura diferente para SEO, resultaba tediosa y requería una alta habilidad de concentración, siendo una tarea casi diaria. Trabajé estrechamente con otros equipos en un ciclo iterativo de diseño, donde los visuales eran testeados y ajustados continuamente. La comunicación constante y efectiva entre equipos permitió mantener una alta calidad y coherencia en todos los entregables.</p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca3} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca4} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[350vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Solución</h2>
                        <p className="text-sm my-5">Para Avianca, seguimos estrictamente el UI kit optimizado y ejecutamos todas las solicitudes según las directrices del líder del grupo. Creamos variaciones de banners, asegurando precisión en la nomenclatura para SEO. Implementamos un ciclo iterativo de diseño, trabajando estrechamente con otros equipos para testear y ajustar visuales continuamente. La comunicación constante y efectiva garantizó la alta calidad y coherencia en todos los entregables, mejorando así la eficiencia y la experiencia del usuario.</p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca5} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca6} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[460vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">El proyecto para Avianca resultó en una mayor eficiencia y coherencia en la creación de visuales, mejorando significativamente la experiencia del usuario y facilitando la navegación en las plataformas. La implementación precisa del UI kit y la colaboración efectiva entre equipos redujeron errores y aumentaron la calidad de los entregables. Además, la atención al detalle en la nomenclatura SEO optimizó la visibilidad online. Estas mejoras cumplieron con los objetivos del cliente y permitieron manejar un flujo constante de trabajo con altos estándares de calidad, asegurando la satisfacción tanto del equipo interno como de los usuarios finales. 4o</p>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca7} alt="old home La cima" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg shadow-lg">
                            <img src={Avianca8} alt="old carousel La cima" className="w-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white pt-24 md:pt-0 pb-24 mt-0 md:-mt-24">
                <div className="w-full md:w-4/6 mx-auto">
                    <img src={Avianca9} alt="old carousel La cima" className="w-full rounded-lg mb-12" />
                </div>
                <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
            </section>
            <section className="bg-[#1E1E1E] w-full py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col text-center md:text-left mt-4 md:mt-0">
                        <h4 className="text-primary font-semibold ml-0 md:ml-24">Próximo</h4>
                        <h1 className="text-7xl md:text-9xl text-white font-medium font-ClashDisplay">Caso</h1>
                    </div>
                    <Link to={'/trabajo/mastercard'} className="mx-auto pt-8 md:pt-0">
                        <img src={nextCaseImg} alt="avianca hero" />
                    </Link>
                    <div className="w-full flex justify-center relative -mt-12 md:-mt-24 mb-4 md:mb-12">
                        <Link to={'/conectemos'} className="link-hover scale-75 ">
                            <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                            <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
                        </Link>
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <h4 className="text-white font-semibold text-xl md:text-3xl">Mira la siguiente experiencia con&nbsp;
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