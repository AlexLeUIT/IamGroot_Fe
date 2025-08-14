import { Link } from "react-router-dom"
import Lottie from "lottie-react";
import plantScanning from "../../public/PlantScanning.json";
import Bamboo from "../../public/Bamboo.json"; 
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* đường dẫn phân cấp */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>{">"}</span>
        <span className="text-green-800">Blogs & Articles</span>
      </div>
      {/* Giới thiệu */}
      <div className="flex items-center justify-between ">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold ">Em dao nay co con xem phim mot minh?</h1>
          <p className="mt-8 text-md md:text-xl ">Hoi em toi xin lam con cho', bay  theo em ve noi co bong em toi luon cho noi do nghe em</p>
        </div>
      {/* animated-button */}
     <Link to="write" className=" flex-col items-center gap-8 w-[300px] hidden md:flex relative">
  <div className="w-[250px] h-[250px]">
    <Lottie animationData={plantScanning} loop={true} />
  </div>
  <p className="text-green-700 font-semibold text-base text-center">
    Let's check your plant's health
  </p>
  <button className="bg-green-700 text-white px-4 py-2 hover:bg-green-800 transition duration-300 m-auto rounded-full flex items-center justify-center w-20 h-20">
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="20"
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M12 22l10-5v-5l-10 5-10-5v5l10 5z"></path>
    </svg>
  </button>
    </Link>
      </div>
      {/* CATEGORIES-*/}
      <MainCategories />
      {/* Featured post  */}
      <FeaturedPosts />
      {/* PostList */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
      {/* Animated Bamboo */}
      <div className="flex items-center justify-center">
        <Lottie animationData={Bamboo} loop={true} className="w-[300px] h-[300px]" />
      </div>
      
    </div>  
  )
}

export default Homepage