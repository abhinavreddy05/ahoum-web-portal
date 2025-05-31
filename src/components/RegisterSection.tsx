
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const RegisterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Registration Successful!",
        description: "You'll be notified when Ahoum launches."
      });
      setEmail('');
    }
  };

  return (
    <div className="w-full py-20 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 bg-background mt-8 md:mt-12 lg:mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 md:mb-8 font-bold">
            Coming Soon
          </h2>
          <p className="font-montserrat text-base md:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist to get early access to Ahoum - where spiritual seekers and facilitators connect on a revolutionary platform.
          </p>
        </div>

        {/* Email Registration */}
        <form onSubmit={handleRegister} className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-w-lg mx-auto">
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
              className="flex-1 px-6 md:px-8 py-3 md:py-4 border-2 border-foreground bg-transparent font-montserrat text-sm md:text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-0 rounded-2xl transition-all duration-300 focus:border-foreground/80" 
            />
            <button 
              type="submit" 
              className="font-montserrat border-2 border-foreground text-foreground px-8 md:px-10 py-3 md:py-4 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap font-medium"
            >
              Register
            </button>
          </div>
        </form>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <button className="font-montserrat border-2 border-foreground text-foreground px-8 md:px-10 py-3 md:py-4 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300 font-medium">
            Download on iOS
          </button>
          <button className="font-montserrat border-2 border-foreground text-foreground px-8 md:px-10 py-3 md:py-4 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300 font-medium">
            Download on Playstore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
