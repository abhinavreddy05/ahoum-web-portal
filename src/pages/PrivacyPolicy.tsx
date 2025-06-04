
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <div className="font-montserrat text-foreground/80 space-y-6 leading-relaxed">
          <div className="bg-foreground/5 p-6 rounded-lg">
            <p className="text-center font-semibold text-foreground">
              Privacy Policy content will be added soon. Please check back later or contact us at aloha@ahoum.com for more information.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
