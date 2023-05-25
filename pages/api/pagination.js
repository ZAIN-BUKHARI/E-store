import ConnectMongoDB from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler= async (req, res)=> {
    const pro = await Product.find({category:'earrings'})
    res.status(200).send(pro)
    
}
  
  
  
export default   ConnectMongoDB(handler)