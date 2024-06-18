import { TextGenerateEffect } from "../ui/text-generate-effect";
import Marquee from "react-fast-marquee";

const framer = require("../../img/framer.png")
const atlassian = require("../../img/atlassian.png")
const shopify = require("../../img/shopify.png")
const github = require("../../img/github-logo.png")
const launchdarkly = require("../../img/launchdarkly.png")
const tailscale = require("../../img/tailscale.png")

const words = `Diseñador de producto centrado en las experiencias digitales del usuario mediante el diseño de interfaces interactivas, servicios innovadores, funcionales y atractivos.`;

const Herramientas = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col justify-start items-center relative pt-20 md:pt-0">
                <h2 className="text-gray-200 text-center text-3xl">Herramientas</h2>
                <hr className="bg-primary h-1 w-24 mx-auto mt-4" />
                <div className="w-[100px] h-full absolute left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                <Marquee className="mt-8">
                    <img
                        src={framer}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={atlassian}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={shopify}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={github}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={launchdarkly}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                    <img
                        src={tailscale}
                        className="self-center w-48 mx-12"
                        alt='separador de textos'
                    />
                </Marquee>
                <div className="w-[100px] h-full absolute right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
            <div className="container mx-auto flex justify-center items-center text-center pt-12 md:pt-24 pb-12 md:pb-8">
                <TextGenerateEffect words={words} paragraph2="" align="center" />
            </div>
        </>
    );
}

export default Herramientas;