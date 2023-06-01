import React, { useEffect } from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

const bag = () => {
  const [products,setproducts]=useState([])
  const [query,setquery]=useState('Frock')
  
  useEffect(()=>{
    const data={query}
    axios.post('/api/serverside/tshirt',data).then(res=>{
      console.log(res.data)
      setproducts(res.data)
    })
  },[])

 
  
  return (
    <>
   
    <div>
        <section className="text-gray-600 body-font ">
    <div className="container px-5 py-12 md:py-8 mx-auto">
      <div className="flex flex-wrap -m-4">
      {Object.keys(products).length===0 && <p>Sorry! currently the stock is unavailable. It will soon restock please stay tunned !</p>}
        {Object.keys(products).map((P)=>{
         return <div key={products[P]._id} className="lg:w-1/5  mx-6 mb-4 md:w-1/2 p-4 w-full shadow-2xl   ">
        <Link passHref={true} href={`/product/${products[P].slug}`}>
          <div className="block relative h-70 rounded overflow-hidden">
            <img alt="ecommerce"  className="md:h-[50vh] md:w-[40vh]    object-cover block h-[30vh] m-auto  " src={products[P].image}/>
            
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{products[P].title}</h2>
            <p className="mt-1">Rs{products[P].price}</p>
            <div className="mt-1">
            {products[P].size.includes('S')   && <span className='border border-gray-300 mx-1 px-1'>S</span>}
            {products[P].size.includes('M')   && <span className='border border-gray-300 mx-1 px-1'>M</span>}
            {products[P].size.includes('L')   && <span className='border border-gray-300 mx-1 px-1'>L</span>}
            {products[P].size.includes('XL')  && <span className='border border-gray-300 mx-1 px-1'>XL</span>}
            {products[P].size.includes('XXL') && <span className='border border-gray-300 mx-1 px-1'>XXL</span>}
            {products[P].size.includes('A') && <span className='border border-gray-300 mx-1 px-1'>Adjustable</span>}
            {products[P].size.includes('U') && <span className='border border-gray-300 mx-1 px-1'>Unstitch</span>}
            {products[P].size.includes('ST') && <span className='border border-gray-300 mx-1 px-1'>Standard</span>}
            </div> 
            <div className="mt-1">
            {products[P].color.includes('red') && <button className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
            {products[P].color.includes('black')   && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('blue')  && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('pink')  && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('yellow')  && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('brown')  && <button className="border-2 border-gray-300 ml-1 bg-amber-700 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('white')  && <button className="border-2 border-gray-300 ml-1 bg-white-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('orange')  && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('green')  && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('purple')  && <button className="border-2 border-gray-300 ml-1 bg-purle-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('maron')  && <button className="border-2 border-gray-300 ml-1 bg-red-800 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('silver')  && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('purple')  && <button className="border-2 border-gray-300 ml-1 bg-purple-800 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('lpurple')  && <button className="border-2 border-gray-300 ml-1 bg-purple-400 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('gray')  && <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('dgreen')  && <button className="border-2 border-gray-300 ml-1 bg-green-800 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('tan')  && <button className="border-2 border-gray-300 ml-1 bg-amber-600 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('lyellow')  && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('rose')  && <button className="border-2 border-gray-300 ml-1 bg-rose-400 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('lpink')  && <button className="border-2 border-gray-300 ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('dblue')  && <button className="border-2 border-gray-300 ml-1 bg-blue-800 rounded-full w-6 h-6 focus:outline-none"></button>}


             </div> 
          </div>
          </Link>
        </div>
        })}
       
      </div>
    </div>
    
    
  </section>
  </div>

  
  {/* PAGINATION   */}
  
  </>
  )
}
// export async function getServerSideProps(context) {
//   if(!mongoose.connections[0].readyState){
//     await mongoose.connect(process.env.MONGO_URI)
    
//   }
//   let {page,limit}=context.query;
//     if(!page) page=1;
//     if(!limit) limit=10;
//     const skip= (page-1)*2;
//   let products = await Product.find({ category : context.query.category})
//   products.reverse()
//   let Tshirts={}
//   for(let item of products){
//     if(item.title in Tshirts){
//       if(!Tshirts[item.title].color.includes(item.color) && item.AvailableQty>0){
//         Tshirts[item.title].color.push(item.color)
        
//       }
//       if(!Tshirts[item.title].size.includes(item.size) && item.AvailableQty>0){
//         Tshirts[item.title].size.push(item.size)
        
//       }

//     }
//     else{
//       Tshirts[item.title]=JSON.parse(JSON.stringify(item))
//       if(item.AvailableQty>0){
//         Tshirts[item.title].color =[item.color]
//         Tshirts[item.title].size =[item.size]
//       }
//       else{
//         Tshirts[item.title].color =[]
//         Tshirts[item.title].size =[]
//       }

//     }
//   }
        
  
//   return {
//     props: {products:JSON.parse(JSON.stringify(Tshirts))}, // will be passed to the page component as props
//   }
// }

export default bag