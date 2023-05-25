import React from 'react';
import Link from 'next/link'

const Posts = ({ Post }) => {
  
  return (
    
    <div>
        <section className="text-gray-600 body-font ">
    <div className="container px-5 py-12 md:py-8 mx-auto">
      <div className="flex flex-wrap -m-4">
      {Object.keys(Post).length===0 && <p>Sorry! currently the stock is unavailable. It will soon restock please stay tunned !</p>}
        {Object.keys(Post).map((P)=>{
         return <div key={Post[P]._id} className="lg:w-1/5  mx-6 mb-4 md:w-1/2 p-4 w-full shadow-2xl   ">
        <Link passHref={true} href={`/product/${Post[P].slug}`}>
          <div className="block relative h-70 rounded overflow-hidden">
            <img alt="ecommerce"  className="md:h-[50vh] md:w-[40vh]    object-cover block h-[30vh] m-auto  " src={Post[P].image}/>
            
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{Post[P].title}</h2>
            <p className="mt-1">Rs{Post[P].price}</p>
            <div className="mt-1">
            {Post[P].size.includes('S')   && <span className='border border-gray-300 mx-1 px-1'>S</span>}
            {Post[P].size.includes('M')   && <span className='border border-gray-300 mx-1 px-1'>M</span>}
            {Post[P].size.includes('L')   && <span className='border border-gray-300 mx-1 px-1'>L</span>}
            {Post[P].size.includes('XL')  && <span className='border border-gray-300 mx-1 px-1'>XL</span>}
            {Post[P].size.includes('XXL') && <span className='border border-gray-300 mx-1 px-1'>XXL</span>}
            {Post[P].size.includes('A') && <span className='border border-gray-300 mx-1 px-1'>Adjustable</span>}
            {Post[P].size.includes('U') && <span className='border border-gray-300 mx-1 px-1'>UnStitch</span>}
            {Post[P].size==Number && <span className='border border-gray-300 mx-1 px-1'>{Post[P].size}</span>}
            </div> 
            <div className="mt-1">
            {Post[P].color.includes('red') && <button className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
            {Post[P].color.includes('black')   && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('blue')  && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('pink')  && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('yellow')  && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('brown')  && <button className="border-2 border-gray-300 ml-1 bg-amber-700 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('white')  && <button className="border-2 border-gray-300 ml-1 bg-white-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('orange')  && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('green')  && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('purple')  && <button className="border-2 border-gray-300 ml-1 bg-purle-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('maron')  && <button className="border-2 border-gray-300 ml-1 bg-red-800 rounded-full w-6 h-6 focus:outline-none"></button>}
            {Post[P].color.includes('silver')  && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
             </div> 
          </div>
          </Link>
        </div>
        })}
       
      </div>
    </div>
    
    
  </section>
  </div>
  );
};

export default Posts;
