import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-scroll"

import NavbarButton from '../NavbarButton/navbarButton';
const linkStyles = "text-white text-sm font-Josefin uppercase font-semibold tracking-widest cursor-pointer"

const logo = require('../../img/logo.png')

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef(null);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
        const menu = menuRef.current;
        if (!showMenu) {
            gsap.to(menu, { x: '0%', duration: 0.3, ease: 'power2.out' });
        } else {
            gsap.to(menu, { x: '-100%', duration: 0.3, ease: 'power2.out' });
        }
    };

    useEffect(() => {
        const menu = menuRef.current;
        gsap.set(menu, { x: '-100%' });
    }, []);

    return (
        <div className='w-full h-auto absolute top-0 left-0'>
            <nav className="container mx-auto py-3 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center text-white px-0 md:px-5 2xl:px-0">

                <div className='w-3/12 flex justify-start items-center' >
                    <img src={logo} alt="Logo" width={`35`} height={`35`} />
                </div>
                <div className='w-6/12 flex justify-center items-center' >
                    <NavbarButton action={handleToggleMenu} showMenu={showMenu} />
                    <div
                        ref={menuRef}
                        className="fixed inset-y-0 left-0 box-border flex flex-col bg-neutral-900 w-[calc(100%-15px)] md:w-64 p-6 text-white z-50 justify-between items-start"
                    >
                        <button
                            className="text-white font-bold text-lg mb-4 absolute top-4 right-4"
                            onClick={handleToggleMenu}
                        >
                            &#10005;
                        </button>
                        <ul className="font-Josefine">
                            <li className="mb-2">
                                <Link to="/" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="bio" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    Creaciones
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="commissions" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    Habilidades
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    Colabs
                                </Link>
                            </li>
                        </ul>
                        <div className='w-full flex flex-col gap-5'>
                            <img src={logo} alt="Logo" width={`100`} height={`100`} className='mx-auto' />
                            <ul className='w-full flex justify-center items-center gap-3'>
                                <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faFacebookF} style={{ fontSize: 15 }} /></li>
                                <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15 }} /></li>
                                <li className='mx-2 hover:text-gray-500 cursor-pointer transition duration-500'><FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 15 }} /></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='w-3/12 flex justify-end items-center' >
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}
                        className="text-white px-4 py-2 text-sm font-normal cursor-pointer rounded-lg bg-transparent border-4 border-[#ffffff50] outline outline-offset-0 outline-2 outline-gray-500 hover:border-transparent hover:bg-[#ffffff50] hover:text-primary transition-all duration-100"
                    >
                        ¡Hablemos por Whatsapp!
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;

