import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const wireframe = require("../../img/wireframe.png")
const dashboard = require("../../img/dashboard.png")

function SwitchBtn() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <>
            <div className={`switch mx-auto w-[200px] h-[120px] flex justify-start rounded-full cursor-pointer p-2.5 z-50 ${isOn ? 'bg-[#77EC30] shadow-[inset_10px_2px_20px_10px_#00000030]' : 'bg-white shadow-[inset_10px_0px_20px_10px_#00000010]'} `} data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className={`handle ${isOn ? 'bg-white shadow-[inset_10px_0px_20px_10px_#00000030,-10px_10px_20px_0px_#00000024]' : 'bg-white shadow-[inset_-5px_0px_20px_10px_#00000030,10px_10px_20px_0px_#00000050]'} w-[100px] h-[100px] rounded-full`} layout transition={spring} />
            </div>
            <img src={isOn ? dashboard : wireframe} alt="ejemplo de wireframe" className="rounded-lg -translate-y-16 z-0" />
        </>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export default SwitchBtn