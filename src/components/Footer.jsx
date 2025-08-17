import React from "react";
import UnderlineButton from "./UnderlineButton";
import Image from "./Image";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Github  } from "lucide-react";

function Footer() {
  return (
    <div className="relative border-violet-dark bg-violet-light flex justify-between border-2 border-b-0 bg-primary shadow-hard shadow-violet-dark rounded-t-3xl w-full max-w-[1440px]">
      <div className="flex w-full">
        <div className="border-violet-dark md:flex h-full w-full flex-col gap-4 border-0 lg:border-l-2 px-4 py-8 md:min-w-64 hidden">
          <button className="sm:text-md w-fit whitespace-nowrap rounded-md px-2 font-medium uppercase text-violet-dark lg:text-lg">
            Le Ngoc Anh - 24560002
          </button>
           <a
              className="flex gap-2 text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base hover:underline text-secondary transition-all duration-100 ease-in-out w-fit"
              href={`tel:${import.meta.env.VITE_NGOCANH_PHONE}`}
            >
              <Phone />
              {import.meta.env.VITE_NGOCANH_PHONE}
            </a>
            <a
              className="flex gap-2 text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base hover:underline text-secondary transition-all duration-100 ease-in-out w-fit"
              href={`tel:${import.meta.env.VITE_NGOCANH_GITHUB}`}
            >
              <Github />
              {import.meta.env.VITE_NGOCANH_GITHUB}
            </a>
        </div>
        <div className="border-violet-dark flex h-full w-full flex-col gap-2 md:border-l-2 px-4 py-8 md:min-w-64">
          <button className="sm:text-md w-fit whitespace-nowrap rounded-md px-2 font-medium uppercase text-violet-dark lg:text-lg">
            Le Minh Khanh - 23560056
          </button>
          <div className="flex flex-col gap-2">
            <a
              className="flex gap-2 text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base hover:underline text-secondary transition-all duration-100 ease-in-out w-fit"
              href={`mailto:${import.meta.env.VITE_ADMIN_EMAIL}`}
            >
              <Mail />
              {import.meta.env.VITE_ADMIN_EMAIL}
            </a>
            <a
              className="flex gap-2 text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base hover:underline text-secondary transition-all duration-100 ease-in-out w-fit"
              href={`tel:${import.meta.env.VITE_ADMIN_PHONE}`}
            >
              <Phone />
              {import.meta.env.VITE_ADMIN_PHONE}
            </a>
            <a href={`${import.meta.env.VITE_ADMIN_LINKEDIN_URL}`} className="flex gap-2 text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base hover:underline text-secondary transition-all duration-100 ease-in-out w-fit">
              <Linkedin />
              {import.meta.env.VITE_ADMIN_LINKEDIN_URL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
