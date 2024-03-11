import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navigationbar()  {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const navItems = [
        { id: 1, text: 'Blog' },
        { id: 2, text: 'Quienes Somos' }
    ]

    return (
        <div className='bg-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-cyan-800 text-sm'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#df8600]'>
        <img className="h-16 w-24" src='/assets/logo.jpeg' alt="patrimonio select logo" />
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#df8600] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </li>
        ))}
      </ul>
    

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[40%] bg-white ease-in-out duration-500 z-20 rounded-b-xl'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='sm:w-full text-3xl font-bold text-[#df8600] m-4 '>
            <img className='h-16 w-24 flex items-center justify-center' src='/assets/logo.jpeg' alt="patrimonio select logo" />
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#df8600] duration-300 hover:text-black cursor-pointer border-gray-600 bg-slate-100'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    )

}