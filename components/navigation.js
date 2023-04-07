import Link from "next/link";
import {
  SiGooglehome,
  SiReddit,
  SiBookstack,
  SiTinyletter,
} from "react-icons/si";

export default function Navigation() {
  return (
    <nav className="md:ml-auto md:justify-end justify-center text-base flex container">
      <Link href="/">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          Home
        </p>
        <div className="flex justify-center">
          <SiGooglehome />
        </div>
      </Link>

      <Link href="/about">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          About
        </p>
        <div className="flex justify-center">
          <SiReddit />
        </div>
      </Link>

      <Link href="/posts/page/1">
        <p className="text-1xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">
          Blog
        </p>
        <div className="flex justify-center">
          <SiBookstack />
        </div>
      </Link>

      <Link href="/contact">
        <p className="text-1xl font-fancy1 text-gray-900 mb-4 hover:text-blue-400 duration-300">
          Contact
        </p>
        <div className="flex justify-center">
          <SiTinyletter />
        </div>
      </Link>
    </nav>
  );
}
