import Link from "next/link";

export const BackButton = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[99999999999] flex justify-end px-4 py-2 bg-transparent">
      <Link
        href="/impact"
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#386d64] text-white hover:bg-white hover:text-[#386d64] transition-all duration-200"
      >
        <span className="text-xl font-bold flex items-center translate-y-[-2px]">
          ←
        </span>
        <span className="hidden md:inline font-semibold leading-none">
          BACK
        </span>
      </Link>
    </div>
  );
};
