import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuAction from "../components/PostMenuAction"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8 '>
      {/* detail */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">nhat mot canh hoa roiiii</h1>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
        <span>Written by</span>
        <Link className="text-green-700">Flycody</Link>
        <span>on</span>
        <Link className="text-green-700">HuongDan</Link>
        <span>2 days ago</span>
        </div>
        <p className="text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Distinctio praesentium neque enim voluptates, explicabo porro, rem vel
          nostrum, iure fuga architecto! Dignissimos ea nisi facere veniam libero. 
          Perferendis, cum quo. 
        </p>
      </div>
        <div className="hidden lg:block w-2/5">
          <Image src="GreenUIT.jpg" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eos suscipit inventore debitis voluptatibus velit illum, sequi possimus vero cumque sunt. Sed, suscipit mollitia id tenetur voluptatum doloremque corporis impedit.</p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">

          <div className="flex items-center gap-8 ">
            <Image src="GreenUIT.jpg" className="w-12 h-12 rounded-full object-cover" 
            w="48" 
            h="48"
            />
          <Link className="text-green-700">FlyCody</Link>
          </div>
          <p className="text-sm text-gray-500">Github.com/KaitoEight</p>
          <div className="flex gap-2 ">
            <Link className="">
            <Image src="facebook.svg"/> 
            </Link>
            <Link className="">
            <Image src="instagram.svg"/> 
            </Link>
            </div>
          </div>
          <PostMenuAction/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Category</h1>
          <div className="flex flex-col gap-2 text-sm">

          <Link className="underline" to="/">ALL</Link>
          <Link className="underline" to="/">Web</Link>
          <Link className="underline" to="/">DEV</Link>
          <Link className="underline" to="/">DB</Link>
          <Link className="underline" to="/">SearchE</Link>
          <Link className="underline" to="/">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default SinglePostPage