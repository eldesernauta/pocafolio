
const text = require('../../img/circle-text.png')
const separator = require('../../img/separator.png')

const SpinBtn = () => {


    return (
        <>
            <div className="absolute bottom-24 z-[999]">
                <img src={text} alt="ejecutemos una gran idea" className='w-[200px] animate-spin-slow' />
                <img src={separator} alt="icono" className='z-[99] absolute top-[38%] left-[42%]' />
            </div>
        </>
    );
}

export default SpinBtn;

