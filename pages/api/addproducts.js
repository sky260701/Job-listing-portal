
import product from "../../models/product";
import connectdb from "../../middleware/mongoose";


const handler =  async (req , res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
        let p = new product({
            title :req.body[i].title ,
            productId :req.body[i].productId  ,
            quantity : req.body[i].quantity ,
            imagesrc : req.body[i].imagesrc ,
            category :req.body[i].category  ,
            price : req.body[i].price ,
            description : req.body[i].description ,
        })
        await  p.save()
    }
    res.status(200).json({ success :'success' })
      
    } else {
        res.status(400).json({ error :'this page is not found' })
    }
      
       
}

export default  connectdb(handler)