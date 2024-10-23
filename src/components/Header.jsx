import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { wishlistSlice } from '../redux/slices/wishlistslice'



function Header() {
  const WishlistArray = useSelector((state)=>state.Wishlist)

  const cartArray = useSelector ((state)=>state.cartItem)


  const [show,steshow]=useState(false)
  const change =()=>{
    steshow(!show)
  }
  return (
    <div className='bg-violet-900 w-full text-white p-5  md:flex justify-between items-center fixed top-0'>
      <div className='flex w-full px-5'>
       <Link to={'/'}> <h1 className='text-3xl '><FontAwesomeIcon className='me-2' icon={faCartShopping} />Ecart</h1></Link>
        <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
        </div>

       {show && <div className='md:hidden mt-4 flex'>
     <Link to={'/wishlist'}> <button className=' flex items-center ms-2 p-3 rounded border hover:bg-white hover:text-violet-900 border-white '><FontAwesomeIcon icon={faHeart} className='me-2' style={{color: "#de2417",}} />Whishlist <span className='px-2 bg-slate-400 border-slate-500 rounded ms-2'>{WishlistArray?.length}</span></button></Link>
      <Link to={'/cart'}><button className='ms-2 flex items-center p-3 rounded border hover:bg-white hover:text-violet-900 border-white '><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color: "#258a24",}} />Cart <span className='px-2 bg-slate-400 border-slate-500 rounded ms-2'>{cartArray?.length}</span></button></Link>
      </div>}

      <div className='md:flex ms-auto hidden'>
     <Link to={'/wishlist'}> <button className=' flex items-center me-4 p-4 rounded border hover:bg-white hover:text-violet-900 border-white '><FontAwesomeIcon icon={faHeart} className='me-2' style={{color: "#de2417",}} />Whishlist <span className='px-2 bg-slate-400 border-slate-500 rounded ms-2'>{WishlistArray?.length}</span></button></Link>
      <Link to={'/cart'}><button className='me-4-2 flex items-center p-4 rounded border hover:bg-white hover:text-violet-900 border-white '><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color: "#258a24",}} />Cart <span className='px-2 bg-slate-400 border-slate-500 rounded ms-2'>{cartArray?.length}</span></button></Link>
      </div>
    </div>
  )
}

export default Header
