import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      {/* <footer className="text-gray-600 md:ml-1 -ml-6 hover:text-pink-500 body-font footer Footer border-t-2 border-pink-500     "> */}
    <div className="container bg-back px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <Link href={'/'}  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
          <Image src="/l3.png" width={100} height={50} alt='zainyswear' className="w-26 h-20 text-white p-2  rounded-full" >
          </Image> 
        
          <span className=" hover:text-pink-500 ml-1 text-xl">Zainy's Wear</span>
        </Link>
        <p className="mt-2 text-sm text-gray-500">If you are a true programmer then you need to wear the code alway ! Order now your code from Zainy'sWear</p>
        <p className="mt-2 text-sm text-pink-500">&lt;Wear-The-Code&gt;</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 md:mx-0 mx-36 w-fullmx-10 px-4">
          <h2 className="title-font font-medium  text-gray-900 tracking-widest text-sm mb-3">Shop</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/tshirt'}  className="text-gray-600  hover:text-pink-500">tshirts</Link>
            </li>
            <li>
              <Link href={'/hoodies'}  className="text-gray-600 hover:text-pink-500">hoodies</Link>
            </li>
            <li>
              <Link href={'/mugs'}  className="text-gray-600 hover:text-pink-500">mugs</Link>
            </li>
            <li>
              <Link href={'/jackets'}  className="text-gray-600 hover:text-pink-500">jackets</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full mx-10 px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Customer service</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/about'}  className="text-gray-600 hover:text-pink-500">About us</Link>
            </li>
            <li>
              <Link href={'/Contact'}  className="text-gray-600 hover:text-pink-500">Contact us</Link>
            </li>
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-pink-500">Shipping</Link>
            </li>
           
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full mx-10 px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-pink-500">Private policy</Link>
            </li>
            <li>
              <Link href={'/'}  className="text-gray-600 hover:text-pink-500">Payment method</Link>
            </li>
          </nav>
        </div>
       
      </div>
    </div>
    <div className="bg-gray-100 border-t-2 border-gray-300 ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Zainy'sWear.com — All Rights Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link href={'/'}  className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link> 
          <Link href={'/'}  className="ml-3 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
            <Link href={'/'}  className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link> 
          <Link href={'/'}  className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  {/* </footer> */}
  </div>
  )
}

export default Footer