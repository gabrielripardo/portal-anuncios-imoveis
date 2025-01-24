import React, { useEffect, useRef, useState } from "react";
import { getPlaces } from "../services/api";
import Place from "../models/place.model";
import Image from "next/image";

interface WrapperProps {
  onSelectPlace: (place: Place) => void;
  keyword: string;
}

export default function SelectLocation({
  onSelectPlace,
  keyword,
}: WrapperProps) {
  const [locations, setLocations] = useState<Place[]>([]);
  const [list, setList] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSelectLoc, setShowSelectLoc] = useState<boolean>(true);
  const locationsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      locationsRef.current &&
      !locationsRef.current.contains(event.target as Node)
    ) {
      setShowSelectLoc(false);
    }
  };

  const fetchData = async () => {
    getPlaces()
      .then((places: Place[]) => {
        console.log("# Search for ", keyword);
        setList(places);
        setLocations(places);
      })
      .catch(() => {
        setError("Ocorreu um erro ao buscar os dados");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const changeKeyword = () => {
    console.log("# keyword ", keyword);
    console.log("# list ", list);
    const listFiltered =
      keyword != ""
        ? list.filter(
            (place: Place) =>
              place.name.toLowerCase().includes(keyword.toLowerCase()) ||
              place.state.shortname
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              place.state.name.toLowerCase().includes(keyword.toLowerCase())
          )
        : list;

    console.log("# listFiltered ", listFiltered);
    setLocations(listFiltered);
  };

  useEffect(() => {
    fetchData();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (list.length) {
      changeKeyword();
    }
  }, [keyword]);

  return (
    <div className="absolute mt-8">
      {loading && (
        <p className="text-white text-bold text-xl">Pesquisando...</p>
      )}
      {error && <p>Erro: {error}</p>}
      {showSelectLoc && (
        <div ref={locationsRef} className="bg-white border rounded-2xl">
          <h1 className="px-7 py-4 text-gray-400">
            Busque por cidade, região, bairro ou código
          </h1>
          <ul>
            {locations.length > 0 &&
              locations.map((location: Place) => (
                <li
                  key={location.placeId}
                  className="flex px-6 py-4 text-gray-600 hover:bg-gray-200"
                  onClick={() => onSelectPlace(location)}
                >
                  <Image
                    className="mr-2"
                    src="/icons/fill-localization.svg"
                    alt="search button"
                    width={22}
                    height={22}
                    priority
                  />
                  <span className="text-gray-700">{location.name}</span>
                  &nbsp;-&nbsp;
                  {location.state.shortname}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
