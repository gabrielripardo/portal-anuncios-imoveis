"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectLocation from "./SelectLocation";
import Place from "../models/place.model";
import SelectRooms from "./SelectRooms";

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
    setShowRooms(!showRooms);
  };

  const changeNumRooms = (numR: string) => {
    setNumRooms(numR);
  };

  const handleNumRooms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumRooms(event.target.value);
  };

  return (
    <div className="absolute flex flex-col items-center justify-center bg-white shadow-md rounded-full border">
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
          <hr className="bg-gray-300 w-0.5 h-12" />
          <div className="flex pl-8 pr-3 py-3 gap-8 rounded-full hover:bg-gray-200 focus-within:shadow-xl focus-within:border-l">
            <div onClick={handleShowRooms}>
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
                onChange={handleNumRooms}
                value={numRooms}
              />

              {showRooms && (
                <SelectRooms
                  numRooms={numRooms}
                  changeNumRooms={changeNumRooms}
                />
              )}
            </div>

            <button
              className="flex items-center justify-center min-w-16 min-h-16 gap-2 p-2 px-4 text-white bg-orange-default rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 font-bold"
              data-testid="btn-search"
            >
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
    </div>
  );
};

export default FormSearch;
