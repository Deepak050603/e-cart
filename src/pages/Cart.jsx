import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removecartitem } from '../redux/slices/cartslice'

function Cart() {
  const [total,settotal]=useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartArray = useSelector ((state)=>state.cartItem)

  const getTotal =()=>{
    if(cartArray.length>0){
    settotal(cartArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
    }
  }

  const handleCheckout =()=>{
    alert('order placed succesfully')
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
},[cartArray])
  return (
  <>
      <div className='pt-32'>
       <h1 className='text-center text-4xl text-violet-900'>Cart</h1>

       {cartArray?.length?<div className='md:grid grid-cols-[2fr_1fr] my-10'>
        <div className=" md:py-5 md:px-20 p-3">
          <table className='w-full'>
            <thead>
              <tr>
                <th className='border border-gray-100 bg-gray-400 p-3 text-white'>#</th>
                <th className='border border-gray-100 bg-gray-400 p-3 text-white'>title</th>
                <th className='border border-gray-100 bg-gray-400 p-3 text-white'>image</th>
                <th className='border border-gray-100 bg-gray-400 p-3 text-white'>price</th>
                <th className='border border-gray-100 bg-gray-400 p-3 text-white'>action</th>
              </tr>
            </thead>
            <tbody>
            {cartArray.map((item,index)=>(
                 <tr>
                 <td className='border border-gray-100 p-3'>{index+1}</td>
                 <td className='border border-gray-100 p-3'>{item?.title.slice(0,15)}</td>
                 <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="" style={{width:'100px',height:'100px'}} /></td>
                 <td className='border border-gray-100 p-3'>{item?.price}</td>
                 <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removecartitem(item?.id))} className='bg-red-600'><FontAwesomeIcon icon={faTrash} /></button></td>
               </tr>
            )) 
          }
            </tbody>
          </table>
        </div>
        <div className="pt-5 px-10">
          <div className="p-5 shadow-lg">
            <h1 className='text-center text-3xl'>cart summary</h1>
            <p className='mt-4 text-xl'>Total no of products : {cartArray?.length}</p>
            <p className='mt-2 text-xl'>Grand total : ${total}</p>
            <button  onClick={handleCheckout} className='w-full bg-green-500 p-3 mt-4 text-white hover:bg-white hover:text-green-500 hover:border hover:border-green-500 '>checkout</button>
          </div>
        </div>
       </div>
          :
       <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div className='flex justify-center items-center flex-col my-10'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.likjkXqluA_3rWz-pyRf8QHaEX&pid=Api&P=0&h=180" alt="" className='w-full h-80' />
        <p className='text-violet-800 text-3xl'>Your cart is empty</p>
        <Link to={'/'}><button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back home</button></Link>
      </div>
      <div></div>

    </div>}

      </div>
  </>
  )
}

export default Cart
