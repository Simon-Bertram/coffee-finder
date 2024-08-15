import React from "react";
import { Image } from "astro:assets";
import defaultImage from "../img/default-espresso.jpg";

const SafeImage = ({ src, alt, width, height }) => {
  const [imageSrc, setImageSrc] = React.useState(null);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        if (typeof src === "string") {
          if (src.startsWith("http") || src.startsWith("https")) {
            // It's a URL, use it directly
            setImageSrc(src);
          } else {
            // It's a local path, try to import it
            const importedImage = await import(`../path/to/images/${src}`);
            setImageSrc(importedImage.default);
          }
        } else {
          // It's already an ImageMetadata object, use it directly
          setImageSrc(src);
        }
      } catch (error) {
        console.error(`Failed to load image: ${src}`, error);
        setImageSrc(defaultImage);
      }
    };

    loadImage();
  }, [src]);

  if (!imageSrc) {
    return null; // Or a loading spinner
  }

  return <Image src={imageSrc} alt={alt} width={width} height={height} />;
};

export default SafeImage;
