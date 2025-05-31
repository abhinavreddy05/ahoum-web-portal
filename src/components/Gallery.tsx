const Gallery = () => {
  const images = [
    "/lovable-uploads/549c7b3d-e50d-4c94-8522-82e94c9c602e.png",
    "/lovable-uploads/bd17d909-ef29-4d02-bbc6-a4ec9630f435.png",
    "/lovable-uploads/b5d4de2e-03a5-46f6-9191-8f99e97bc7d8.png",
    "/lovable-uploads/72acec9f-e007-4d31-987e-e52fdb8add90.png"
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
