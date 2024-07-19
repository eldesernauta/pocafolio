import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SwitchBtn() {
    const wireframe = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403063/wireframe_oh4bvp.png";
    const dashboard = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403068/dashboard_elm9w5.png";

    const [isOn, setIsOn] = useState(false);
    const [imageSrc, setImageSrc] = useState(wireframe);

    const toggleSwitch = () => setIsOn(!isOn);

    useEffect(() => {
        setImageSrc(isOn ? dashboard : wireframe);
    }, [isOn, dashboard, wireframe]);

    return (
        <>
            <div className={`link-hover switch mx-auto w-[200px] h-[80px] md:h-[120px] flex justify-start rounded-full p-2.5 z-50 ${isOn ? 'bg-[#77EC30] shadow-[inset_10px_2px_20px_10px_#00000030]' : 'bg-white shadow-[inset_10px_0px_20px_10px_#00000010]'} `} data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className={`handle ${isOn ? 'bg-white shadow-[inset_10px_0px_20px_10px_#00000030,-10px_10px_20px_0px_#00000024]' : 'bg-white shadow-[inset_-5px_0px_20px_10px_#00000030,10px_10px_20px_0px_#00000050]'} w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full`} layout transition={spring} />
            </div>
            <img src={imageSrc} alt="ejemplo de wireframe" className="rounded-lg -translate-y-8 md:-translate-y-16 z-0" />
        </>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export default SwitchBtn;
