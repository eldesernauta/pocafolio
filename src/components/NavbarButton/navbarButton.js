import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const NavbarButton = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const genericHamburgerLine = `h-2 w-16 my-1 rounded-full
    bg-white transition ease transform duration-300`;

    const matchClose = props.showMenu

    const showMenu = () => {
        setIsOpen(!isOpen)
        props.action()
    }

    return (
        <button
            className="link-hover flex flex-col h-16 w-12 rounded justify-center items-center group scale-75"
            onClick={showMenu}
        >
            <div
                className={`${genericHamburgerLine} ${props.showMenu
                    ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                    : "opacity-50 translate-y-2 group-hover:opacity-100"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-0 group-hover:opacity-0"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${props.showMenu
                    ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                    : "opacity-50 -translate-y-2 group-hover:opacity-100"
                    }`}
            />
        </button>
    );
};

export default NavbarButton;