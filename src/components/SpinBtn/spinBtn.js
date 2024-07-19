import { Link } from 'react-router-dom';

const SpinBtn = () => {
    const text = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403067/circle-text_wdzwpv.png'
    const separator = 'https://res.cloudinary.com/dsnsr7pdp/image/upload/v1721403034/separator_fvmo9q.png'

    return (
        <>
            <Link to={'/conectemos'} className="link-hover absolute bottom-8 md:bottom-24 z-[25] scale-75 md:scale-100">
                <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
            </Link>
        </>
    );
}

export default SpinBtn;

