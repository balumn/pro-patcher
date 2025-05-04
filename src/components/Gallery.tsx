import React, { useState, useEffect } from 'react';
import { fetchGalleryImages, organizeGalleryGrid } from '../utils/gallery';
import { GalleryImage } from '../types/gallery';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Use placeholder images for demo until Google Drive API is set up
  const placeholderImages = [
    { id: '1', name: 'Interior Painting', url: 'https://images.pexels.com/photos/6444256/pexels-photo-6444256.jpeg' },
    { id: '2', name: 'Exterior Painting', url: 'https://images.pexels.com/photos/5971353/pexels-photo-5971353.jpeg' },
    { id: '3', name: 'Deck Staining', url: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg' },
    { id: '4', name: 'Pressure Washing', url: 'https://images.pexels.com/photos/9810659/pexels-photo-9810659.jpeg' },
    { id: '5', name: 'Epoxy Floor', url: 'https://images.pexels.com/photos/5845463/pexels-photo-5845463.jpeg' },
    { id: '6', name: 'Drywall Repair', url: 'https://images.pexels.com/photos/6003035/pexels-photo-6003035.jpeg' },
    { id: '7', name: 'Kitchen Painting', url: 'https://images.pexels.com/photos/7195784/pexels-photo-7195784.jpeg' },
    { id: '8', name: 'Bathroom Painting', url: 'https://images.pexels.com/photos/6698903/pexels-photo-6698903.jpeg' },
    { id: '9', name: 'Commercial Project', url: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg' },
    { id: '10', name: 'Fence Staining', url: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg' },
    { id: '11', name: 'Residential Project', url: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg' },
    { id: '12', name: 'Office Painting', url: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg' },
  ];
  
  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        
        // In a real implementation, this would fetch from Google Drive
        // const galleryImages = await fetchGalleryImages();
        
        // For demo purposes, using placeholder images
        setImages(placeholderImages);
        setLoading(false);
      } catch (err) {
        setError('Failed to load gallery images');
        setLoading(false);
      }
    };
    
    loadImages();
  }, []);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Grid layout - simple version for now
  const imageRows = organizeGalleryGrid(images);
  
  return (
    <section id="gallery" className="py-20 bg-secondary-50">
      <div className="container-custom">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Browse through our gallery to see examples of our quality workmanship 
          and recently completed projects.
        </p>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-error-600 my-8">
            {error}
          </div>
        )}
        
        {!loading && !error && (
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-accent-500 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div 
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.name}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-lg">{selectedImage.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;