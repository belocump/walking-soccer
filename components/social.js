import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
// import styles from 'styles/social.module.css'
import Link from "next/link";
import { SiBookstack, SiTinyletter } from "react-icons/si";
import { GiTurtle } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaLine } from "react-icons/fa";
export default function Social() {
  return (
    <div>
      {/* <ul className="flex content-between">
        <li className="text-1xl hover:text-blue-400 duration-300 mx-4">
          <a href="https://belocump-github-io.vercel.app/ " target="_blank">
            <HiUserCircle size="2rem" />
            <span className="">Belocump</span>
          </a>
        </li>
        <li className="text-1xl hover:text-blue-400 duration-300 mx-4">
          <a href="https://twitter.com/" target="_blank">
            <FiTwitter size="2rem" />
            <span className="">Twitter </span>
          </a>
        </li>
        <li className="text-1xl hover:text-blue-400 duration-300 mx-4">
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram size="2rem" />
            <span className="">Instagram</span>
          </a>
        </li>
      </ul> */}
      <nav className="md:ml-auto md:justify-end justify-center text-base flex container">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
            Twitter
          </p> */}
          <div className="flex justify-center hover:text-blue-400 duration-300 m-3">
            <FiTwitter size="2rem" />
          </div>
        </a>

        <a
          href="https://belocump-github-io.vercel.app/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
            LINE
          </p> */}
          <div className="flex justify-center hover:text-blue-400 duration-300 m-3">
            <FaLine size="2rem" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
            Instagram
          </p> */}
          <div className="flex justify-center hover:text-blue-400 duration-300 m-3">
            <BsInstagram size="2rem" />
          </div>
        </a>

        <a
          href="https://belocump-github-io.vercel.app/about "
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
            Belocump
          </p> */}
          <div className="flex justify-center hover:text-blue-400 duration-300 m-3">
            <HiUserCircle size="2rem" />
          </div>
        </a>
      </nav>
    </div>
  );
}
