import React from 'react'
import product from '@/models/product'
import mongoose from 'mongoose'
function hoodies({products}) {
  console.log(products)
  return (
//     <div>
//       <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//           <p class="mt-1">$16.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
//           <p class="mt-1">$21.15</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
//           <p class="mt-1">$12.00</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden" href='./product/cotton'>
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7a8cb8c-7eac-49ca-8f94-48df6cdd5d00/dfuirtp-5871b457-ff30-4f2a-b747-1c3d37eb73a1.png/v1/fill/w_625,h_350,q_70,strp/silly_cat_chasing_fish_underwater_by_jackfrost_nsfw_dfuirtp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3YThjYjhjLTdlYWMtNDljYS04Zjk0LTQ4ZGY2Y2RkNWQwMFwvZGZ1aXJ0cC01ODcxYjQ1Ny1mZjMwLTRmMmEtYjc0Ny0xYzNkMzdlYjczYTEucG5nIiwiaGVpZ2h0IjoiPD03MTgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iN2E4Y2I4Yy03ZWFjLTQ5Y2EtOGY5NC00OGRmNmNkZDVkMDBcL2phY2tmcm9zdC1uc2Z3LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.DjHoiioNAANuytjG5SkUvRHYlYb7HXpq7VeDJ5iw6Xs" />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
//           <p class="mt-1">$18.40</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>

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
    await mongoose.connect("mongodb+srv://akashdeshmukh3030:Akash%401234@cluster0.e3olq6a.mongodb.net/?retryWrites=true&w=majority")
  }
  let products = await product.find({category : "anime"})
  

  return {
    props :{products: JSON.parse(JSON.stringify(products))}
  }
}

export default hoodies