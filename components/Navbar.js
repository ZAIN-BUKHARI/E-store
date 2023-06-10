import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowDown } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';
import styled from 'styled-components'
const Media = styled.div`
font-size:20px;
@media (max-width: 768px) {
  font-size:15px;
}
`;
const Navbar = ({logout, user ,clearCart, cart, AddToCart, removeFromCart, subTotal }) => {
  const [drop, setDrop] = useState({value:false})
  // USER LI DROP DOWN
  const onMouseOver = () =>{
    if(drop.value==false){
    setDrop({value:true})
    }
    else{
      setDrop({value:false})
    }
    
  }
  const onMouseLeave= () =>{
    setDrop({value:false})
  }
  const Capital = (word) =>{
    return word[0].toUpperCase()+ word.slice(1)
}

 
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div  className=" py-2 shadow-gray-600 md:h-[70px] h-[100px] bg-white shadow-md sticky z-10 top-0 flex md:justify-start  md:text-xl md:flex-row flex-col items-center justify-between">
      <div className="logo mx-5  ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
        { user.value && <Link  href={"/"}> <img alt="zwear" width={70} height={50} className='text-white rounded-full ' src="/zwearlogo.png"/></Link>}
        { !user.value && <Link href={"/"}> <img alt="zwear" width={70} height={50} className='text-white rounded-full ' src="/zwearlogo.png"/></Link>}
        
        
      </div>
      <div className="nav font-serif text-bg-black  ">
        <Media className=" space-x-6 md:space-x-10   font-bold flex    items-center  ">
          
            <Link href={`/product?category=3pcs`}><li className="flex hover:text-gray-600  " 
            
            >
            3pcs 
            </li>
            </Link>
            
          
          
            <Link href={'/product?category=2pcs'}><li className="flex cursor-pointer  hover:text-gray-600" 
            
            >
            2pcs
            </li></Link>
        
          
            <Link href={'/product?category=Frock'} ><li className="flex cursor-pointer  hover:text-gray-600" 
           
            >
              Bags
            </li></Link>
          
          
            <Link href={'/product?category=unstitch'}><li className="flex hover:text-gray-600" 
        
            >
              Unstitch
            
            </li></Link>
            <Link href={'/product?category=plazo'}><li className="flex hover:text-gray-600" 
        
            >
              Plazo
            </li></Link>
        
        </Media>
      </div>

      <div className="cart absolute right-0 top-2 items-center mx-5 flex my-3 ">
        { drop.value == true && <div  onMouseLeave={onMouseLeave} className="absolute right-8 bg-white   top-10 rounded-md px-5 w-36 ">
          <ul>
            
           <Link href={'/AllOrders'}> <li className="py-2 hover:text-white hover:p-2 text-black cursor-pointer font-bold text-sm">Orders</li></Link>
           <hr className=""/>
           {/* <Link href={'/myaccount'}> <li className="py-2 hover:text-white hover:p-2 text-black cursor-pointer font-bold text-sm">Accounts</li></Link>
           <hr className=""/> */}
            <li onClick={logout} className="py-1 font-bold cursor-pointer hover:p-2 hover:text-white text-sm">Log out</li>
            <hr className="py-2"/>
          </ul>
        </div>}

        {user.value  && <MdAccountCircle onClick={onMouseOver}  className="text-xl    md:text-3xl  cursor-pointer mx-4"></MdAccountCircle>}
        {!user.value &&<Link href={'/login'}> <button className=" px-2 py-1 rounded-md text-xl   md:text-2xl  mx-2  text-black"><AiOutlineLogin/></button></Link>}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl  md:text-3xl cursor-pointer"
        />
      </div>
      <div
        ref={ref}
        className=" md:w-[450px] h-[100vh] cart overflow-y-auto absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform px-8 translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-black cursor-pointer text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="mb-2 mt-2">No! Items in the cart </div>
          )}
          {Object.keys(cart).map((K) => {
            return (
              <>
              <li key={K}>
                <div className="flex my-5 font-serif">
                  
                  
                 {cart[K].size && cart[K].variant && <div className="w-2/3 pt-3 font-normal"  >{cart[K].name.slice(0,12)}({cart[K].size}/{Capital(cart[K].variant)})</div>}
                 {!cart[K].size && !cart[K].variant && <div className="w-2/3 pt-3 font-normal">{cart[K].name.slice(0,12)}</div>}
                 {cart[K].size && !cart[K].variant && <div className="w-2/3 pt-3 font-normal" >{cart[K].name.slice(0,12)}({cart[K].size})</div>}
                 {!cart[K].size && cart[K].variant && <div className="w-2/3 pt-3 font-normal" >{cart[K].name.slice(0,12)}({Capital(cart[K].variant)})</div>}
                  
                  <div className="flex items-center font-semibold justify-center w-1/3  text-sm ">
                    
                    <AiOutlinePlusCircle
                      onClick={() => {
                        AddToCart(
                          K,
                          1,
                          cart[K].name ,
                          cart[K].price,
                          cart[K].size,
                          cart[K].variant,
                          cart[K].image
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                    
                    <span className="mx-2">{cart[K].qty} </span>
                    
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(
                          K,
                          1,
                          cart[K].price,
                          cart[K].name,
                          cart[K].size,
                          cart[K].variant,
                          cart[K].image
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                  </div>
                  
              <span  ><img className="h-10 mt-2 w-10"  src={cart[K].image} alt="zwear" /></span>
                </div>
              </li>
              <div className='bg-white h-[1px] flex flex-col w-50'></div>
             
              </>
            );
          })}
        </ol>
        <span className="subtotal font-bold  ">Subtotal : {subTotal}</span>
        <div className="flex mb-4 mt-4">
          {user.value && <Link href={"/checkout"}>
            <button disabled={Object.keys(cart).length===0} className="flex mx-2 text-white disabled:bg-pink-300 bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <AiFillShopping className="mt-[3px] mr-[2px]" /> Checkout
            </button>
          </Link> }
          <button
          disabled={Object.keys(cart).length===0}
            onClick={clearCart}
            className="flex mx-2 disabled:bg-pink-300  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
