import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
const socials = [
  { icons: <FaGithub />, path: "https://github.com/Prabhat-7" },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/prabhat-sitaula-66a348335",
  },
  { icons: <FaFacebook />, path: "https://www.facebook.com/prabhat.sitaula.9" },
  { icons: <FaTwitter />, path: "https://x.com/PrabhatSitaula" },
];
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}
const Socials = ({ containerStyles = "", iconStyles = "" }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
