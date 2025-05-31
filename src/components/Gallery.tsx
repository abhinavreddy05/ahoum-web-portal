const Gallery = () => {
  const images = ["/lovable-uploads/32114bbe-1eb7-4043-985f-562d4ef99af6.png", "/lovable-uploads/c93065d2-e196-4fa2-8d80-365cc13df782.png", "/lovable-uploads/2bb7da52-e742-495b-8490-c752797b4c5e.png", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"];
  return <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Gallery
        </h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2">
            <img src={images[0]} alt="Gallery image 1" className="w-full h-full object-contain" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <img src={images[1]} alt="Gallery image 2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <img src={images[2]} alt="Gallery image 3" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2">
            <img src={images[3]} alt="Gallery image 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Gallery;