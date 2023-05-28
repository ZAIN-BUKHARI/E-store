import React,{useState}from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Center from '../components/Center'
import styled from 'styled-components'
import Table from '../components/Table'
import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "../src/components/baseCard/BaseCard";
import axios from 'axios';
import UpdateProduct from '../components/UpdateProduct';


const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
    // margin-right:60px
  }
  gap: 30px;
  margin-top: 30px;
  
  
 
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  // margin-right:-20px;

`;


const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
 
  
  
  
  @media screen and (min-width: 768px) {
    
    img{
      max-width: 120px;
      max-height: 100px;
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

const update = (admin) => {
    const [slug,setslug]=useState('')
    const [product,setproduct]=useState([])
    const find=(e)=>{
      if(e.target.name=='search'){
        setslug(e.target.value)
      }
    }
    const Search=async(e)=>{
     e.preventDefault()
     axios.post('/api/Admin/findupdate',{slug}).then(res=>{
        console.log(res)
        setproduct(res.data.product)
     })
    }


    // UPDATE PRODUCT SYSTEM HERE 
  //   const [title, settitle] = useState('')
  // const [desc, setdesc] = useState('')
  // const [price, setprice] = useState('')
  // const [color, setcolor] = useState('')
  // const [file, setFile] = useState('')
  // const [size, setsize] = useState('')
  // const [AvailableQty, setAvailableQty] = useState('')
  // const [category, setcategory] = useState('')
  // const [Profit, setprofit] = useState('')
  // const [Feature, setFeature] = useState('')
//   const handleChange = async  (e) =>{
//       if(e.target.name=='slug'){
//         setslug(e.target.value)
//       }
//       else if(e.target.name=='title'){
//         settitle(e.target.value)
//       }
//       else if(e.target.name=='desc'){
//         setdesc(e.target.value)
//       }
//      else if(e.target.name=='category'){
//         setcategory(e.target.value)
//       }
//       else if(e.target.name=='AvailableQty'){
//         setAvailableQty(e.target.value)
//       }
//       else if(e.target.name=='size'){
//         setsize(e.target.value)
//       }
//       else if(e.target.name=='color'){
//         setcolor(e.target.value)
//       }
//       else if(e.target.name=='Profit'){
//         setprofit(e.target.value)
//       }
//       else if(e.target.name=='price'){
//         setprice(e.target.value)
//       }
//       else if(e.target.name=='Feature'){
//         setFeature(e.target.value)
//       }
     
//   }
//   const imgLink=(e)=>{
//     if(e.target.name=='file'){
//       setFile(e.target.value)
//     }
//   }
//   const submitform = async (e) =>{
//     e.preventDefault()
   
       
//         if( slug!='' && title!='' && desc!='' && price!=''  && AvailableQty!='' && category!=''&& Profit!=''){
//         const data = {slug,title,file,desc,price,size,color,AvailableQty,category,Profit,Feature}
//         console.log(data)
        
//     let response =  await fetch(`/api/Admin/update`,{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     })
//     let a = await response.json()
//     console.log(a)
//     if(a.success){
//        toast.success('Successfully product updated!', {
//         position: "bottom-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
        
       
//     }else if(a.error){
//       toast.info('You put some wrong info! Try again ', {
//         position: "bottom-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });
// }
//   }
//   else{
//     toast.error('Cannot set empty field', {
//       position: "bottom-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
//   }
    
  
//   }
  return (
    <>
    <ThemeProvider theme={theme}>
    <style jsx global>{`
footer{
display:none;
 }
`}</style>

{ !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only Zainy'sWear admins allow here</h1>}
{ admin.admin.value &&  <FullLayout>
    
    {/* <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>SEARCH PRODUCT BY SLUG</h1> */}
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={find} value={slug} type='text'  name="search" label="Search" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={Search} variant="outlined" mt={2}>
            Search
          </Button>


        </BaseCard>
      </Grid>
      {product.length==0  && <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>SEARCH PRODUCT BY SLUG AN UPDATE</h1>}
      {product.length!=0 &&  <Center>
        <UpdateProduct {...product} />
        {/* <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
            <TextField onChange={handleChange} value={product.slug }  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <select value={product.color?product.color:color} onChange={handleChange} name='color'   className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>color</option>
                   <option value={'blue'}>blue</option>
                   <option value={'red'}>red</option>
                   <option value={'black'}>black</option>
                   <option value={'green'}>green</option>
                  <option value={'yellow'}>yellow</option>
                  <option value={'pink'}>pink</option>
                  <option value={'orange'}>orange</option>
                  <option value={'tan'}>tan</option>
                  <option value={'white'}>white</option>
                  <option value={'brown'}>brown</option>
                  <option value={'maron'}>Maron</option>
                  <option value={'purple'}>purple</option>
                  <option value={'lpurple'}>Light purple</option>
              </select> 
            <select value={product.size?product.size:size} onChange={handleChange} name='size'  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                  <option value={''}>Size</option>
                   <option value={'S'}>S</option>
                   <option value={'M'}>M</option>
                   <option value={'L'}>L</option>
                   <option value={'XL'}>XL</option>
                  <option value={'XXL'}>XXL</option>
                  <option value={'A'}>Ajustable</option>
                  <option value={'U'}>Unstitch</option>
                  <option value={'ST'}>Standard</option>
              </select>
            <TextField onChange={handleChange} value={product.price? product.price:price} type='number' name="price" label="Price" variant="outlined" />
            <TextField onChange={handleChange} value={product.AvailableQty? product.AvailableQty:AvailableQty} type='number' name="AvailableQty" label="Quantity" variant="outlined" />
            <TextField onChange={handleChange} value={product.category?product.category:category} name="category" label="Category" variant="outlined" />
            <TextField onChange={handleChange} value={product.desc?product.desc:desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={product.Profit?product.Profit:Profit} name="Profit" type='number' label="Profit" variant="outlined"  />
            <TextField onChange={handleChange} value={product.Feature?product.Feature:Feature} name="Feature" type='text' label="Feature product" variant="outlined"  />
            <TextField onChange={imgLink} value={product.image?product.image:''}  name="file" type='text' label="Image Link" variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid> */}
    </Center>}     

     

    </FullLayout>}
    </ThemeProvider>
    </>
  )
}

export default update