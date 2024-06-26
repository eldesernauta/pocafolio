const loader = require('../../img/loader.gif')

function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-dark-purple-goo via-[#0D1623] to-[#0A0118]">
            <img
                src={loader}
                alt="loader incruster"
            /> </div>
    );
}

export default Loading;