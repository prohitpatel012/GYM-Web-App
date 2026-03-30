import Link from 'next/link'
import React from 'react'

export default function Header() {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '#pricing' },
    ]

    return (
        <div className='max-w-7xl mx-auto py-4 px-2 overflow-x-auto flex items-center justify-between'>
            <div className='flex gap-6'>
                {
                    navigation.map((nav) => (
                        <div key={nav.name} >
                            <Link href={"/"} className='px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white font-semibold text-sm shadow-md shrink-0 '>
                            {nav.name}
                            </Link>
                        </div>
                    ))
                }
            </div>

           <div className="px-5 py-2 rounded-md border border-lime-400 text-lime-400 
hover:bg-lime-400 hover:text-black transition duration-200 cursor-pointer">
    Login
</div>
        </div>
    )
}