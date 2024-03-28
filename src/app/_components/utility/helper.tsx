// useIsMobile.js
import { useMediaQuery } from '@react-hook/media-query';

export const isMobile = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
  return isMobile;
};
