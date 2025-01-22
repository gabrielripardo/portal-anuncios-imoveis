import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface WrapperParams {
  numRooms: string;
  changeNumRooms: (numRoom: string) => void;
}

export default function SelectRooms({
  numRooms,
  changeNumRooms,
}: WrapperParams) {
  const [showSelectLoc, setShowSelectLoc] = useState<boolean>(true);
  const roomsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (roomsRef.current && !roomsRef.current.contains(event.target as Node)) {
      setShowSelectLoc(false);
    }
  };

  useEffect(() => {
    console.log("# call SelectRooms");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute mt-8">
      {showSelectLoc && (
        <div ref={roomsRef} className="px-7 py-4 border rounded-2xl">
          <div className="border-1 border-b border-gray-300 pb-6">
            <h2 className="text-gray-700">Número de Quartos</h2>

            <div className="flex gap-3">
              <button
                className="bg-purple-100 text-purple-800 font-semibold ring-1 ring-purple-800 hover:bg-purple-500 hover:text-white rounded-3xl py-2 px-4"
                onClick={() => changeNumRooms("Todos")}
              >
                Todos
              </button>

              <button
                className="px-4 text-zinc-600 font-semibold py-2 ring-1 ring-gray-500 rounded-full hover:bg-purple-500 hover:text-white"
                onClick={() => changeNumRooms("1+")}
              >
                1+
              </button>
              <button
                className="px-4 text-zinc-600 font-semibold py-2 ring-1 ring-gray-500 rounded-full hover:bg-purple-500 hover:text-white"
                onClick={() => changeNumRooms("2+")}
              >
                2+
              </button>
              <button
                className="px-4 text-zinc-600 font-semibold py-2 ring-1 ring-gray-500 rounded-full hover:bg-purple-500 hover:text-white"
                onClick={() => changeNumRooms("3+")}
              >
                3+
              </button>
              <button
                className="px-4 text-zinc-600 font-semibold py-2 ring-1 ring-gray-500 rounded-full hover:bg-purple-500 hover:text-white"
                onClick={() => changeNumRooms("4+")}
              >
                4+
              </button>
            </div>
          </div>
          <div className="pt-5">
            <h2 className="text-gray-700">Tipo de Propriedade</h2>

            <button className="bg-purple-100 text-purple-800 font-semibold ring-1 ring-purple-800 hover:bg-purple-500 hover:text-white rounded-3xl py-2 px-4">
              Todos
            </button>

            <button className="px-4 text-zinc-600 font-semibold py-2 ring-1 ring-gray-500 rounded-full hover:bg-purple-500 hover:text-white">
              1+
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
