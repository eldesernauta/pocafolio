import { Link } from "react-router-dom"

const Productos = () => {
    const iteracion = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403071/iteracion_rdcear.png"
    const boton = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403066/boton_yxxpcx.png"
    const svg = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403062/svg_ts3jdc.png"
    const cms = "https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/cms_jkcyol.png"

    return (
        <>
            <div className="container pt-8 pb-24 px-2 mx-auto relative flex flex-col justify-center items-center relative rounded-xl">
                <div className="border-2 w-6/6 md:w-4/6 border-dashed border-[#EB00FF] px-0 py-8 mx-auto">
                    <h2 className="text-white text-5xl md:text-7xl font-semibold text-center">Mejoremos productos</h2>
                    <h5 className="text-white text-center text-3xl w-11/12 md:w-8/12 mx-auto mt-8">Apasionado por mejorar la usabilidad web
                        para una experiencia óptima del usuario.</h5>
                </div>
                <Link to={'/conectemos'} className="link-hover">
                    <img src={boton} alt="icono de iteracion" />
                </Link>
                <img src={iteracion} alt="icono de iteracion" className="absolute scale-50 md:scale-100 bottom-24 md:bottom-32 left-0 md:left-24" />
                <img src={cms} alt="icono de iteracion" className="absolute scale-75 md:scale-100 -bottom-28 md:bottom-28 right-0 md:right-32" />
                <img src={svg} alt="icono de iteracion" className="absolute -top-32 md:top-16 right-3 md:right-12" />
            </div>
        </>
    );
}

export default Productos;