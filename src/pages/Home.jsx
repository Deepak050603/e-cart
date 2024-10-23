import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetch from '../hooks/usefetch'
import { useDispatch } from 'react-redux'
import { addWishlistitem } from '../redux/slices/wishlistslice'
import { addItemToCart } from '../redux/slices/cartslice'


function Home() {
  
 const data = useFetch('https://fakestoreapi.com/products')
 
 const dispatch = useDispatch()
 
 
  return (
    <div className='mt-40 mb-10 px-10 md:grid grid-cols-4'>
 {  data?.length>0 && data?.map((item)=>(
   <div className=" p-2">
   <div className="p-3 shadow rounded">
     <img src={item?.image} alt="" className='w-full h-72'/>
     <h4 className='text-center text-2xl'>{item?.title.slice(0,15)}</h4>
     <p>{item?.description.slice(0,100)}</p>
     <p className='text-2xl'>Price <span className='text-violet-600'>${item?.price}</span></p>
     <div className='flex justify-between mt-4'>
         <button onClick={()=>dispatch(addWishlistitem(item))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
         <button onClick={()=>dispatch(addItemToCart(item))} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
     </div>
   </div>
 </div>
 ))  }
    </div>
  )
}

export default Home
