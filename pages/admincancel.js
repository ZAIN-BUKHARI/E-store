import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from 'react';
import { useState } from 'react';
import mongoose from 'mongoose'
import Order from '../models/Order'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


const admincancel = (admin) => {
  const orders=admin.order
  const [Marked,setMarked]=useState('')
  const router=useRouter()
  

  const handleChange=async(e)=>{

    if(e.target.name=='Marked'){
      setMarked(e.target.value)
  }
}
  const submit=async(_id)=>{
    const data = {_id,Marked}
    await axios.post('/api/Admin/delivered',data).then(res=>{
        if(res){
          router.push('/admincancel')
        }
    })
}
    return (
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
    
    { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only z-wear admins allow here</h1>}
      { admin.admin.value &&  <FullLayout>
       
     <div>
        <div className='container mx-auto  '>
            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
            <h1 className='font-bold text-3xl p-8 text-pink-500 text-center' >Cancel Orders History</h1>
        <table className="min-w-full">
          <thead className="border-b">
            <tr className='border-pink-300 border-b'  >
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #OrderID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Phone
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                City
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Details
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Address
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Submit
              </th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(orders).reverse().map((items)=>{
               return <tr key={orders[items]._id} className="border-b border-pink-300">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].OrderId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].phone}</td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
                {orders[items].email}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
              {orders[items].subTotal}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
              {orders[items].city}
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link href={`/MyOrder?id=`+ orders[items]._id}>Details</Link>
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  {orders[items].createdAt.slice(0,10)}
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  {orders[items].address}
              </td>
              <td>
              <select value={Marked}  onChange={handleChange} name='Marked'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
              
                   <option value={'cancel'}>Cancel</option>
                  <option value={'pending'}>Pending</option>
                   <option value={'marked'}>Marked</option>
                   <option value={'delivered'}>Delivered</option>
              </select>
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  <button onClick={()=>{submit(orders[items]._id)}} className={`text-black bg-white border-2 p-2 rounded-full ${orders[items].status=='done'?'bg-green-500 ':'border-red-300'}`} >Update status</button>
              </td>
             
            </tr  >
            })}
           
           
            

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
        </FullLayout>}
        </ThemeProvider>
      );
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let order = await Order.find({status:'cancel'})
  
    
    

  
        
  
  return {
    props: {order:JSON.parse(JSON.stringify(order))}, // will be passed to the page component as props
  }
}


export default admincancel

