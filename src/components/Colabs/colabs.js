import Marquee from "react-fast-marquee";

const Colabs = () => {
    const bancolombia = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/bancolombia_lotd2e.png"
    const mastercard = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/mastercard_mj2eom.png"
    const davivienda = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403068/davivienda_vpwll8.png"
    const solved = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403062/solved_esm86d.png"
    const avianca = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/bancolombia_lotd2e.png"
    const dentsu = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403068/dentsu_ajeryx.png"
    const lulo = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403074/lulo_ihxyjf.png"
    const trainingym = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403063/trainingym_yev4gy.png"

    return (
        <>
            <div className="w-[120vw] md:w-[105vw] h-21 md:h-24 bg-white pb-4 flex justify-between items-center rotate-[20deg] md:rotate-6 absolute top-[200px]">
                <Marquee className="mt-8" direction="right">
                    <img
                        src={bancolombia}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo bancolombia'
                    />
                    <img
                        src={mastercard}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo mastercard'
                    />
                    <img
                        src={davivienda}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo davivienda'
                    />
                    <img
                        src={solved}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo solved'
                    />
                    <img
                        src={bancolombia}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo bancolombia'
                    />
                    <img
                        src={mastercard}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo mastercard'
                    />
                    <img
                        src={davivienda}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo davivienda'
                    />
                    <img
                        src={solved}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo solved'
                    />
                </Marquee>
            </div>
            <div className="w-[120vw] md:w-[105vw] h-21 md:h-24 bg-white pb-4 flex justify-between items-center -rotate-[20deg] md:-rotate-6 absolute top-[200px]">
                <Marquee className="mt-8">
                    <img
                        src={avianca}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo avianca'
                    />
                    <img
                        src={dentsu}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo dentsu'
                    />
                    <img
                        src={lulo}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo lulo'
                    />
                    <img
                        src={trainingym}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo trainingym'
                    />
                    <img
                        src={avianca}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo avianca'
                    />
                    <img
                        src={dentsu}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo dentsu'
                    />
                    <img
                        src={lulo}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo lulo'
                    />
                    <img
                        src={trainingym}
                        className="self-center h-8 mx-12 md:mx-24"
                        alt='logo trainingym'
                    />
                </Marquee>
            </div>
        </>
    );
}

export default Colabs;