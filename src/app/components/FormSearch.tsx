"use client";
import React, { useState } from "react";
import Image from "next/image";

const FormSearch = () => {
  const [localization, setLocalization] = useState<string>("");

  const handleChangeLoc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalization(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-md rounded-full pr-3">
      <div className="w-full">
        <div className="flex gap-4 items-center justify-between">
          <div className="px-8 py-3 rounded-full hover:bg-gray-200 focus-within:shadow-xl focus-within:border">
            <label
              htmlFor="location"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 font-semibold"
            >
              <Image
                src="/icons/localization.svg"
                alt="search button"
                width={28}
                height={28}
                priority
              />
              Localização
            </label>
            <input
              type="text"
              id="location"
              placeholder="Qual é a localização?"
              className="w-full bg-transparent p-2 rounded-md focus:outline-none"
              onChange={handleChangeLoc}
              value={localization}
            />
          </div>
          <hr className="bg-gray-300 w-0.5 h-12" />
          <div>
            <label
              htmlFor="rooms"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 font-semibold"
            >
              <Image
                src="/icons/bed.svg"
                alt="search button"
                width={28}
                height={28}
                priority
              />
              Nº de Quartos
            </label>
            <input
              type="number"
              id="rooms"
              placeholder="Quantos quartos?"
              className="w-full p-2 rounded-md focus:outline-none"
            />
          </div>

          <button className="flex items-center justify-center min-w-16 min-h-16 gap-2 p-2 px-4 text-white bg-orange-default rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200">
            <Image
              src="/icons/search.svg"
              alt="search button"
              width={22}
              height={22}
              priority
            />
            {localization != "" && "Buscar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSearch;
