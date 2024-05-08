import { useState, useEffect } from 'react';

function useDimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    updateDimension(); // Get initial dimensions

    return () => window.removeEventListener('resize', updateDimension);
  }, []); 

  return dimension;
}

export default useDimension;