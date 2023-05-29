import Link from "next/link";
import { SiBookstack, SiTinyletter } from "react-icons/si";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Navigation() {
  return (
    <nav className="md:ml-auto md:justify-end justify-center text-base flex container">
      <Link href="/">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          Home
        </p>
        <div className="flex justify-center  hover:text-blue-400 duration-300">
          <BiHomeAlt2 size="3rem" />
        </div>
      </Link>

      <Link href="/about">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          About
        </p>
        <div className="flex justify-center hover:text-blue-400 duration-300">
          <MdOutlineSportsSoccer size="3rem" />
        </div>
      </Link>

      <Link href="/posts/page/1">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          Events
        </p>
        <div className="flex justify-center hover:text-blue-400 duration-300">
          <SiBookstack size="3rem" />
        </div>
      </Link>
      {/* 
      <Link href="/contact">
        <p className="text-1xl font-fancy1 text-gray-900 mb-4 hover:text-blue-400 duration-300">
          Contact
        </p>
        <div className="flex justify-center hover:text-blue-400 duration-300">
          <SiTinyletter size="3rem" />
        </div>
      </Link> */}
    </nav>
  );
}
