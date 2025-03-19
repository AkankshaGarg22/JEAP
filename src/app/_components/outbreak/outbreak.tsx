"use client";
import OutbreakDesktop from "./outbreak-desktop";
import OutbreakMobile from "./outbreak-mobile";
import { useMediaQuery } from "@react-hook/media-query";

const Outbreak = ({ isVisible }: { isVisible: boolean }) => {
  const isXlScreen = useMediaQuery("only screen and (min-width: 1200px)"); // adjust the breakpoint as needed

  return (
    <div>
      {isXlScreen ? (
        <div className="hidden xl:flex relative h-full w-full justify-center items-center">
          <OutbreakDesktop isVisible={isVisible}></OutbreakDesktop>
        </div>
      ) : null}
      <div className="md:block xl:hidden p-10">
        {isXlScreen ? null : (
          <OutbreakMobile isVisible={isVisible}></OutbreakMobile>
        )}
      </div>
    </div>
  );
}

export default Outbreak;