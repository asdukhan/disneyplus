import React from 'react'
import {signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'


import Image from 'next/image'
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid';
// import { signIn } from 'next-auth/react'

function Header() {
  const {data: session } = useSession();
  const router = useRouter();

  console.log("session" , session)

  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] 
    flex items-center px-10 h-[72px] md:12-px'>
        <Link href='/'><Image src="/images/logo.svg"   alt="image" width={80} height={80}
        className="cursor-pointer "/></Link>

        <div className=' hidden ml-10 md:flex items-center   space-x-6'>
            <a className='header-link group'>
                <HomeIcon className="h-4"/>
                <Link href="/"><span className='span'>Home</span></Link>
            </a>
            <a className='header-link group'>
                <SearchIcon className="h-4"/>
                <span className='span'>Search</span>
            </a>
            <a className='header-link group'>
                <PlusIcon className="h-4"/>
                <span className='span'>Watchlist</span>
            </a>
            <a className='header-link group'>
                <StarIcon className="h-4"/>
                <span className='span'>originals</span>
            </a>
            <a className='header-link group'>
                <Image src="/images/movie-icon.svg"  alt="image" className="h-4" layout='fill'/>
                <span className='span'>movies</span>
            </a>
            <a className='header-link group'>
                <Image src='/images/series-icon.svg'  alt="image" className="h-4" layout='fill'/>
                <span className='span'>Series</span>
            </a>
        </div>
        {session ? <button className='ml-auto uppercase border px-2 py-1.5 rounded font-medium
        tracking-wide hover:text-black hover:bg-white transition duration-200'  onClick={() => signOut()}>LogOut</button> : 
        <button className='ml-auto uppercase border px-2 py-1.5 rounded font-medium
        tracking-wide hover:text-black hover:bg-white transition duration-200'onClick={() => {
          router.push("/api/auth/signin")
         }}
        
        >login</button>

      }
    </div>

  )
}

export default Header