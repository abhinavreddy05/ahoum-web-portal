
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: "/lovable-uploads/12a9cf17-b71b-4057-b03e-13acb8de343f.png",
    title: "Neosophical AI",
    description: "Discover ancient wisdom through modern technology"
  }, {
    image: "/lovable-uploads/341cf9a2-3b37-4817-b33c-3e7fdb5589f0.png",
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
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out h-full" style={{
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl">
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                  {slide.title}
                </h1>
                <p className="font-montserrat text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-center">
                  {slide.description}
                </p>
                <button className="font-montserrat border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-[20px] hover:bg-white hover:text-foreground transition-all duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
