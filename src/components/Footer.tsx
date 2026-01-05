import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
    { href: "/student-life", label: "Student Life" },
    { href: "/contact", label: "Contact" },
  ];

  const programs = [
    "STEM Education",
    "Leadership Development",
    "Mentorship Programs",
    "Extracurricular Activities",
    "Day & Boarding Options",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SMAK Logo" className="h-16 w-16 object-contain bg-white rounded-lg p-1" />
              <div>
                <h3 className="font-heading font-bold text-lg">SMAK</h3>
                <p className="text-sm text-primary-foreground/80">Est. 2025</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Nurturing the Future - Providing quality secondary education with modern facilities, dedicated teachers, and affordable fees.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program} className="text-primary-foreground/80">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Kwerjik Residential Area,<br />
                  Terekeka-Bahr El Ghazal Road
                </span>
              </li>
              <li>
                <a href="tel:0924879393" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  0924879393
                </a>
              </li>
              <li>
                <a href="tel:0988181818" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  0988181818
                </a>
              </li>
              <li>
                <a href="mailto:info@smak.edu" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  info@smak.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/70">
          <p>© 2025 St. Mary's Academy Secondary School - Kwerjik. All rights reserved.</p>
          <p className="italic">"Nurturing the Future"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
