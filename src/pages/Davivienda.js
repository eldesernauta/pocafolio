import StickyBox from "react-sticky-box";
import Cards from "../components/Cards/cards";
import Productos from "../components/Productos/productos";
import BackBtn from "../components/BackBtn/backBtn"

const mockup = require("../img/davivienda-hero.png")
const DaviviendaImg = require("../img/mastercard.png")

const Davivienda = () => {
    return (
        <>
            <BackBtn />
            <section className="h-screen w-full bg-gradient-to-r from-[#ED1C27] to-[#C90C14] py-[100px] overflow-hidden">
                <div className="container mx-auto h-full px-4 md:px-0 flex flex-col md:flex-row justify-center items-stretch">
                    <div className="w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center md:justify-between items-center md:items-start">
                        <img src={DaviviendaImg} alt="la cima hero" className="brightness-150" />
                        <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
                            <h4 className="text-white ml-0 md:ml-16">Colaboración</h4>
                            <h1 className="text-7xl md:text-9xl text-white font-ClashDisplay font-semibold">Davivienda</h1>
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/6 h-full py-8 md:py-0 flex flex-col justify-center items-center">
                        <img src={mockup} alt="avianca hero" className="object-fill h-screen" />
                        <h6 className="text-white absolute bottom-0 right-0">2023</h6>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-12 md:py-24 px-4 md:px-0">
                <div className="container mx-auto flex">
                    <div className="w-full md:w-4/6 h-full flex justify-center items-start">
                        <p className="text-sm">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-4 md:px-0 flex flex-col gap-8 h-auto md:h-[460vh] -mt-1">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[130vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Problema</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">User Experience</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[240vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Proceso</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[350vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Ideación</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 static md:absolute top-[460vh] left-0 right-0">
                    <StickyBox offsetTop={20} offsetBottom={20} className="w-full md:w-4/12 h-full flex flex-col justify-center items-start">
                        <h2 className="text-4xl font-bold">Resultado</h2>
                        <p className="text-sm my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Sitio web</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Email marketing</span>
                            <span className="rounded-full border-[1px] px-4 py-1 text-sm border-purple-500 text-purple-500">Design System</span>
                        </div>
                    </StickyBox>
                    <div className="w-full md:w-8/12 h-full flex flex-col gap-8 justify-center items-start">
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                        <div className="w-full h-[50vh] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black w-full">
                <div className="-translate-y-32">
                    <Cards layout='no-home' />
                </div>
            </section>

            <section id="world" className="bg-black px-4 md:px-0 py-24 mt-12 mb-48 w-full flex flex-col items-center justify-start relative">
                <Productos />
            </section>
        </>
    );
}

export default Davivienda;