import { useEffect, useRef, useState } from "react";

interface WrapperParams {
  numRooms: string;
  changeNumRooms: (numRoom: string) => void;
}

const btnRooms = ["Todos", "+1", "+2", "+3", "+4"];

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
    if (numRooms == "") {
      changeNumRooms("Todos");
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute mt-8 ">
      {showSelectLoc && (
        <div ref={roomsRef} className="px-7 py-4 border rounded-2xl bg-white">
          <div className="border-1 border-b border-gray-300 pb-6">
            <h2 className="text-gray-700">Número de Quartos</h2>

            <div className="flex gap-3 py-4">
              {btnRooms.map((room) => (
                <button
                  key={room}
                  className={`${
                    numRooms == room ? "btn-selected" : "btn-light"
                  }`}
                  onClick={() => changeNumRooms(room)}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="pt-5">
            <h2 className="text-gray-700">Tipo de Propriedade</h2>
            <select name="type-house" id="type-house">
              <option value="Todos os tipos"></option>
            </select>
          </div> */}
        </div>
      )}
    </div>
  );
}
