
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
const RegisterSection = () => {
  const [email, setEmail] = useState('');
  const {
    toast
  } = useToast();
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
  return <section className="px-6 bg-background py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 md:mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 font-bold">
            Coming Soon
          </h2>
          <p className="font-montserrat text-base md:text-lg text-foreground/80 max-w-2xl mx-auto px-4">
            Join the waitlist to get early access to Ahoum - where spiritual seekers and facilitators connect on a revolutionary platform.
          </p>
        </div>

        {/* Email Registration */}
        <form onSubmit={handleRegister} className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto px-4">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 md:px-6 py-2 md:py-3 border-2 border-foreground bg-transparent font-montserrat text-sm md:text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-0 rounded-2xl" />
            <button type="submit" className="font-montserrat border-2 border-foreground text-foreground px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap">
              Register
            </button>
          </div>
        </form>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <button className="font-montserrat border-2 border-foreground text-foreground px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300">
            Download on iOS
          </button>
          <button className="font-montserrat border-2 border-foreground text-foreground px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300">
            Download on Playstore
          </button>
        </div>
      </div>
    </section>;
};
export default RegisterSection;
