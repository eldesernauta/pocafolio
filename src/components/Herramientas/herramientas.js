import { TextGenerateEffect } from "../ui/text-generate-effect";
import Marquee from "react-fast-marquee";

const github = require("../../img/github-logo.png")

const words = `Diseñador de producto centrado en las experiencias digitales del usuario mediante el diseño de interfaces interactivas, servicios innovadores, funcionales y atractivos.`;

const Herramientas = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col justify-start items-center relative">
                <h2 className="text-gray-200 text-center text-3xl">Herramientas</h2>
                <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
                <div className="w-[100px] h-full absolute left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
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
                <div className="w-[100px] h-full absolute right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
            <div className="container mx-auto flex justify-center items-center text-center py-28">
                <TextGenerateEffect words={words} />
            </div>
        </>
    );
}

export default Herramientas;