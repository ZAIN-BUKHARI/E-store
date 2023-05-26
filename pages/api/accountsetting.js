import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler= async (req,res)=>{
    if(req.method=='POST'){
        if(!req.body.phone.length>=10 ){
            res.status(200).json({error:"Number not valid:)"})
            return
        }else{

            let token =req.body.token
            const {name,phone,address,city}=req.body
            let find= jsonwebtoken.verify(token,'secret123')
            await User.findOneAndUpdate({email:find.email},{name,address,city,phone})
            
            res.status(200).json({success:"success"})
        }

    }
   

}

export default   ConnectMongoDB(handler)