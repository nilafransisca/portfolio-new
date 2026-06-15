import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { socials } from "../data";

const ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function Footer() {
  return (
    <footer className="bg-pink-dark text-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((social) => {
            const Icon = ICONS[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-black inline-block transition-transform duration-300 hover:scale-110"
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>
        <p className="text-black text-sm">
          &copy; 2026 All Rights Reserved by Nila Fransisca Hardiyeni
        </p>
      </div>
    </footer>
  );
}
