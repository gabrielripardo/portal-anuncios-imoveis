"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectLocation from "./SelectLocation";
import Place from "../models/place.model";
import SelectRooms from "./SelectRooms";
import SearchButton from "./SearchButton";

const FormSearch = () => {
  const [localization, setLocalization] = useState<string>("");
  const [showRooms, setShowRooms] = useState<boolean>(false);
  const [numRooms, setNumRooms] = useState<string>("");

  const handleChangeLoc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalization(event.target.value);
  };

  const selectPlace = (place: Place) => {
    setLocalization(`${place.name} - ${place.state.shortname}`);
  };

  const handleShowRooms = () => {
    console.log("# handleShowRooms");
    setShowRooms(!showRooms);
  };

  const changeNumRooms = (numR: string) => {
    setNumRooms(numR);
  };

  return (
    <div className="md:absolute flex flex-col items-center justify-center bg-white md:shadow-md md:rounded-full">
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="px-8 py-3 rounded-xl md:rounded-full border md:border-none hover:bg-gray-200 focus-within:shadow-xl focus-within:border">
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
              className="w-full bg-transparent p-2 rounded-md focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap"
              onChange={handleChangeLoc}
              value={localization}
            />

            {localization != "" && (
              <SelectLocation
                onSelectPlace={selectPlace}
                keyword={localization}
              />
            )}
          </div>
          <hr className="hidden md:block bg-gray-300 w-0.5 h-12" />
          <div className="flex w-full md:w-auto pl-8 pr-3 py-3 gap-8 rounded-xl md:rounded-full border md:border-none hover:bg-gray-200 focus-within:shadow-xl focus-within:border-l">
            <div className="relative bg-red h-full">
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
                id="rooms"
                placeholder="Quantos quartos?"
                className="w-full bg-transparent p-2 rounded-md focus:outline-none"
                readOnly
                value={numRooms}
                onClick={handleShowRooms}
              />
              <Image
                className="md:hidden absolute -right-4 top-2"
                src="/icons/arrow-down.svg"
                alt="search button"
                width={16}
                height={16}
                priority
              />

              {showRooms && (
                <SelectRooms
                  numRooms={numRooms}
                  changeNumRooms={changeNumRooms}
                />
              )}
            </div>
            <div className="hidden md:block">
              <SearchButton label="Buscar" showLabel={localization != ""} />
            </div>
          </div>

          <div className="md:hidden w-full">
            <SearchButton label="Buscar Imóveis" showLabel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSearch;
