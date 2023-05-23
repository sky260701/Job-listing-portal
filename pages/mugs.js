import React from 'react'
import product from '@/models/product'
import mongoose from 'mongoose'
function mugs({products}) {
  return (
     
<div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {products.map((item, index) => (
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
        <a class="block relative h-48 rounded overflow-hidden" href={`/product/${item._id}`} >
          <img alt="ecommerce" class="object-top object-center w-full h-full block" src={item.imagesrc} />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p class="mt-1">{item.price}  ₹</p>
        </div>
      </div>
       ))}
        </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if ( !mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MoNGO_URI)
  }
  let products = await product.find({category : "crafts"})
  

  return {
    props :{products: JSON.parse(JSON.stringify(products))}
  }
}

export default mugs