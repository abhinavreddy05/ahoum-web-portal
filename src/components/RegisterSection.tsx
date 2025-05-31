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
  return <section className="px-6 bg-background py-[130px]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-playfair text-4xl text-foreground mb-6 py-px mx-0 md:text-5xl font-bold">
            Coming Soon
          </h2>
          <p className="font-montserrat text-lg text-foreground/80 max-w-2xl mx-auto">
            Join the waitlist to get early access to Ahoum - where spiritual seekers and facilitators connect on a revolutionary platform.
          </p>
        </div>

        {/* Email Registration */}
        <form onSubmit={handleRegister} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-6 py-3 border-2 border-foreground bg-transparent font-montserrat text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-0" required />
            <button type="submit" className="font-montserrat border-2 border-foreground text-foreground px-8 py-3 rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300">
              Register
            </button>
          </div>
        </form>

        {/* App Store Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="font-montserrat border-2 border-foreground text-foreground px-8 py-3 rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300">
            Download on iOS
          </button>
          <button className="font-montserrat border-2 border-foreground text-foreground px-8 py-3 rounded-[20px] hover:bg-foreground hover:text-background transition-all duration-300">
            Download on Playstore
          </button>
        </div>
      </div>
    </section>;
};
export default RegisterSection;