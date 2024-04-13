import React, { useState } from 'react';
import Lottie from 'lottie-react';

// Define props interface for type-safety
interface MyLottieComponentProps {
  height: number;  // Height in pixels
  width: number;   // Width in pixels
  animationSource: any;  // Path or URL to JSON animation data 
}

const MyLottieComponent = ({ height, width, animationSource }: MyLottieComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        animationData={animationSource} // Load JSON data dynamically
        loop={isHovered} 
        autoplay={isHovered}
        style={{ height, width }} // Apply props for height and width
      />

    </div>
  );
};

export default MyLottieComponent;
