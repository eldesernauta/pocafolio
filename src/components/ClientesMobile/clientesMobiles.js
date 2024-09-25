import { Link } from "react-router-dom";

const clientes3 = require('../../img/mastercard-home-movil.gif')

const ClientesMobile = () => {
    const clientes1 = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403919/avianca-home-movil_kutujt.gif'
    const clientes2 = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403926/la-cima-home-movil_ahitxs.gif'
    const clientes4 = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403924/extras-home-movil_uv8atj.gif'

    return (
        <>
            <div className="container mx-auto flex flex-col relative gap-12">
                <div className="w-full h-auto px-0">
                    <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                        <div className='w-full flex flex-col justify-start items-start'>
                            <div className='w-full lg:w-auto h-[50vh] lg:h-96 overflow-hidden'>
                                <img
                                    src={clientes1}
                                    className='object-cover lg:object-contain h-full lg:h-auto rounded-xl w-full'
                                    alt='imagen avianca'
                                />
                            </div>
                            <div className='w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center mt-8'>
                                <div className='w-6/6 lg:w-5/12 flex flex-col justify-center items-start gap-2'>
                                    <h2 className='text-white text-4xl font-bold'> Avianca </h2>
                                    <p className='text-white'>Dentsu Creative</p>
                                    <Link to={'/trabajo/avianca'} className='link-hover btn mt-4 rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-auto px-0">
                    <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                        <div className='w-full flex flex-col justify-start items-start'>
                            <div className='w-full lg:w-auto h-[50vh] lg:h-96 overflow-hidden'>
                                <img
                                    src={clientes3}
                                    className='object-cover lg:object-contain h-full lg:h-auto rounded-xl w-full'
                                    alt='imagen avianca'
                                />
                            </div>
                            <div className='w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center mt-8'>
                                <div className='w-6/6 lg:w-5/12 flex flex-col justify-center items-start gap-2'>
                                    <h2 className='text-white text-4xl font-bold'> Mastercard </h2>
                                    <p className='text-white'>Dentsu Creative</p>
                                    <Link to={'/trabajo/mastercard'} className='link-hover btn mt-4 rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-auto px-0">
                    <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                        <div className='w-full flex flex-col justify-start items-start'>
                            <div className='w-full lg:w-auto h-[50vh] lg:h-96 overflow-hidden'>
                                <img
                                    src={clientes2}
                                    className='object-cover lg:object-contain h-full lg:h-auto rounded-xl w-full'
                                    alt='imagen avianca'
                                />
                            </div>
                            <div className='w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center mt-8'>
                                <div className='w-6/6 lg:w-5/12 flex flex-col justify-center items-start gap-2'>
                                    <h2 className='text-white text-4xl font-bold'> La Cima Ecohotel </h2>
                                    <p className='text-white'>Freelancer</p>
                                    <Link to={'/trabajo/la-cima'} className='link-hover btn mt-4 rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-auto px-0">
                    <div className="flex flex-col w-full items-center justify-start rounded-xl mx-auto overflow-hidden">
                        <div className='w-full flex flex-col justify-start items-start'>
                            <div className='w-full lg:w-auto h-[50vh] lg:h-96 overflow-hidden'>
                                <img
                                    src={clientes4}
                                    className='object-cover lg:object-contain h-full lg:h-auto rounded-xl w-full'
                                    alt='imagen avianca'
                                />
                            </div>
                            <div className='w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center mt-8'>
                                <div className='w-6/6 lg:w-5/12 flex flex-col justify-center items-start gap-2'>
                                    <h2 className='text-white text-4xl font-bold'> Extras </h2>
                                    <p className='text-white'>Freelancer</p>
                                    <Link to={'/trabajo/extras'} className='link-hover btn mt-4 rounded-full border border-1 border-primary text-primary px-12 py-2 hover:bg-primary hover:text-black transition-colors duration-100 ease-in-out'>Ver más</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientesMobile;