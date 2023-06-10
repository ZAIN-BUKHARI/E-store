import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import Header from '../components/Header'
const payment = ({cart,subTotal,clearCart}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
   const router =useRouter()
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


  return (
    <>
    <Header title={'zwear - Payment'} />
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-12 mx-auto">

    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Payment methods</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p> */}
  
    </div>


    <div className="flex flex-wrap -m-4">
     
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-[300px] p-6 rounded-lg border-2 border-pink-500 flex flex-col relative overflow-hidden">
          <span className="bg-pink-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Cash on deliver</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span className='text-3xl'>Free delivery</span>
            {/* <span className="text-lg ml-1 font-normal text-gray-500">/mo</span> */}
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Delivery in 5 - 7 days
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>100% safe just order
          </p>
          <button onClick={submitForm} className="flex items-center mt-auto text-white bg-pink-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-600 rounded">Place order
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">z-wear</p>
        </div>
      </div>
      {/* bank  */}
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-[300px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Bank</h2>
          <h1 class="text-md text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">service not available</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Delivery in 5 - 7 days
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>100% safe just order
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Place order
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">z-wear</p>
        </div>
      </div>
      {/* jazzcash  */}
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-[300px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Jazz cash</h2>
          <h1 class="text-md text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">service not available</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Delivery in 5 - 7 days
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>100% safe just order
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Place order
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">z-wear</p>
        </div>
      </div>

{/* easypasia  */}
<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-[300px] p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Easy paisa</h2>
          <h1 class="text-md text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">service not available</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Delivery in 5 - 7 days
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>100% safe just order
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Place order
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">z-wear</p>
        </div>
      </div>


    </div>
  </div>
</section>
    </>
  )
}

export default payment


