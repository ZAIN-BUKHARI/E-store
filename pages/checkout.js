import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
// import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import Table from '../components/Table'
import Button from '../components/Button'
import Center from '../components/Center'
import Input from '../components/Input'


const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const Checkout = ({cart,clearCart,  AddToCart,removeFromCart,subTotal}) => {
  const form = useRef();
  const router=useRouter()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  // const [disabled, setDisabled] = useState(true)
  const [cash, setCash] = useState(false)
  const [hide, setHide] = useState(true)
  const [disabled2, setDisabled2] = useState(true)
  const [matching, setMatching] = useState('')
  
  


  
  const selectionColor = (e) =>{
    e.preventDefault()
       setCash(true)
       setDisabled2(false)
  }
  const Cancel = () =>{
    setHide(false)

    

  }
  const  Modal = () =>{
    setHide(true)
  }
  
  const Capital = (word) =>{
    return word[0].toUpperCase()+ word.slice(1)
   // return word.charAt(0).toUpperCase()+ word.slice(1)
   
  
}

const Change = async (e) =>{
  if(e.target.name=='name'){
   setName(e.target.value)
 }
 else if(e.target.name=='address'){
   setAddress(e.target.value)
 }
 else if(e.target.name=='phone'){
   setPhone(e.target.value)
   
 }
 else if(e.target.name=='city'){
   setCity(e.target.value)
 }
}

  const submitForm = async  (e) =>{
    e.preventDefault()
    
    const data = {email,cart,subTotal,name,email,phone,address,city}
    let response =  await fetch(`/api/order`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    if(a.success){
      clearCart()
       toast.success('Order Placed!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        router.push((`/MyOrder?id=`+a.redirect._id))
        
    }
    else if(a.error){
      clearCart()
      setHide(true)
      toast.error(a.error, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  
  
    
  }
  

   useEffect(()=>{
    const  getUserdata= async()=>{

   
    let response =  await fetch(`/api/getUserdata`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({token:localStorage.getItem('token')})
    })
    let a = await response.json()
    
    setName(a.success.name)
    setPhone(a.success.phone)
    setAddress(a.success.address)
    setCity(a.success.city)
    setEmail(a.success.email)
  }
  getUserdata()

},[])

const addresssubmit = async  (e) =>{
  e.preventDefault()
  if(name.length>=3 && phone.length>=8 && address.length>=6 && city.length>=4){
  const data = {address,phone,city,name,token:localStorage.getItem('token')}
  let response =  await fetch(`/api/accountsetting`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  let a = await response.json()
  if(a.success){
     toast.success('successfully updated!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else if(a.error){
    toast.error(a.error, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }
}else{
  toast.error('Fill form correctly', {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
   
  
}
 
  return (
    <>
    
    

     <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {/* {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )} */}
            {cart && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className=''>Quantity</th>
                    <th >Variant</th>
                    {/* <th className=''>Size</th> */}
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cart).map(K => (
                    <tr key={cart[K]._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={cart[K].image} alt=""/>
                        </ProductImageBox>
                        {cart[K].name.slice(0,15)}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={()=>{removeFromCart(K,1,cart[K].price,cart[K].name,cart[K].size,cart[K].variant)}}>-
                        
                        </Button>
                        <QuantityLabel>
                        {cart[K].qty}
                        </QuantityLabel>
                        <Button onClick={()=>{AddToCart(K,1,cart[K].name,cart[K].price,cart[K].size,cart[K].variant)}}>+
                        
                          </Button>
                      </td>
                      <td>
                      <div className={`border-2 border-gray-300 ml-1 bg-${cart[K].variant}-500 rounded-full w-6 h-6 focus:outline-none text-center  pl-[2px]`}>{cart[K].size}</div>
                      </td>
                      {/* <td>
                        {cart[K].size}
                      </td> */}
                      <td>
                        {cart[K].price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${subTotal}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {cart && (
            <Box>
              <h2>Order information</h2>
              <Input type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={Change} 
                     />
              <Input type="text"
                     placeholder="Email"
                     value={email}
                     name="email"
                    //  onChange={ev => setEmail(ev.target.value)}
                     />
              <CityHolder>
                <Input type="text"
                       placeholder="City"
                       value={city}
                       name="city"
                       onChange={Change}
                       />
                {/* <Input type="text"
                       placeholder="Postal Code"
                       value={postalCode}
                       name="postalCode"
                       onChange={ev => setPostalCode(ev.target.value)}
                       /> */}
              </CityHolder>
              <Input type="text"
                     placeholder="Street Address"
                     value={address}
                     name="address"
                     onChange={Change}
                     />
              <Input type="number"
                     placeholder="Phone no"
                     value={phone}
                     name="phone"
                     onChange={Change}
                     />
              <Button black block className='mb-2'
                      onClick={addresssubmit}>
                 Save address
              </Button>
              <Button black block
                      onClick={submitForm}>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
     </>
      

    
  )
}

export default Checkout



// <div  className='container px-2 sm:m-auto'>
//        <h1 className='font-bold text-3xl my-8 text-center text-pink-500 '>Checkout</h1>
//        <h2 className='text-xl font-semibold'>1.Address details</h2>
      
//       <p className='pl-10 pt-5'>Go to account section to fill address form</p>
//       <div className='flex justify-center' >
//         <Link href={'/myaccount'} className='text-center' ><button className='flex mx-2 w-20 mb-4 text-white bg-pink-500 border-0 py-2  px-3 focus:outline-none hover:bg-pink-600 rounded text-sm'>Address</button></Link>

//       </div>


//       <h2 className='text-xl font-semibold'>2. Review cart items</h2>

//       <div  className=' cart  bg-pink-100 p-10  px-8 '> 
//           <ol className='list-decimal font-semibold'>
//             {Object.keys(cart).length==0 && <div className='mb-2 mt-2'>No! Items in the cart </div>}
//             {Object.keys(cart).map((K)=>{ 
//     return  <li  key={K}  >
//               <div className='md:flex inline-table my-5 text-center   '>
//                 <div className=' font-bold  md:w-40 '>{cart[K].name}</div>
//                 <div className='flex items-center font-semibold justify-center  md:w-1/2  text-sm '><AiOutlinePlusCircle  onClick={()=>{AddToCart(K,1,cart[K].name,cart[K].price,cart[K].size,cart[K].variant)}}  className='text-pink-500 cursor-pointer'/><span className='mx-2'>{cart[K].qty} </span><AiOutlineMinusCircle  onClick={()=>{removeFromCart(K,1,cart[K].price,cart[K].name,cart[K].size,cart[K].variant)}}  className='text-pink-500 cursor-pointer' /></div>
//                 <div className='subtotal   md:w-20 '>Price {cart[K].price}</div>
//                 <div className='subtotal mx-32   md:w-28'>Size '{cart[K].size}'</div>
//                 <div className='subtotal mx-10  md:w-40 '>Variant '{Capital(cart[K].variant)}'</div>
//               </div>
//                 <div className='bg-white h-1 flex flex-col w-50'></div>
//             </li> 
//             })}  



//             <div className='subtotal font-bold py-3  text-black'>Subtotal : Rs{subTotal}</div>
//           </ol>
          
//         </div>
//           <div className='mx-4 mt-2 mb-2'>
//           <Link href={'/checkout'}>
//             <button  onClick={Cancel}  className=" flex mx-2 w-20 mb-4 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><AiFillShopping className='mt-[3px] mr-[2px]' />₨ Pay</button>
//             </Link>
//           </div>
//     </div>
//     <div href={'#'}  className={`${hide==true?'invisible':'visible'} md:relative md:top-[-640px] relative top-[-700px]   right-50  `}>
//     <div   className=" container px-5 py-12   md:absolute md:right-[500px]  flex">
//       <div className="lg:w-1/4 md:w-1/2 bg-white border-2 absolute right-[-0px] top-20  border-pink-500 rounded-lg p-8 flex flex-col md:ml-auto w-[250px] h-[500px] mr-[60px] md:mr-[-10px]   md:mt-0 md:relative z-10 shadow-md">
//       <button onClick={Modal} className=' flex justify-end text-pink-400 text-2xl'>X</button>
//         <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">  Payment method</h2>
//         <p className="leading-relaxed mb-5 text-gray-600">currently available payment methods </p>
  
//         <button onClick={selectionColor} disabled={cash}  className='disabled:border-pink-500  text-3xl py-10 mb-8 border-2 border-rounded rounded-2xl'>Cash on Delivery</button>
//          <Link href={`#`}><button   disabled={disabled2} onClick={submitForm} method='POST'   className={`text-white  disabled:bg-pink-300  bg-pink-500 md:mt-20 mt-5 border-0 py-2 px-6  focus:outline-none  ${cash==false?disabled2:''} hover:bg-pink-600 rounded text-lg`}>Proceed</button></Link>
//         <p className="text-xs text-gray-500 mt-3">www.Zainy'sWear.com !  enjoy your shopping.</p>
//       </div>
//      </div>
//      </div>