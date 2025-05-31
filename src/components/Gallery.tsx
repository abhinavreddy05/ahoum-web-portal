
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Gallery
        </h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2">
            <img 
              src={images[0]} 
              alt="Gallery image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <img 
              src={images[1]} 
              alt="Gallery image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <img 
              src={images[2]} 
              alt="Gallery image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <img 
              src={images[3]} 
              alt="Gallery image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
