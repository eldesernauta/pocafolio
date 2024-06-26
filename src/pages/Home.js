import Hero from "../components/Hero/hero";
import Herramientas from "../components/Herramientas/herramientas";
import HorizontalScroll from "../components/HorizontalScroll/horizontalScroll";
import SwitchBtn from "../components/SwitchBtn/switchBtn";
import Skills from "../components/Skills/skills";
import Colabs from "../components/Colabs/colabs";
import Productos from "../components/Productos/productos";
import ClientesMobile from "../components/ClientesMobile/clientesMobiles";
import Cards from "../components/Cards/cards";

function Home() {

    return (
        <>
            <Hero />
            <section className="bg-black pt-8">
                <Herramientas />
            </section>

            <section className="pt-0 pb-24 px-4 md:px-0">
                <Cards layout='home' />
            </section>

            <section className="hidden md:block bg-black pt-12 md:pt-24 relative">
                <div className="container mx-auto flex flex-col relative">
                    <HorizontalScroll />
                </div>
            </section>

            <section className="block md:hidden bg-black px-4 md:px-0 pt-12 md:pt-24 relative">
                <div className='flex flex-col justify-center items-center mb-8'>
                    <h4 className="text-lg text-primary font-bold text-center md:text-left translate-x-0 md:translate-x-24"> Todas mis </h4>
                    <h2 className="text-5xl md:text-9xl font-ClashDisplay font-medium text-white">Creaciones</h2>
                </div>
                <ClientesMobile />
            </section>

            <section id="skills" className="bg-gradient-to-b from-transparent via-[#00000080] to-black pt-32 md:pt-0 pb-0 mb-12 relative">
                <Skills />
            </section>

            <section className="bg-black px-4 md:px-2 pt-24">
                <div className="container mx-auto flex flex-col justify-center items-center gap-0">
                    <SwitchBtn />
                </div>
            </section>

            <section className="bg-black pt-8 mb-32 w-full h-[50vh] flex flex-col items-center justify-start relative">
                <h2 className="text-gray-200 text-center text-3xl">Colaboraciones</h2>
                <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
                <Colabs />
            </section>

            <section id="world" className="bg-black px-4 md:px-0 py-24 w-full flex flex-col items-center justify-start relative">
                <Productos />
            </section>
        </>
    );
}

export default Home;
