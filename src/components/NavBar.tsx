'use client'
import React from 'react'
import { Music4} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Command from '@/components/command';
import { RectangleGoggles } from 'lucide-react';



const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/more', label: 'More' },
    { href: '/book-call', label: 'Book a Call' }
  ];

  return (
    <>
    <div className="flex fixed inset-x-0 z-100 top-0 justify-between px-30 pt-8 items-center backdrop-blur-xs ">
                   <RectangleGoggles className="w-10 h-10 text-white mb-5  p-2 rounded-full text-shadow-white-200" />

        <div className="flex gap-1 z-100 text-sm items-center rounded-full p-1 px-2  bg-white/10 backdrop-blur-xl shadow-lg">

            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`text-white hover:bg-backdrop-blur-md relative transition-all p-2 px-4 duration-200 ${
                  pathname === item.href 
                    ? ' after:content-[""] after:absolute after:top-[-10px] after:left-[50%] after:translate-x-[-50%] after:w-[80%] after:h-[4px] after:bg-white after:rounded-full after:text-shadow-[0 0 10px #fff] backdrop-blur-md p-1 px-2 rounded-full glow'
                    : ''
                } ${ "/book-call" === item.href
                    ? '  backdrop-blur-md p-1 px-2 rounded-full glow'
                    : ''
                }`}
                
              >
                {item.label}
              </Link>
            ))}

        </div>
        <Command />
    </div>
    </>
  )
}

export default NavBar