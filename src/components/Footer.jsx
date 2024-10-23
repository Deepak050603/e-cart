import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 text-white md:p-10 p-5 w-100 md:grid md:grid-cols-[repeat(1,2fr_1fr_1fr_2fr)]'>
      <div className=' p-2'>
        <h1 className='text-[30px]'><FontAwesomeIcon icon={faCartShopping} /> E-cart</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed enim saepe eos aperiam perferendis facere. Tempore ad quis sed, id, architecto similique rem fuga veritatis doloribus, aliquam ullam quaerat.</p>
      </div>
      <div className='p-2 flex md:justify-center'>
        <div>
          <h1 className='text-[30px]'>Links</h1>
         <Link to={'/'}> <li className='list-none md:mt-5 mt-2'><a href=""></a>Home</li></Link>
         <Link to={'/wishlist'}> <li className='list-none mt-2'><a href=""></a>Wishlist</li></Link>
         <Link to={'/cart'}> <li className='list-none mt-2'><a href=""></a>Cart</li></Link>
        </div>
      </div>
      <div className=' p-2 flex md:justify-center'>
      <div>
        <h1 className='text-[30px]'>Guides</h1>
          <li className='list-none md:mt-5 mt-2'><a href=""></a>React</li>
          <li className='list-none mt-2'><a href=""></a>React Bootstrap</li>
          <li className='list-none mt-2'><a href=""></a>Bootswatch</li>
      </div>
      </div>
      <div className=' p-2 md:px-16'>
        <h1 className='text-[30px]'>Contact Us</h1>
        <div className='flex md:mt-5 mt-2'>
          <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2.5' placeholder='Email Id' />
          <button className='ms-2 p-2.5 rounded-md hover:bg-orange-500 bg-orange-600'>Subscribe</button>
        </div>
        <div className='flex mt-3 text-[25px] justify-between'>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  )
}

export default Footer
