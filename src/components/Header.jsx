import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import logoWhite from "../assets/img/logo-white.svg"
import logoDark from "../assets/img/logo-dark.svg"

const Header = () => {

  const [header, setHeader] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })
  return (
    <header className={`${
      header ? "bg-white py-6 shadow-lg" :"bg-transparent py-8"
    } fixed z-50 w-full transition-all duration-500`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between
      lg:gap-y-0">
        < a href="/">
          {header
            ? (<img  className='w-[160px]' src={logoDark} />)
            : (<img  className='w-[160px]'src={logoWhite} />)
          }
        </a>

        <nav className={`${header ? "text-primary" : "text-white"} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-3[3px] text-[15px]
        items-center uppercase`}>
          <a href="/" className='hover:text-accent transition'>Home</a>
          <a href="" className='hover:text-accent transition'>Rooms</a>
          <a href="" className='hover:text-accent transition'>Restaurant</a>
          <a href="" className='hover:text-accent transition'>Spa</a>
          <a href="" className='hover:text-accent transition'>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header