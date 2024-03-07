'use client'

import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  // if(status === 'loading') return null;
  const queryString = `?name=&age=&activeStatus=0&sort=id&order=asc`;

  return (
    <div className='flex bg-slate-200 p-4 space-x-3'>
        <Link href='/' className='mr-3'>Next.js</Link>
        <Link href={`/users${queryString}`}>Users</Link>
    </div>
  )
}

export default NavBar