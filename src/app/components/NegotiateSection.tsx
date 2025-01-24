import Tab from "../models/tab.model";
import CardTabs from "./CardTabs";

export default function NegotiateSection() {
  const tabs: Tab[] = [
    {
      id: 0,
      icon: {
        url: "/icons/key.svg",
        size: 28,
      },
      title: "Alugar imóvel",
      content: {
        heading: "Alugue sem complicação",
        paragraph:
          "Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit.",
        button: (
          <button className="btn-primary-unrouded">
            Ver imóveis para Alugar
          </button>
        ),
        links: [
          {
            label: "Veja como Alugar sem Fiador",
            url: "#",
          },
          {
            label: "Saiba como funciona o Aluguel na Netimóveis",
            url: "#",
          },
        ],
      },
    },
    {
      id: 1,
      icon: {
        url: "/icons/money.svg",
        size: 21,
      },
      title: "Comprar imóvel",
      content: {
        heading: "Compre com Segurança",
        paragraph:
          "Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit.",
        button: (
          <button className="btn-primary-unrouded">
            Ver imóveis para Comprar
          </button>
        ),
        links: [
          {
            label: "Simule seu Financiamento",
            url: "#",
          },
          {
            label: "Saiba como funciona a Compra na Netimóveis",
            url: "#",
          },
        ],
      },
    },
    {
      id: 2,
      icon: {
        url: "/icons/house.svg",
        size: 32,
      },
      title: "Anuncar Imóvel",
      content: {
        heading: "Anuncie seu Imóvel",
        paragraph:
          "Anuncie gratuitamente na maior rede de imobiliárias do Brasil.",
        button: (
          <button className="btn-primary-unrouded">
            Ver imóveis para Comprar
          </button>
        ),
        links: [
          {
            label: "Simule seu Financiamento",
            url: "#",
          },
          {
            label: "Saiba como funciona a Compra na Netimóveis",
            url: "#",
          },
        ],
      },
    },
  ];
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start xl:space-x-28 bg-gray-200 p-4 py-16">
      <div className="max-w-[596px] flex flex-col gap-10 px-10 py-12">
        <h2 className="text-gray-600 text-3xl font-semibold">
          Encontre um lugar que é a sua cara
        </h2>

        <p className="text-gray-400">
          A Netimóveis te oferece uma experiência ágil e segura na hora de
          comprar ou alugar seu imóvel. Seja de maneira digital ou física,
          fazemos a diferença neste momento tão importante que é decidir um lar.
        </p>
      </div>
      <CardTabs tabs={tabs} />
    </div>
  );
}
