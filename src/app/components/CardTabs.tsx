import { useState } from "react";
import Tab, { Link } from "../models/tab.model";
import Image from "next/image";

interface WrapperProps {
  tabs: Tab[];
}

export default function CardTabs({ tabs }: WrapperProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full sm:max-w-[596px] m-0 p-4 bg-white shadow-sm rounded-lg border-gray-200 ">
      <div className="flex justify-around items-end border-b-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center p-4 border-b-4 transition-colors duration-300 ${
              activeTab === tab.id ? "border-orange-500" : "border-transparent"
            } hover:border-orange-300`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Image
              src={tab.icon.url}
              alt="tab button"
              width={tab.icon.size}
              height={tab.icon.size}
              priority
            />
            <span
              className={`mt-2  hover:text-gray-700 font-bold ${
                activeTab === tab.id ? "text-gray-700" : "text-zinc-500"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <div className="sm:h-[288px] h-[300px] p-4 p-7 space-y-6">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          {tabs[activeTab].content.heading}
        </h2>
        <p className="text-gray-400 mb-4">
          {tabs[activeTab].content.paragraph}
        </p>
        {tabs[activeTab].content.button}
        <div className="mt-4 space-y-2 text-sm">
          {tabs[activeTab].content.links.map((link: Link, index: number) => (
            <a
              key={index}
              href={link.url}
              className="block text-gray-700 border-1 border-b-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
