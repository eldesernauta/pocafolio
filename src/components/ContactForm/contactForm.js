import { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [selected, setSelected] = useState('A');
    const [formData, setFormData] = useState({
        first_and_lastname: '',
        company: '',
        email: '',
        interest: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRadioChange = (value) => {
        setSelected(value);
        setFormData({ ...formData, interest: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_bvr20za',
            'template_gsbzpzq',
            formData,
            'EHlTAsANWpShbDjGf'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setErrorMessage('Tu mensaje se envió correctamente'); // Clear error message on success
        }).catch((err) => {
            console.log('FAILED...', err);
            setErrorMessage('Error al enviar el formulario. Intente nuevamente.'); // Set error message on failure
        });
    };

    return (
        <div className="container mx-auto my-12 md:my-24">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8 md:gap-12 bg-[#131313] border border-solid px-8 py-12 md:px-12 border-[#5F5F5F] rounded-xl">
                <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
                    <p className="w-48 font-bold text-white text-xl">Mi nombre es</p>
                    <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                        <input
                            type="text"
                            name="first_and_lastname"
                            id="first_and_lastname"
                            className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                            placeholder="ingrese su nombre*"
                            required
                            value={formData.first_and_lastname}
                            onChange={handleChange}
                        />
                        <p className="font-bold text-white text-xl">de</p>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                            placeholder="ingrese el nombre de la empresa*"
                            required
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-4 md:gap-8">
                    <p className="w-48 font-bold text-white text-xl">Disponible en</p>
                    <div className="w-full flex items-end">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                            placeholder="ingrese su correo electrónico*"
                            required
                            value={formData.email}
                            onChange={handleChange}
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
                                    name="interest"
                                    checked={selected === label}
                                    onChange={() => handleRadioChange(label)}
                                    className="hidden"
                                />
                                <div
                                    className={`cursor-pointer bg-transparent inline-block border border-solid rounded-full text-center w-60 py-4 px-0 md:px-4 leading-24 ${selected === label
                                        ? 'border-purple bg-[#9900FF] text-white border-1 shadow-inner'
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
                            name="message"
                            rows={3}
                            className="w-full py-3 text-sm bg-transparent border-0 appearance-none text-white border-b-[1px] border-primary focus:outline-none focus:ring-0 focus:border-green-goo peer"
                            placeholder="ingrese su mensaje (opcional)"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-primary place-self-center md:place-self-end font-ClashDisplay hover:bg-purple hover:text-white hover:scale-110 transition-all duration-100 text-black w-full md:w-96 py-4 rounded-full z-10"
                >
                    Enviar mensaje a incrustes
                </button>
                {errorMessage && (
                    <div className="w-full text-right text-primary">
                        {errorMessage}
                    </div>
                )}
            </form>
        </div>
    );
}

export default ContactForm;
