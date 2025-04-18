import React from "react";

interface RoundedImageProps {
    src: string;
    radius: number;
    alt?: string;
};

const RoundedImage = ({
    src,
    radius,
    alt
}: RoundedImageProps
) => {
    return (
        <img
          src={src}
          height={radius}
          width={radius}
          alt={alt}
          className="rounded-full aspect-square object-cover"
        />
    );
  };
  
  export default RoundedImage;