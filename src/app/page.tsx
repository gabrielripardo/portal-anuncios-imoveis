"use client";

import Image from "next/image";
import FormSearch from "./components/FormSearch";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-sans">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className="object-contain z-auto"
          src="/images/starter-banner.png"
          alt="woman banner"
          fill
          priority
        />
        <p className="text-white font-bold">Vende. Aluga. Conecta.</p>
        <FormSearch /> */}

        <div className="w-full h-screen">
          {/* Imagem de fundo */}
          <Image
            className="object-contain -z-10" // Coloca a imagem atrás dos outros elementos
            src="/images/starter-banner.png"
            alt="woman banner"
            fill
            priority
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex justify-center items-start">
              <p className="text-white text-3xl -mt-16 font-bold">
                Vende. Aluga. Conecta.
              </p>

              <FormSearch />
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
