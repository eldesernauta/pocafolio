import { WavyBackground } from "../ui/wavyBackground";
import CustomMarquee from "../Marquee/marquee";
import SpinBtn from "../SpinBtn/spinBtn";


const Hero = () => {
    const foto = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403071/hero-foto_bwwfon.png"
    const separator = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png"

    return (
        <>
            <WavyBackground className="w-full h-screen flex flex-col justify-end items-center overflow-hidden">
                <img src={foto} alt="foto de andrés sanchez" className="w-full md:w-[80vw] lg:w-[45vw] xl:w-[33vw] -translate-y-12 z-10 drag-none select-none" />
                <div className="absolute top-[30%] lg:top-[25%] left-0">
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
                <div className="absolute -bottom-20 lg:bottom-0 bg-gradient-to-b from-transparent via-[#00000080] to-black w-full h-[500px] z-20"></div>
            </WavyBackground>
        </>);
}

export default Hero;