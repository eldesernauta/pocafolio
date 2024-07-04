const Cards = ({ layout }) => {
    const baseClasses = "w-full md:w-4/12 flex flex-col items-start justify-start gap-2 bg-[#131313] pt-12 px-8 pb-96 border border-solid border-neutral-700 overflow-hidden rounded-xl relative transition-all duration-200 shadow-none hover:shadow-2xl hover:shadow-primary";

    const getCardClasses = (additionalClasses = "") => `${baseClasses} ${additionalClasses}`;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-0 md:gap-32">
            <div id="card1" className={getCardClasses()}>
                <h3 className="text-white text-3xl font-bold">Sitios web</h3>
                <p className="text-white w-full md:w-4/6">Sitios responsivos y paneles de control para su negocio.</p>
                <div className="w-full h-48 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div id="card2" className={getCardClasses(layout === "home" ? "mt-8 md:mt-24" : "")}>
                <h3 className="text-white text-3xl font-bold">Sistemas de diseño</h3>
                <p className="text-white w-full md:w-5/6">Creación de sistemas de diseño flexibles para una fácil escalabilidad.</p>
                <div className="w-full h-48 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div id="card3" className={getCardClasses(layout === "home" ? "mt-8 md:mt-48" : "")}>
                <h3 className="text-white text-3xl font-bold">Design thinking</h3>
                <p className="text-white w-full md:w-6/6">Metodología para resolver problemas con creatividad e iteración continua.</p>
                <div className="w-full h-48 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>
    );
}

export default Cards;
