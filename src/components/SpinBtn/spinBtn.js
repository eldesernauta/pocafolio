import { Link } from 'react-router-dom';

const text = require('../../img/circle-text.png')
const separator = require('../../img/separator.png')

const SpinBtn = () => {

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

