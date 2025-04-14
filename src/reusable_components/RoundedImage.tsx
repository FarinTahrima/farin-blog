import React from "react";

interface RoundedImageProps {
    src: String;
    radius: Number;
    alt?: String;
}

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