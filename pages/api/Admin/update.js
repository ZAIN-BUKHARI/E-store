import ConnectMongoDB from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler= async (req, res)=> {
    if(req.method=='POST'){
        try{ 
           let b= req.body.slug
        let p = await Product.findOneAndUpdate({b},{
            slug:req.body.b,
            title:req.body.title,
            desc:req.body.desc,
            image:req.body.file,
            size:req.body.size,
            color:req.body.color,
            price:req.body.price,
            category:req.body.category,
            AvailableQty:req.body.AvailableQty,
            Profit:req.body.Profit,
            Feature:req.body.Feature
            
        })
        res.status(200).json({ success:a })
       }
       catch(error){
        res.status(200).json({ error:error })
       }
}
else{

    res.status(400).json({ error : 'this method is not defined' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)