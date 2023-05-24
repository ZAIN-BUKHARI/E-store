import Head from 'next/head'
import Section from '../components/Section'
import { FaTshirt } from 'react-icons/fa'
import { FaShuttleVan } from 'react-icons/fa'
import { TbCurrencyReal } from 'react-icons/tb'
import styled from 'styled-components'
import NewProducts from '../components/Arrival'
import Wear from '../components/Wear'
import Image from 'next/image'
export default function Home() {
  return (
    <>
    <div className=''>
      <Head>
        <title>Zainy'sWear</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" sizes="57x57" href="/favicons.ico"/> */}

      </Head>
      
      <Section/>
      <NewProducts/>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <Wear/>

  </div>
</section>
      
           
     
     
    </div>
    <div className='flex h-[300px]  justify-center' >

    <img className='w-[70%] h-[300px]'  src='x3.jpg' />
</div>
</>
  )
}
