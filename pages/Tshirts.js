import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Paginator from '../components/Paginator'

const Tshirts = () => {
  const router=useRouter()
  
  
 const path=router.query.page
 const Nextpage= parseInt((router.query.page)+1)
 
  
  return (
    <>
   <Paginator/>
  
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
//   let products = await Product.find({ category : 'earrings'}).skip(skip).limit(limit)
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

export default Tshirts