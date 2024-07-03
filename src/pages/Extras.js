
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Cards from "../components/Cards/cards";
import Productos from "../components/Productos/productos";
import BackBtn from "../components/BackBtn/backBtn"

const mockup = require("../img/extras-hero.png")
const extras1 = require("../img/extras-heladeria.png")
const extras2 = require("../img/extras-toro.png")
const extras3 = require("../img/extras-ron.png")
const extras4 = require("../img/extras-trainingym.png")
const extras5 = require("../img/extras-monarch.png")

const words = `Explora cómo creo productos de alta calidad que superan
expectativas y transforman ideas en realidad.`;

const Davivienda = () => {
    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#9900FF] to-[#8401DC] py-[100px] overflow-hidden">
                <img src={mockup} alt="avianca hero" className="object-fill absolute bottom-0 right-0" />
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-end items-center md:items-start">
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboraciones</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-ClashDisplay font-semibold">Extras</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">

                    </div>
                </div>
            </section>
            <section className="bg-white px-4 md:px-0 pt-24 pb-12 w-full">
                <div className="w-full md:w-4/6 mx-auto">
                    <TextGenerateEffect words={words} paragraph2="" textColor="black" align="center" />
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-24 pb-72">

                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-2/6 flex flex-col">
                        <h4 className="text-purple text-sm font-semibold">Buenavista (Quindío)</h4>
                        <h2 className="text-2xl text-neutral-500 font-bold mb-4">La 75 Heladeria</h2>
                        <p className="mb-4">Como diseñador freelancer, tuve la oportunidad de crear la interfaz gráfica de La 75 Heladería. El desafío era capturar y representar la esencia de la marca en su sitio web. La 75 Heladería ofrece una experiencia única con una gran variedad de productos, llenos de colores, sabores, olores y texturas que invitan a disfrutar cada momento. Mi objetivo fue diseñar una página web que reflejara esta identidad vibrante y multisensorial. La interfaz debía transmitir visualmente la riqueza y la diversidad de sus helados, asegurando que cada visitante pudiera sentir la misma emoción y deleite que se experimenta al probar uno de sus productos.</p>
                        <h3 className="text-xl text-black font-medium mb-4">Lo mejor de allá</h3>
                        <p>Se incorporaron elementos interactivos que permitieran
                            a los usuarios explorar las distintas combinaciones de sabores y texturas, aumentando el engagement y la satisfacción del cliente.</p>
                    </div>
                    <div className="w-full md:w-4/6 flex justify-end">
                        <img src={extras1} alt="trayningym" />
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-4/6">
                        <img src={extras2} alt="trayningym" />
                    </div>
                    <div className="w-full md:w-2/6 flex flex-col">
                        <h4 className="text-purple text-sm font-semibold">Bastrop (Texas)</h4>
                        <h2 className="text-2xl text-neutral-500 font-bold mb-4">Trainingym</h2>
                        <p className="mb-4">Toro Company es una constructora donde enfrentamos el desafío de mejorar la experiencia y la navegación del sitio web, sin comprometer la estética y la funcionalidad.</p>
                        <p className="mb-4">Optimizamos el flujo de reservas de servicios y cotizaciones mediante la implementación de una calculadora virtual que proporcionaba estimaciones precisas a los usuarios. Además, nos aseguramos de que la navegación del sitio fuera intuitiva y atractiva, permitiendo a los usuarios encontrar fácilmente la información que necesitaban y realizar sus solicitudes de manera rápida y sin complicaciones.</p>
                        <h3 className="text-xl text-black font-medium mb-4">Lo mejor de allá</h3>
                        <p>El enfoque que escogimos no solo nos facilitó la interacción del cliente con la plataforma, sino que también mejoró la eficiencia y la satisfacción del usuario en todo el proceso.</p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-2/6 flex flex-col">
                        <h4 className="text-purple text-sm font-semibold">Dentsu Creative</h4>
                        <h2 className="text-2xl text-neutral-500 font-bold mb-4">Fábrica de licores<br />y alcoholes de Antioquia</h2>
                        <p className="mb-4">A través de la agencia donde trabajé, tuve la oportunidad de colaborar con la FLA, una licorera destacada en la producción de grandes tragos en el país. Diseñamos interfaces para una campaña educativa que promovía las buenas prácticas de beber responsablemente, en colaboración con reconocidos comediantes. La campaña se centró en la interacción del usuario con la plataforma, donde los videos educativos desbloqueaban premios, incentivando así el consumo responsable y la educación sobre el alcohol.</p>
                        <h3 className="text-xl text-black font-medium mb-4">Lo mejor de allá</h3>
                        <p>Este enfoque no solo atrajo la atención del público, sino que también reforzó el mensaje de responsabilidad social de la Fábrica de licores y alcoholes de Antioquia</p>
                    </div>
                    <div className="w-full md:w-4/6 flex justify-end">
                        <img src={extras3} alt="trayningym" />
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-4/6">
                        <img src={extras4} alt="trayningym" />
                    </div>
                    <div className="w-full md:w-2/6 flex flex-col">
                        <h4 className="text-purple text-sm font-semibold">Almería (España)</h4>
                        <h2 className="text-2xl text-neutral-500 font-bold mb-4">Trainingym</h2>
                        <p className="mb-4">Durante mi tiempo en Trainigym, una plataforma móvil innovadora dedicada a hacer que el ejercicio sea más atractivo y accesible a través de planes de entrenamiento interactivos y colaboraciones globales con gimnasios, desempeñé un papel crucial en la validación del arte finalizado de los requerimientos de marketing y otros departamentos. Mi responsabilidad incluía asegurar la coherencia visual y funcional del producto, garantizando que cada elemento gráfico y de diseño contribuyera a una experiencia de usuario óptima.</p>
                        <h3 className="text-xl text-black font-medium mb-4">Lo mejor de allá</h3>
                        <p>Participé en la migración del sofware de Sketch a Figma, actualizando las guías del sistema. Mejorando la eficiencia del flujo de trabajo y facilitando la colaboración entre equipos. Implementamos mejoras basadas en feedback puntual del cliente para mejorar la experiencia de usuario en Trainigym.</p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-full md:w-2/6 flex flex-col">
                        <h4 className="text-purple text-sm font-semibold">Bastrop (Texas)</h4>
                        <h2 className="text-2xl text-neutral-500 font-bold mb-4">Monarch Cleaning Group</h2>
                        <p className="mb-4">Trabajé con Monarch Cleaning, una agencia de aseo, donde enfrentamos el desafío de optimizar la forma de reservas de servicios y cotizaciones. El proceso anterior era engorroso y a menudo los precios no eran precisos debido a la presión de entregar datos rápidamente. La solución fue integrar API's que facilitaban el agendamiento de citas mediante calendarios enlazados a la web y calculadoras optimizadoras que proporcionaban datos precisos. Esto permitió mejorar significativamente la eficiencia en la gestión de reservas y cotizaciones, optimizando tanto los tiempos como los precios para ofrecer un servicio más confiable y efectivo a los clientes.</p>
                        <h3 className="text-xl text-black font-medium mb-4">Lo mejor de allá</h3>
                        <p>Esta optimización no solo aumentó la satisfacción del cliente, sino que también permitió a Monarch Cleaning gestionar su negocio de manera más ágil y precisa.</p>
                    </div>
                    <div className="w-full md:w-4/6 flex justify-end">
                        <img src={extras5} alt="trayningym" />
                    </div>
                </div>

            </section>
            <section className="bg-black w-full">
                <div className="-translate-y-32">
                    <Cards layout='no-home' />
                </div>
            </section>

            <section id="world" className="bg-black px-4 md:px-0 py-24 mt-12 mb-48 w-full flex flex-col items-center justify-start relative">
                <Productos />
            </section>
        </>
    );
}

export default Davivienda;