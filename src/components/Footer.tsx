
const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              Looks interesting?
            </h3>
            <p className="font-montserrat text-foreground">Contact us at</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="mb-2">
              <a 
                href="tel:+919076099969"
                className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
              >
                +91 90760 99969
              </a>
            </div>
            <div>
              <a 
                href="mailto:aloha@ahoum.com"
                className="font-montserrat text-foreground hover:opacity-70 transition-opacity"
              >
                aloha@ahoum.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10 text-center">
          <p className="font-montserrat text-sm text-foreground/60">
            © 2025 Ahoum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
