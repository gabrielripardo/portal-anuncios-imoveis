import Image from "next/image";

interface WrapperProps {
  label: string;
  showLabel: boolean;
}

export default function SearchButton({ label, showLabel }: WrapperProps) {
  return (
    <button
      className="w-full flex items-center justify-center min-w-16 min-h-16 gap-2 p-2 px-4 text-white bg-orange-default rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 font-bold"
      data-testid="btn-search"
    >
      <Image
        src="/icons/search.svg"
        alt="search button"
        width={22}
        height={22}
        priority
      />
      {showLabel && label}
    </button>
  );
}
