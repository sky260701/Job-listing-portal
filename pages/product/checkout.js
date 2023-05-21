/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import React ,{useState} from 'react'
import product from '@/models/product'
import mongoose from 'mongoose'
import { useEffect } from "react";

function checkout({products}) {
 const[item ,setItem] = useState()
 const[title ,setTitle]=useState()
 const[price ,setprice]=useState()
  useEffect(() => {
   const currentitem = JSON.parse(localStorage.getItem("data"));
   console.log(currentitem[0].imagesrc)
    setItem(currentitem[0].imagesrc)
    setTitle(currentitem[0].title)
    setprice(currentitem[0].price)
    console.log(item)
  }, ); // 

  return (
   
        <div className="py-8 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
  <div className="flex flex-col justify-start items-start w-full space-y-9">
    <div className="flex justify-center flex-col items-start space-y-2">
      {/* <button className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
        <svg
          className="fill-stroke"
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.91681 7H11.0835"
            stroke="currentColor"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.91681 7L5.25014 9.33333"
            stroke="currentColor"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.91681 7.00002L5.25014 4.66669"
            stroke="currentColor"
            strokeWidth="0.666667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-sm leading-none">Back</p>
      </button> */}
      {/* <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
        Checkout
      </p> */}
      {/* <p className="text-base leading-normal sm:leading-4 text-gray-600 dark:text-white">
        Home &gt; Electronics &gt; Headphones &gt; Cart &gt; Checkout
      </p> */}
    </div>
    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
      <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-start items-center bg-white-100 dark:bg-white-800 py-3 sm:py-0 xl:py-5 px-10 xl:w-full">
        <div className="flex flex-col justify-start items-start w-full space-y-4">
          <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
          {title}
          </p>
          <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
            {price} ₹
          </p>
        </div>
        <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
          <img
            src={item}
            alt="headphones"
          />
        </div>
      </div>
      <div className="p-8 bg-white-100 dark:bg-white-800 flex flex-col lg:w-full xl:w-3/5">
        <button className="border border-transparent hover:border-gray-300 bg-indigo-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-indigo-900 text-white hover:text-white-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full" >
          <div>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327" width={16} height={16} />

          

          </div>
          <div>
            <p className="text-base leading-4"><Link href='./placed'>Pay</Link></p>
          </div>
        </button>
        <div className="flex flex-row justify-center items-center mt-6">
          <hr className="border w-full" />
          <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
            or pay with card
          </p>
          <hr className="border w-full" />
        </div>
        <div className="mt-8">
          <input
            className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Card details
        </label>
        <div className="mt-2 flex-col">
          <div>
            <input
              className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="0000 1234 6549 15151"
            />
          </div>
          <div className="flex-row flex">
            <input
              className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="MM/YY"
            />
            <input
              className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="CVC"
            />
          </div>
        </div>
        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Name on card
        </label>
        <div className="mt-2 flex-col">
          <div>
            <input
              className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              name=""
              id=""
              placeholder="Name on card"
            />
          </div>
        </div>
        {/* <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Country or region
        </label> */}
        {/* <div className="mt-2 flex-col">
          <div className="relative ">
            <button
              id="changetext"
              className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
              type="email"
              name=""
            >
              India
            </button>
            <img
              onclick="showMenu(true)"
              id="closeIcon"
              className="cursor-pointer absolute top-4 right-4 dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg"
              alt="Dropdown"
            />
            <img
              onclick="showMenu(true)"
              id="openIcon"
              className="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden transform rotate-180 dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1.svg"
              alt="Dropdown"
            />
            <img
              onclick="showMenu(true)"
              id="closeIcon"
              className="cursor-pointer absolute top-4 right-4 hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
              alt="Dropdown"
            />
            <img
              onclick="showMenu(true)"
              id="openIcon"
              className="cursor-pointer hidden transform rotate-180 absolute top-4 right-4 hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-1-svg1dark.svg"
              alt="Dropdown"
            />
            <div
              id="dropdown"
              className=" hidden  z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
            >
              <div
                onclick="changeText('China')"
                className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
              >
                China
              </div>
              <div
                onclick="changeText('Russia')"
                className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
              >
                Russia
              </div>
              <div
                onclick="changeText('UK')"
                className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
              >
                UK
              </div>
            </div>
          </div>
          <input
            className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="ZIP"
          />
        </div> */}
        <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-indigo-900 hover:bg-indigo-900 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
          <div>
            <p className="text-base leading-4">Pay {price} ₹</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export async function getServerSideProps(context) {
  if ( !mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MoNGO_URI)
  }
  let products = await product.find({_id : context.query.slug})
         

  return {
    props :{products: JSON.parse(JSON.stringify(products))}
    
  }
}

export default checkout