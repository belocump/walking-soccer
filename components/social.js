import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
// import styles from 'styles/social.module.css'
import { FaLine } from "react-icons/fa";

export default function Social() {
  return (
    <div>
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
