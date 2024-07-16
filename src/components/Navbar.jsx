import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex gap-3 items-center dark:bg-gray-600 justify-center bg-emerald-400 p-2'>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
      {/* Add more NavbarItems if needed */}
    </div>
  )
}
