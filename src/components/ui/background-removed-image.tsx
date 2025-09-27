import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

interface BackgroundRemovedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const BackgroundRemovedImage = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc 
}: BackgroundRemovedImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(false);
        
        // Load the original image
        const response = await fetch(src);
        const blob = await response.blob();
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        const processedUrl = URL.createObjectURL(processedBlob);
        
        setProcessedImageUrl(processedUrl);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError(true);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse bg-muted rounded-lg w-full h-32" />
      </div>
    );
  }

  if (error) {
    return (
      <img 
        src={fallbackSrc || src} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImageUrl || fallbackSrc || src} 
      alt={alt} 
      className={className}
    />
  );
};