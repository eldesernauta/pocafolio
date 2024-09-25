import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Colabs from "../components/Colabs/colabs";
import ContactForm from "../components/ContactForm/contactForm";

function Contacto() {
    return (
        <>
            <section className="pt-48 px-4 2xl:px-0">
                <div className="container mx-auto flex flex-col justify-start items-start">
                    <Link to={'mailto:conectemos@incrustes.com'} className="link-hero text-white text-2xl font-neutral font-ClashDisplay flex gap-2 md:gap-4 items-center z-10"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15 }} className="text-primary" /> conectemos@incrustes.com</Link>
                    <h2 className="font-ClashDisplay text-5xl md:text-9xl text-white font-medium z-10">hey incrustes,</h2>
                    <div className="rounded-full w-[700px] h-[500px] bg-[#4A1A99] opacity-75 blur-3xl absolute -top-[250px] -right-[350px] z-0 scale-125"></div>
                </div>
                <ContactForm />
            </section >

            <section className="bg-black mb-24 w-full h-[50vh] flex flex-col items-center justify-start relative">
                <Colabs />
            </section>
        </>
    );
}

export default Contacto;

