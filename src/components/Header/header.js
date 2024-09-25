import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

import NavbarButton from '../NavbarButton/navbarButton';
const linkStyles = "text-black text-4xl md:text-7xl font-Josefin uppercase font-semibold tracking-widest link-hover"

const Header = (props) => {
    const fotoNavbar = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721404738/foto-navbar_wztxoe.jpg'
    const { pathname } = useLocation();

    let ruta = ""

    if (pathname === "/trabajo/avianca" | pathname === "/trabajo/la-cima" | pathname === "/trabajo/mastercard" | pathname === "/trabajo/extras") {
        ruta = pathname
    } else {
        ruta = ""
    }

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
        <div id='header' className='w-full h-screen md:h-auto absolute top-0 left-0 z-[9999]'>
            <nav className={`container mx-auto py-3 flex justify-center ${pathname === "/trabajo/avianca" | pathname === "/trabajo/la-cima" | pathname === "/trabajo/mastercard" | pathname === "/trabajo/extras" ? 'lg:justify-center' : 'lg:justify-between'} gap-3 lg:gap-0 items-center text-white px-2 lg:px-5 2xl:px-0`}>

                <div className={`${pathname === ruta ? 'hidden' : 'block'} order-1 lg:order-1 w-2/12 lg:w-3/12 flex justify-center lg:justify-start items-center`}>
                    <Link to={'/'}>
                        <img src={fotoNavbar} alt="foto del header" width={`50`} height={`50`} className={`link-hover rounded-full rotate-0 hover:rotate-[360deg] transition-all duration-300`} />
                    </Link>
                </div>
                <div className='order-3 lg:order-2 w-2/12 lg:w-6/12 flex justify-center items-center' >
                    <NavbarButton action={handleToggleMenu} showMenu={showMenu} color={'white'} />
                    <div
                        ref={menuRef}
                        className="fixed inset-y-0 left-0 box-border flex flex-col bg-[#EBFF46] w-full h-screen p-6 text-white z-[99999] justify-between items-end"
                    >
                        <NavbarButton action={handleToggleMenu} showMenu={showMenu} color={'black'} />
                        <ul className="font-ClashDisplay absolute top-[30%] lg:top-auto bottom-auto lg:bottom-20 left-4 lg:left-20">
                            <li className="mb-2 pl-0 hover:pl-20 no-underline hover:underline transition-all duration-200 ease-in-out">
                                <Link to="/" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="mb-2 pl-0 hover:pl-20 no-underline hover:underline transition-all duration-200 ease-in-out">
                                <Link to="/trabajo" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    Trabajo
                                </Link>
                            </li>
                            <li className="mb-2 pl-0 hover:pl-20 no-underline hover:underline transition-all duration-200 ease-in-out">
                                <Link to="/quien-soy" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    ¿Quién soy?
                                </Link>
                            </li>
                            <li className="mb-2 pl-0 hover:pl-20 no-underline hover:underline transition-all duration-200 ease-in-out">
                                <Link to="/conectemos" spy={true} smooth={true} offset={50} duration={500} className={linkStyles} onClick={handleToggleMenu} >
                                    Conectemos
                                </Link>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-5 block lg:absolute bottom-20 right-20 place-self-center'>
                            <img src={fotoNavbar} alt="Foto del header" width={`100`} height={`100`} className='link-hover rounded-full rotate-0 hover:rotate-[360deg] transition-all duration-300' />
                            <ul className='w-full flex justify-center items-center gap-3'>

                                <li className='mx-2 text-black hover:text-white transition duration-500  link-hover'>
                                    <Link to={'https://www.instagram.com/incrustes/'} target='_blank'>
                                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15 }} />
                                    </Link>
                                </li>
                                <li className='mx-2 text-black hover:text-white transition duration-500  link-hover'>
                                    <Link to={'https://www.linkedin.com/in/andres-sanchez-ui/'} target='_blank'>
                                        <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 15 }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={`${pathname === ruta ? 'hidden' : 'block'} order-2 lg:order-3 w-8/12 lg:w-3/12 flex justify-center lg:justify-end items-center`}>
                    <Link to="https://wa.link/k52s0r" target='_blank' spy={true} smooth={true} className={`link-hover bg-slate-800 no-underline group relative shadow-xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block`}>
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 pl-4 lg:pl-8 pr-4 py-1.5">
                            <span>
                                ¡Hablemos por Whatsapp!
                            </span>
                            <svg
                                fill="none"
                                height="16"
                                className='hidden md:block'
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;

