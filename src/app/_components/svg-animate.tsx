import React, { useState, useRef, useEffect } from 'react';
import * as lottie from 'lottie-web';

interface MyLottieComponentProps {
  height: any; 
  width: any; 
  animationSource: any; 
}

const MyLotieComponent: React.FC<MyLottieComponentProps> = ({ height, width, animationSource }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); 
  let animationInstance: lottie.AnimationItem | null = null;

  useEffect(() => {
    if (containerRef.current && animationSource) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg', 
        loop: true, // Enable looping 
        autoplay: false,
        animationData: animationSource, 
      });

      animationInstance = animation; 
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy(); 
      }
    };
  }, [containerRef, animationSource]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationInstance) {
      animationInstance.play(); // Start playing on hover
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationInstance) {
      animationInstance.stop(); // Stop playing on mouse leave
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ height, width }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={"border-4"}
    />
  );
};

export default MyLotieComponent;
