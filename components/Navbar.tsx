import React from 'react'
import Link from 'next/link'

const navIcon = [
  {src:'/assets/icons/search.svg', alt: "search",},
  {src:'/assets/icons/black-heart.svg', alt: "heart",},
  {src:'/assets/icons/user.svg', alt: "user",}
]
const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href={'/'} className='flex item-center gap-1'>
        <img src="/assets/icons/logo.svg" alt="logo" width={27} height={27} />
        <p className='nav-logo'>
          Price <span className='text-primary'>Wise</span>
        </p>
        </Link>
        <div className='flex items-center gap-5'>
          {navIcon.map((icon)=>(
            <img src={icon.src}  key={icon.alt} alt={icon.alt} width={28} height={28} className='object-contain' />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar