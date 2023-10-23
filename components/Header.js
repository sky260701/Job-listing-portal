/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { c1} from "../pages/images/c1.webp";
import  c2 from "../pages/images/c2.jpg";
import  c3 from "../pages/images/c3.webp";
import  c4 from "../pages/images/c4.webp";
import Link  from "next/link";





function Header() {

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
       <div className="bg-gradient-to-r from-blue-900 to-blue-300">
      <br/><br/>
      <section>
        <br/>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-[#ff641a] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Find your next job
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              Make the best decision for your career and build your dream
              career!
            </p>
            <a
              href="/signup"
              className="text-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#ff641a] hover:bg-[#d7180e] focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://media.istockphoto.com/id/1298405320/vector/job-interview.jpg?s=612x612&w=0&k=20&c=9lTS210eeAJPByW4YREFBGSc1nv6-mH5dihBND8lhz4=" alt="Your Image" />
          </div>
        </div>
      </section>
    </div>
    
    <div>
      <section className="bg-white dark:bg-gray-900 m-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="py-8 px-4 mx-auto max-w-screen-md sm:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              A reliable job portal for you
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at GetYourJob, we focus on making your job search experience
              faster, safer, and more reliable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ff641a] lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#d7180e"
                    className="w-6 h-6"
                  >
                    {/* SVG Path for Worldwide */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Worldwide</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Find your dream job vacancies from around the world
                </p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ff641a] lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#d7180e"
                    className="w-6 h-6"
                  >
                    {/* SVG Path for Filter by category */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Filter by category</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Find your dream job by filtering by category, name, location, salary, and so on
                </p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ff641a] lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#d7180e"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* SVG Path for Various jobs */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Various jobs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  There are various types of jobs available. Search and find a job that suits you
                </p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ff641a] lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#d7180e"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* SVG Path for Fast */}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The website technology that we use allows you to find work quickly and safely
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

{/* <Slider {...settings} className='overflow-x-hidden overflow-y-hidden' >
      <div>
       
        <img src='c1.webp' alt="Image 1" className="object-cover h-full w-full " />
      </div>
      <div>
        <img src='c2.jpg' alt="Image 2" className="object-cover h-full w-full" />
      </div>
      <div>
        <img src='c3.webp' alt="Image 3" className="object-cover h-full w-full" />
      </div>
      <div>
        <img src='c4.webp' alt="Image 4" className="object-cover h-full w-full" />
      </div>
    </Slider> */}
    
    <br/>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Job Categories</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Job vacancies refer to open positions or employment opportunities offered by organizations or companies for individuals seeking employment. These positions may vary in skill requirements, industry, and location, providing candidates with choices for their career paths..</p>
    </div>

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" />
        </div>
        {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2> */}
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <Link href='./tshirts'>    <button class="inline-flex my-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Software Developers</button> </Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak= "/>
        </div>
        {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2> */}
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <Link href='/hoodies'> <button class="inline-flex my-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Data Analyst</button> </Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1334591613/photo/businessman-hold-circle-of-network-structure-hr-human-resources-business-leadership-concept.jpg?s=612x612&w=0&k=20&c=F4OFJteempRNkJl2tKsq6vWuP0DwFY3x9KpRCZ6C3Vc=" />
        </div>
        {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2> */}
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <Link href='./mugs'>   <button class="inline-flex my-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">AI/ML Engineers</button> </Link>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1224701659/photo/working-on-a-new-project-together-top-view-of-designers-discussing-sketches-choosing-colors.jpg?s=612x612&w=0&k=20&c=twHE58ez6om-5h8-ck35qWcQAXSGrgpbOS2H0_M2HQg=" />
        </div>
        {/* <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2> */}
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <Link href='./commisions'>   <button class="inline-flex my-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Designers</button> </Link>
      </div>
    </div>
  </div>
</section>

<div
      style={{
        background: 'rgb(8, 20, 52)',
        backgroundImage: 'linear-gradient(10deg, rgba(8, 20, 52, 1) 21%, rgba(88, 94, 161, 1) 89%)',
      }}
    >
      <section>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://media.istockphoto.com/id/1349476600/vector/talk-conversation-concept.jpg?s=612x612&w=0&k=20&c=4pq7uNqStestoXXlVrYPJOdz0AT18gclj9JN7sPJEZ8=" // Replace with the URL of the image
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://media.istockphoto.com/id/1349476600/vector/talk-conversation-concept.jpg?s=612x612&w=0&k=20&c=4pq7uNqStestoXXlVrYPJOdz0AT18gclj9JN7sPJEZ8=" // Replace with the URL of the image
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#ff641a]">
              Find more than 10000+ job
            </h2>
            <p className="mb-6 font-light text-white md:text-lg">
              GetYourJob helps you get the first job from around the world, we
              provide thousands of job vacancies waiting for you. Register and
              get your dream job
            </p>
          </div>
        </div>
      </section>
    </div>
    <br/><br/><br/>


    
   
 



   
    <div className='flex flex-wrap justify-between'>

    <div class="flex items-center justify-center px-5 py-5">
    <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" class="relative block">
                <img alt="profil" src="https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-320x320.jpg" class="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div class="w-full mb-10">
            <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                “
            </div>
            <p class="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                ”
            </div>
        </div>
        <div class="w-full">
            <p class="font-bold text-center text-indigo-500 text-md">
                Angela Hardy
            </p>
            <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                @thom.hardy
            </p>
        </div>
    </div>
</div>

<div class="flex items-center justify-center px-5 py-5">
    <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
            <a href="#" class="relative block">
                <img alt="profil" src="https://cdn.tailkit.com/media/placeholders/avatar-DLKR_x3T_7s-320x320.jpg" class="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div class="w-full mb-10">
            <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                “
            </div>
            <p class="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            </p>
            <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                ”
            </div>
        </div>
        <div class="w-full">
            <p class="font-bold text-center text-indigo-500 text-md">
                Nancy Hardy
            </p>
            <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                @nancy.hardy
            </p>
        </div>
    </div>
</div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Header