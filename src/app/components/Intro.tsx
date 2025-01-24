import Image from "next/image";
import FormSearch from "./FormSearch";

export default function Intro() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/images/starter-banner.png"
          alt="Background"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>

      <div className="relative w-full z-10 flex flex-col items-center">
        <p className="text-white text-3xl -mt-16 font-bold">
          Vende. Aluga. Conecta.
        </p>

        <FormSearch />
      </div>
    </section>
  );
}
