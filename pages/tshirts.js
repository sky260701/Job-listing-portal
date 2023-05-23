import product from '@/models/product'
import mongoose from 'mongoose'
import Link from 'next/link'
import React from 'react'

function tshirts({products}) {

   console.log(products)

     const handledata = () => {
          console.log("hello")
         
     }

  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {products.map((item, index) => (
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
        <a class="block relative h-48 rounded overflow-hidden" href={`/product/${item._id}`} onClick={handledata}>
          <img alt="ecommerce" class="object-top object-center w-full h-full block" src={item.imagesrc} />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p class="mt-1">{item.price}  ₹</p>
        </div>
      </div>
       ))}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div> */}
      {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419ce68f-c02a-4d68-920e-d7ae27ca1704/detq1ad-3318df6d-cf4f-4331-b667-518deb0eee77.jpg/v1/fill/w_570,h_350,q_70,strp/enchanted_forest_by_itskrolja_detq1ad-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NyIsInBhdGgiOiJcL2ZcLzQxOWNlNjhmLWMwMmEtNGQ2OC05MjBlLWQ3YWUyN2NhMTcwNFwvZGV0cTFhZC0zMzE4ZGY2ZC1jZjRmLTQzMzEtYjY2Ny01MThkZWIwZWVlNzcuanBnIiwid2lkdGgiOiI8PTU2NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wDp4f_lhXtUhIg9d-_aFzud7InTRpDwhPMhSlR8lALE" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div> */}
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
  let products = await product.find({category:"finearts"}).maxTimeMS(60000)
  

  return {
    props :{products: JSON.parse(JSON.stringify(products))}
  }
}

export default tshirts