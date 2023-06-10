import Header from '../components/Header'
import Section from '../components/Section'
import NewProducts from '../components/Arrival'
import Wear from '../components/Wear'

export default function Home() {
  return (
    <>
      
    <div className=''>
      <Header title={'zwear - Home'} />
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
