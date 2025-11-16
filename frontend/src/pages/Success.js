import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import SummaryApi from '../common';
import { useEffect } from 'react';
import Context from '../context';
import { useContext } from 'react';
// import { Link } from 'react-router-dom'

const Success = () => {
const { fetchUserAddToCart } = useContext(Context);
 const deleteCartAllProduct = async () => {
  const response = await fetch(SummaryApi.deleteCartAllProduct.url, {
    method: SummaryApi.deleteCartAllProduct.method, // Use the correct method here
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();
  return responseData;
};

  useEffect(() => {
  const clearCartAfterPayment = async () => {
    await deleteCartAllProduct();
  

   if (fetchUserAddToCart) {
        await fetchUserAddToCart();
      } else {
        console.error("fetchUserAddToCart is not defined in context.");
      }
    }
  clearCartAfterPayment();
}, [fetchUserAddToCart]);

  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <img
        src={SUCCESSIMAGE}
         width={150}
        height={150}
      />
      <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
      {/* <Link to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link> */}
    </div>
  )
}
 export default Success
