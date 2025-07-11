import Container from "@/app/_components/layout/container";
import Image from "next/image";

export function Maintenance() {
  return (
    <div className="h-[40vh] flex flex-col lg:flex-row items-center justify-center relative	maintenance-page">
      <Image className="opacity-80 maintenance-page-image" src="/assets/blog/Miaron_0048-149358 (1).jpg" alt="maintenance-page" fill></Image>
      {/* <h2 className="p-5 text-2m md:text-3xl absolute text-white opacity-100 flex justify-center text-center">
        Kindly note that this webpage is a work in progress, and more information will be added soon.
      </h2> */}
      {/* <div className="flex flex-row justify-center absolute md:mt-36 mt-16 lg:w-full">
        <input className="md:min-h-16 lg:w-1/4 maintenance-input-email block pl-4" placeholder="Enter your email"></input>
        <button className="md:min-h-16 maintenance-input-button text-white space-x-4 p-1 lg:p-4">NOTIFY US</button>
      </div> */}
    </div>
  );
}

export default Maintenance;
