import Image from "next/image";
import CardTabs from "./CardTabs";
import Tab from "../models/tab.model";

export default function ExbihitionsSection() {
  const tabs: Tab[] = [
    {
      id: 0,
      icon: {
        url: "/icons/exhibitions/1.svg",
        size: 28,
      },
      title: "Pega Sol",
      content: {
        heading: "Sol que ilumina as suas manhãs",
        paragraph:
          "Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)",
        button: (
          <button className="btn-primary-unrouded">Buscar imóveis</button>
        ),
        links: [],
      },
    },
    {
      id: 1,
      icon: {
        url: "/icons/exhibitions/2.svg",
        size: 28,
      },
      title: "Aceitam Pet",
      content: {
        heading: "Aceitam Pet",
        paragraph: "Aceitam Pet",
        button: (
          <button className="btn-primary-unrouded">Buscar imóveis</button>
        ),
        links: [],
      },
    },
  ];
  return (
    <section className="w-full">
      <div className="sm:hidden relative w-full h-64 mt-4 overflow-hidden">
        <Image
          src="/images/exhibitions/2.1-sol-manha.png"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="hidden sm:block inset-0">
        <Image
          src="/images/exhibitions/2.1-sol-manha.png"
          alt="Background"
          width={1980}
          height={1080}
          layout="responsive"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="w-full absolute md:top-32 top-28 left-20 md:left-0 px-4 py-6">
        <p className="w-full z-10 flex flex-col md:flex-row md:space-x-3 justify-center text-white text-orange text-3xl font-bold">
          <span>Vende. </span> <span>Aluga. </span> <span>Conecta. </span>
        </p>
      </div>
      <div className="w-full md:absolute md:top-44 px-4 py-6">
        <div className="w-full z-10 flex flex-col items-center mt-30">
          <CardTabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
