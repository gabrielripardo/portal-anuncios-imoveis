"use client";

import Header from "./components/Header";
import Session1 from "./components/Session1";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-items-start">
      <Header />
      <Session1 />
      <footer className="row-start-3 flex gap-6 flex-wrap items-start justify-center"></footer>
    </div>
  );
}
