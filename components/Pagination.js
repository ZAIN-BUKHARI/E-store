import React from 'react';
import Link from 'next/link'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='Page pagination flex justify-center'>
        {pageNumbers.map(number => (
          <li onClick={() => paginate(number)} key={number} className=' cursor-pointer page-item border-2 p-2 mr-2'>
            <button   className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default Pagination;
