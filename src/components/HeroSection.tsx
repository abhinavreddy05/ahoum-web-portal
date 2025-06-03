import { useState, useEffect } from 'react';
import banner2 from '@/assets/banner2.jpeg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: "/lovable-uploads/8d434cb9-b643-4b30-a21a-404ab5eaa46c.png",
    title: "Neosophical™ AI",
    description: "Discover ancient wisdom through modern technology"
  }, {
    image: banner2,
    title: "Your co-pilot for emotional clarity",
    description: "Navigate your spiritual journey with AI-powered insights"
  }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden mb-0">
      <div className="flex transition-transform duration-500 ease-in-out h-full" style={{
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4 md:p-6">
              <div className="text-center max-w-4xl">
                <h1 className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-center leading-tight ${index === 0 ? 'text-white' : 'text-white'}`}>
                  {index === 0 ? (
                    <>
                      Neosophical<sup className="text-[0.4em] align-top leading-none">™</sup> AI
                    </>
                  ) : (
                    slide.title
                  )}
                </h1>
                <p className={`font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-center leading-relaxed ${index === 0 ? 'text-white' : 'text-white'}`}>
                  {slide.description}
                </p>
                <button className={`font-montserrat border-2 px-8 md:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-[20px] transition-all duration-300 font-medium ${index === 0 ? 'border-white text-white hover:bg-white hover:text-foreground' : 'border-white text-white hover:bg-white hover:text-foreground'}`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
