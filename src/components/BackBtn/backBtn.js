import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BackBtn = () => {
    const { pathname } = useLocation();

    let ruta = "";

    switch (pathname) {
        case "/trabajo/avianca":
            ruta = "/trabajo";
            break;
        case "/trabajo/mastercard":
            ruta = "/trabajo/avianca";
            break;
        case "/trabajo/la-cima":
            ruta = "/trabajo/mastercard";
            break;
        case "/trabajo/extras":
            ruta = "/trabajo/la-cima";
            break;
        default:
            ruta = "";
            break;
    }

    return (
        <div className="link-hover fixed bottom-8 left-8 z-50">
            <Link to={ruta} className="bg-[#ffffff80] border-solid border-8 border-primary w-20 h-20 rounded-full text-black flex justify-center items-center rotate-180">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </Link>
        </div>
    );
}

export default BackBtn;
