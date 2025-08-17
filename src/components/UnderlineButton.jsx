import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function UnderlineButton({ children = null, link = "/", icon = null }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={link || "/"}>
      <motion.button
        className="w-fit whitespace-nowrap px-2 font-display text-md capitalize"
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className={`text-md active:scale-90 hover:text-yellow-light rounded-full px-4 py-2 hover:bg-violet-base text-secondary transition-all duration-100 ease-in-out`}
        >
          {icon}{children}
        </span>
      </motion.button>
    </Link>
  );
}

export default UnderlineButton;
