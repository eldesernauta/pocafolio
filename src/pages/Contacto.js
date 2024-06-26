import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Colabs from "../components/Colabs/colabs";


function Contacto() {
    const [selected, setSelected] = useState('A');

    const handleChange = (value) => {
        setSelected(value);
    };
    return (
        <>
            <section className="pt-48 px-4 md:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <Link to={'mailto:conectemos@incrustes.com'} className="link-hero text-white text-2xl font-neutral font-ClashDisplay flex gap-2 md:gap-4 items-center z-10"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15 }} className="text-primary" /> conectemos@incrustes.com</Link>
                    <h2 className="font-ClashDisplay text-5xl md:text-9xl text-white font-medium z-10">hey incrustes,</h2>
                    <div className="rounded-full w-[700px] h-[500px] bg-[#4A1A99] opacity-75 blur-3xl absolute -top-[250px] -right-[350px] z-0 scale-125"></div>
                </div>
                <div className="container mx-auto my-12 md:my-24">
                    <form className="w-full flex flex-col gap-8 md:gap-12 bg-[#131313] border border-solid px-8 py-12 md:px-12 border-[#5F5F5F] rounded-xl ">
                        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
                            <p className="w-48 font-bold text-white text-xl">Mi nombre es</p>
                            <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 ">
                                <input
                                    type="text"
                                    name="first_and_lastname"
                                    id="first_and_lastname"
                                    className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                                    placeholder="ingrese su nombre*"
                                    required
                                />
                                <p className="font-bold text-white text-xl">de</p>
                                <input
                                    type="text"
                                    name="first_and_lastname"
                                    id="first_and_lastname"
                                    className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                                    placeholder="ingrese el nombre de la empresa*"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-4 md:gap-8">

                            <p className="w-48 font-bold text-white text-xl">Disponible en</p>

                            <div className="w-full flex items-end">
                                <input
                                    type="text"
                                    name="first_and_lastname"
                                    id="first_and_lastname"
                                    className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                                    placeholder="ingrese su correo electrónico*"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-4 md:gap-8">

                            <p className="w-48 font-bold text-white text-xl">Me interesa</p>

                            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4">
                                {['Cotizar un proyecto', '¿Alguna propuesta?', 'Trabajemos juntos'].map((label) => (
                                    <label key={label} className="custom-radio">
                                        <input
                                            type="radio"
                                            name="radio"
                                            checked={selected === label}
                                            onChange={() => handleChange(label)}
                                            className="hidden"
                                        />
                                        <div
                                            className={`cursor-pointer bg-transparent inline-block border border-solid rounded-full text-center w-60 py-4 px-0 md:px-4 leading-24 ${selected === label
                                                ? 'border-purple bg-purple text-white border-1 shadow-inner'
                                                : 'border-primary border-1 text-primary hover:border-purple hover:text-purple'
                                                }`}
                                        >
                                            {label}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-8">

                            <p className="w-48 font-bold text-white text-xl">En breve,</p>

                            <div className="w-full flex items-end">

                                <textarea
                                    id="comment"
                                    name="comment"
                                    rows={3}
                                    className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                                    placeholder="ingrese su mensaje (opcional)"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary place-self-center md:place-self-end font-ClashDisplay hover:bg-purple hover:text-white hover:scale-110 transition-all duration-100 text-black w-full md:w-96 py-4 rounded-full z-10"
                        >
                            Enviar mensaje a incrustes
                        </button>
                    </form>
                </div >
            </section >

            <section className="bg-black mb-24 w-full h-[50vh] flex flex-col items-center justify-start relative">
                <Colabs />
            </section>
        </>
    );
}

export default Contacto;

