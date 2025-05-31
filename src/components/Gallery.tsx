
const Gallery = () => {
  const images = ["/lovable-uploads/32114bbe-1eb7-4043-985f-562d4ef99af6.png", "/lovable-uploads/c93065d2-e196-4fa2-8d80-365cc13df782.png", "/lovable-uploads/2bb7da52-e742-495b-8490-c752797b4c5e.png", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"];
  
  return (
    <div id="gallery" className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 md:mb-16 lg:mb-20">
          Gallery
        </h2>
        
        {/* Bento Grid with proper constraints */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
            <img 
              src={images[0]} 
              alt="Gallery image 1" 
              className="w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="col-span-2 md:col-span-1 overflow-hidden rounded-lg">
            <img 
              src={images[1]} 
              alt="Gallery image 2" 
              className="w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="col-span-2 md:col-span-1 overflow-hidden rounded-lg">
            <img 
              src={images[2]} 
              alt="Gallery image 3" 
              className="w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-lg">
            <img 
              src={images[3]} 
              alt="Gallery image 4" 
              className="w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
