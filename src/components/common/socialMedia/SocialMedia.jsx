import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faStackOverflow,
  faUpwork
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  // { icon: faDribbble, link: "#!" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/jignesh-patel-007/" },
  { icon: faGithub, link: "https://github.com/jignesh1993" },
  { icon: faStackOverflow, link: "https://stackoverflow.com/users/13397319/jignesh-patel" },
  { icon: faUpwork, link: "https://www.upwork.com/freelancers/~0121fcedc9cefe1af7" },
  { icon: faInstagram, link: "https://www.instagram.com/jignesh_mahesh_patel_25?igsh=MTZjc2xlMHUxZ2U3aQ==" }
  // { icon: faBehance, link: "#!" }
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
