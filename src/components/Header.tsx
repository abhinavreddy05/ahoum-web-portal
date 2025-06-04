
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-background border-b border-foreground/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-playfair text-2xl font-bold text-foreground">
          Ahoum
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('gallery')}
            className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
          >
            Contact
          </button>
          <Link 
            to="/terms-conditions" 
            className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
          >
            Terms & Conditions
          </Link>
          <Link 
            to="/privacy-policy" 
            className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="#" 
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
