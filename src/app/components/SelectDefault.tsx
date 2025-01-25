import Image from "next/image";
import React from "react";
import Option from "../models/option.model";

interface WrapperProps {
  options: Option[];
}

export default function SelectDefault({ options }: WrapperProps) {
  return (
    <div className="relative w-full">
      <select
        className="w-full z-20 px-4 py-2 border bg-transparent border-gray-300 rounded-lg appearance-none text-gray-700 focus:outline-none"
        defaultValue=""
      >
        {options.map((opt: Option, index: number) => (
          <option
            key={`${opt.label}-${index}`}
            value={opt.value}
            disabled={index == 0}
          >
            {opt.label}
          </option>
        ))}
      </select>

      <Image
        className="md:hidden absolute right-3 top-4"
        src="/icons/arrow-down.svg"
        alt="search button"
        width={16}
        height={16}
        priority
      />
    </div>
  );
}
