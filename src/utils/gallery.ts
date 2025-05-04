import { GoogleDriveFile, GalleryImage } from '../types/gallery';

// Replace with actual API key and folder ID
const API_KEY = 'YOUR_API_KEY';
const FOLDER_ID = 'YOUR_FOLDER_ID';

export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,thumbnailLink,imageMediaMetadata,webContentLink)`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch images from Google Drive');
    }
    
    const data = await response.json();
    const files: GoogleDriveFile[] = data.files || [];
    
    // Filter for image files only
    const imageFiles = files.filter(file => 
      file.mimeType.startsWith('image/')
    );
    
    // Transform to gallery images
    const galleryImages: GalleryImage[] = imageFiles.map(file => ({
      id: file.id,
      name: file.name,
      url: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`,
      thumbnailUrl: file.thumbnailLink,
      width: file.imageMediaMetadata?.width,
      height: file.imageMediaMetadata?.height
    }));
    
    return galleryImages;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
};

// Function to organize images in an optimal grid
export const organizeGalleryGrid = (images: GalleryImage[]): GalleryImage[][] => {
  // This is a simple implementation that just creates rows of 3 images
  // A more sophisticated version would calculate optimal layouts based on image dimensions
  const rows: GalleryImage[][] = [];
  const imagesPerRow = 3;
  
  for (let i = 0; i < images.length; i += imagesPerRow) {
    rows.push(images.slice(i, i + imagesPerRow));
  }
  
  return rows;
};