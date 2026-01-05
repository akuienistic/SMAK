import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Home, Info, BookOpen, GraduationCap, Users } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/academics", label: "Academics", icon: BookOpen },
    { href: "/admissions", label: "Admissions", icon: GraduationCap },
    { href: "/student-life", label: "Student Life", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-custom px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="sm:hidden">
              <span className="font-semibold">St. Mary's Academy</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <a href="tel:0924879393" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0924879393</span>
              </a>
              <a href="tel:0988181818" className="flex items-center gap-1 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0988181818</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="hidden md:inline">Kwerjik Residential Area, Terekeka-Bahr El Ghazal Road</span>
            <span className="md:hidden">Kwerjik</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SMAK Logo" className="h-14 w-14 object-contain" />
            <div className="hidden lg:block">
              <h1 className="font-heading font-bold text-primary text-lg leading-tight">St. Mary's Academy</h1>
              <p className="text-xs text-muted-foreground">Secondary School - Kwerjik</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors relative py-1 ${
                  isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/admissions" className="hidden md:inline-flex btn-cta text-sm py-2 px-6">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    isActive(link.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              <Link to="/admissions" onClick={() => setIsMenuOpen(false)} className="btn-cta text-center mt-2">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
