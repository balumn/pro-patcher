export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webContentLink?: string;
  imageMediaMetadata?: {
    width: number;
    height: number;
  };
}

export interface GalleryImage {
  id: string;
  name: string;
  url: string;
  thumbnailUrl?: string;
  width?: number;
  height?: number;
}