import { useLocation } from 'react-router-dom';
import { WavyFooter } from "../ui/wavyFooter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const { pathname } = useLocation();

    if (pathname === "/trabajo/avianca" | pathname === "/trabajo/la-cima" | pathname === "/trabajo/mastercard" | pathname === "/trabajo/extras") {
        return ""
    } else {
        return (
            <div className={`relative w-full bg-black pt-32 md:pt-48 pb-8 flex flex-col justify-between overflow-hidden`}>
                <WavyFooter className={`w-full h-screen flex flex-col justify-end items-center`}></WavyFooter>
                <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start z-10">
                    <ul className="w-full flex flex-col text-center md:text-left justify-center gap-0">
                        <li className="text-black font-semibold mb-2 md:mb-4 underline md:no-underline">
                            <Link to='/' className="link-hover">
                                Inicio
                            </Link>
                        </li>
                        <li className="text-black font-semibold mb-2 md:mb-4 underline md:no-underline">
                            <Link to='/trabajo' className="link-hover">
                                Trabajo
                            </Link>
                        </li>
                        <li className="text-black font-semibold mb-2 md:mb-4 underline md:no-underline">
                            <Link to='/quien-soy' className="link-hover">
                                ¿Quién soy?
                            </Link>
                        </li>
                        <li className="text-black font-semibold mb-2 md:mb-4 underline md:no-underline">
                            <Link to='/conectemos' className="link-hover">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-4 text-black mb-6 md:mb-0">
                        <h4 className="font-black text-lg">¿Tienes un proyecto en mente?</h4>
                        <p className="text-lg">Deja tu correo electrónico<br /> y te contactaré pronto</p>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input placeholder="Correo electrónico"
                                class="peer h-full w-full border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Correo electrónico
                            </label>
                        </div>
                    </div>
                </div>
                <h2 className="w-full text-[20vw] text-white font-bold text-center m-0 mt-40 md:mt-[300px] -mb-28 md:mb-0 pb-48 mix-blend-exclusion leading-[0px]">incrustes</h2>
                <hr className="container h-[1px] bg-gray-400 mx-auto z-50" />
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-white pt-8 z-50 text-sm">
                    <p>Copyright © 2024</p>
                    <p><FontAwesomeIcon icon={faGlobe} style={{ fontSize: 15 }} /> Quindío, Colombia</p>
                    <div className="flex gap-4 md:gap-8">
                        <Link to={'https://www.instagram.com/incrustes/'} target="_blank" className="link-hover no-underline hover:text-primary">Instagram</Link>
                        <Link to={'https://www.linkedin.com/in/andres-sanchez-ui/'} target="_blank" className="link-hover no-underline hover:text-primary">LinkedIn</Link>
                    </div>
                </div>
            </div>
        );
    }


}

export default Footer;