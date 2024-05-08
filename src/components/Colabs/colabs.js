import Marquee from "react-fast-marquee";

const github = require("../../img/github-logo.png")

const Colabs = () => {
    return (
        <>
            <h2 className="text-gray-200 text-center text-3xl">Colaboraciones</h2>
            <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
            <div className="w-[120vw] md:w-[105vw] bg-primary pb-4 flex justify-between items-center rotate-[20deg] md:rotate-6 absolute top-[200px]">
                <Marquee className="mt-8">
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                </Marquee>
            </div>
            <div className="w-[120vw] md:w-[105vw] bg-primary pb-4 flex justify-between items-center -rotate-[20deg] md:-rotate-6 absolute top-[200px]">
                <Marquee className="mt-8">
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                </Marquee>
            </div>
        </>
    );
}

export default Colabs;