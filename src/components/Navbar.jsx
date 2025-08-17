import {useEffect, useState} from 'react';
// import {IKImage} from 'imagekitio-react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {getToken} = useAuth();
  useEffect(() => {
    getToken().then((token)=> console.log(token));
  },[]);
  
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
           <Image src="logouitbamboo.png " alt="Logo" w ={32} h={32} />
            <span>IamGroot</span>
        </Link>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div  
            className="cursor-pointer text-4xl" 
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "X" : "☰"}
          </div>
          {/* Mobile Link List */}
          <div className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-red-700 ${
            open? "-right-0" : "-right-[100%]" 
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/Write">Post</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">Scanner</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800"> Login</button>
          </Link>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
          <Link to="/">Home</Link>
          <Link to="/Write">Post</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/Scanner">Scanner</Link>
        <SignedOut>
          <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white"> Login</button>
          </Link>
        </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> 
        </div>
    </div>
  )
  }
export default Navbar 