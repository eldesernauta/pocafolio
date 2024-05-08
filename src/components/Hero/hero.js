import Header from "../Header/header";
import { WavyBackground } from "../ui/wavyBackground";
import CustomMarquee from "../Marquee/marquee";
import SpinBtn from "../SpinBtn/spinBtn";

const separator = require("../../img/separator.png")
const foto = require("../../img/hero-foto.png")

const Hero = () => {
    return (
        <>
            <WavyBackground className="w-full h-screen flex flex-col justify-end items-center">
                <Header />
                <img src={foto} alt="foto de andrés sanchez" className="w-100 md:w-[30vw] z-10 drag-none select-none" />
                <div className="absolute top-[30%] md:top-[25%] left-0">
                    <CustomMarquee baseVelocity={-1}>
                        incrustes
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        incrustes
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        incrustes
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                        incrustes
                        <img
                            src={separator}
                            className="self-center mx-2 w-12 h-12"
                            alt='separador de textos'
                        />
                    </CustomMarquee>
                </div>
                <SpinBtn />
                <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-96 z-20"></div>
            </WavyBackground>
        </>);
}

export default Hero;