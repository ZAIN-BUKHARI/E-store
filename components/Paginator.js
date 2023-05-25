import React,{useState,useEffect} from 'react'
import Posts from './Posts'
import Pagination from './Pagination'
import axios from 'axios'
const Paginator = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setpostsPerPage] = useState(10);
  const [Post,setPost] = useState([]);
     // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = Post.slice(indexOfFirstPost, indexOfLastPost);

 useEffect(()=>{
    axios.get('/api/pagination').then(res=>{
       setPost(res.data)
    })
  },[])
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <div className='container mt-5'>
      <Posts Post={currentPosts}  />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Post.length}
        paginate={paginate} 
      />
    </div>
    </>
  )
}

export default Paginator