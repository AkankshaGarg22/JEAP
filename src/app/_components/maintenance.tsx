import Container from "@/app/_components/container";
import Image from "next/image";

export function Maintenance() {
  return (
    <div className="py-72 flex flex-col lg:flex-row items-center justify-center	maintenance-page">
      <Image className="opacity-80 maintenance-page-image" src="/assets/blog/Miaron_0048-149358 (1).jpg" alt="maintenance-page" fill></Image>
      <h2 className="mb-8 text-4xl md:text-6xl absolute text-white opacity-100">
        This webpage will be developed further.
      </h2>
      <div className="flex-row absolute mt-36">
        <input className="min-h-16 maintenance-input-email pl-8" placeholder="Enter your email"></input>
        <button className="min-h-16 maintenance-input-button text-white">NOTIFY US</button>
      </div>
    </div>
  );
}

export default Maintenance;
