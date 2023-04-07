import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import styles from 'styles/social.module.css'

export default function Social() {
  return (
    <div>
      <ul className="flex">
        <li className="text-1xl mr-10 hover:text-blue-400 duration-300">
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
        </li>
        <li className="text-1xl hover:text-blue-400 duration-300">
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
            <span className="">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
