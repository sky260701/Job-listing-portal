
import product from "../../models/product";
import connectdb from "../../middleware/mongoose";


const handler =  async (req , res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
        let p = await product.findByIdAndUpdate(req.body[i]._id , req.body[i])
       
    }
    res.status(200).json({ success :'success' })
      
    } else {
        res.status(400).json({ error :'this page is not found' })
    }
      
       
}

export default  connectdb(handler)