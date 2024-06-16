import Marquee from "react-fast-marquee";

const bancolombia = require("../../img/bancolombia.png")
const mastercard = require("../../img/mastercard.png")
const davivienda = require("../../img/davivienda.png")
const solved = require("../../img/solved.png")
const avianca = require("../../img/avianca.png")
const dentsu = require("../../img/dentsu.png")
const lulo = require("../../img/lulo.png")
const trainingym = require("../../img/trainingym.png")

const Colabs = () => {
    return (
        <>
            <div className="w-[120vw] md:w-[105vw] h-24 bg-white pb-4 flex justify-between items-center rotate-[20deg] md:rotate-6 absolute top-[200px]">
                <Marquee className="mt-8" direction="right">
                    <img
                        src={bancolombia}
                        className="self-center h-8 mx-24"
                        alt='logo bancolombia'
                    />
                    <img
                        src={mastercard}
                        className="self-center h-8 mx-24"
                        alt='logo mastercard'
                    />
                    <img
                        src={davivienda}
                        className="self-center h-8 mx-24"
                        alt='logo davivienda'
                    />
                    <img
                        src={solved}
                        className="self-center h-8 mx-24"
                        alt='logo solved'
                    />
                    <img
                        src={bancolombia}
                        className="self-center h-8 mx-24"
                        alt='logo bancolombia'
                    />
                    <img
                        src={mastercard}
                        className="self-center h-8 mx-24"
                        alt='logo mastercard'
                    />
                    <img
                        src={davivienda}
                        className="self-center h-8 mx-24"
                        alt='logo davivienda'
                    />
                    <img
                        src={solved}
                        className="self-center h-8 mx-24"
                        alt='logo solved'
                    />
                </Marquee>
            </div>
            <div className="w-[120vw] md:w-[105vw] h-24 bg-white pb-4 flex justify-between items-center -rotate-[20deg] md:-rotate-6 absolute top-[200px]">
                <Marquee className="mt-8">
                    <img
                        src={avianca}
                        className="self-center h-8 mx-24"
                        alt='logo avianca'
                    />
                    <img
                        src={dentsu}
                        className="self-center h-8 mx-24"
                        alt='logo dentsu'
                    />
                    <img
                        src={lulo}
                        className="self-center h-8 mx-24"
                        alt='logo lulo'
                    />
                    <img
                        src={trainingym}
                        className="self-center h-8 mx-24"
                        alt='logo trainingym'
                    />
                    <img
                        src={avianca}
                        className="self-center h-8 mx-24"
                        alt='logo avianca'
                    />
                    <img
                        src={dentsu}
                        className="self-center h-8 mx-24"
                        alt='logo dentsu'
                    />
                    <img
                        src={lulo}
                        className="self-center h-8 mx-24"
                        alt='logo lulo'
                    />
                    <img
                        src={trainingym}
                        className="self-center h-8 mx-24"
                        alt='logo trainingym'
                    />
                </Marquee>
            </div>
        </>
    );
}

export default Colabs;