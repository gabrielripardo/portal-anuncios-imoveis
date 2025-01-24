import Image from "next/image";
import FormSearch from "./FormSearch";

export default function Intro() {
  return (
    <section className="w-full">
      <div className="sm:hidden w-full">
        <Image
          src="/images/starter-banner(mobile).png"
          alt="Descrição da imagem"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="hidden sm:block inset-0">
        <Image
          src="/images/starter-banner.png"
          alt="Background"
          width={1980}
          height={1080}
          layout="responsive"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="w-full md:absolute md:top-44 px-4 py-6">
        <div className="w-full z-10 flex flex-col items-center mt-30">
          <p className="text-white text-3xl font-bold">
            Vende. Aluga. Conecta.
          </p>
          <FormSearch />
        </div>
      </div>
    </section>
  );
}
