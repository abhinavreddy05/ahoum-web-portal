
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Gallery from '@/components/Gallery';
import RegisterSection from '@/components/RegisterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Gallery />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
