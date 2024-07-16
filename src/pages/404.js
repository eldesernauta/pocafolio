import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const img404 = require("../img/404.png")

const Custom404 = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="w-full h-screen px-4 md:px-0 flex justify-center items-center">
                <div id="skills" className="container mx-auto flex flex-col justify-center items-center gap-4 md:gap-8">
                    <h2 className="text-primary font-ClashDisplay text-8xl md:text-9xl font-medium">Oops!</h2>
                    <p className="text-white text-xl md:text-3xl font-medium">La página que buscas no existe</p>
                    <img src={img404} alt="404" className="mt-16 mb-8" />

                </div>
                <Link onClick={() => navigate(-1)}>
                    <p className="absolute top-[90%] md:top-[50%] left-8 text-white text-sm flex gap-2 items-center"><svg className="w-5 h-5 text-primary rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> Ir atrás</p>
                </Link>
                <Link to={'/'}>
                    <p className="absolute top-[90%] md:top-[50%] right-8 text-white text-sm flex gap-2 items-center">Ir al home<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></p>
                </Link>
            </section>
        </>
    );
}

export default Custom404;