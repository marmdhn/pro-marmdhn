import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/marmdhn/", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marmdhn/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marmdhn_/",
    icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
      <span>&copy; {new Date().getFullYear()} Muhammad Akbar Ramadhan.</span>
      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-primary transition-colors duration-200"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
