import logo from '../assets/mosque.svg'

const Navbar = () => {
    return (
        <div className='w-full md:px-64 p-4 bg-slate-500 flex justify-between items-center'>
            <div className='flex cursor-pointer font-medium text-xl items-center'>
                <img src={logo} alt="mosque" className='h-8 pr-1' />
                Lema Bektoh
            </div>
            <div>Inpo</div>
        </div>
    )
}

export default Navbar