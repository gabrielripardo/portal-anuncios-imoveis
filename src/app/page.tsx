"use client";

import ExbihitionsSection from "./components/ExbihitionsSection";
import Header from "./components/Header";
import Intro from "./components/Intro";
import NegotiateSection from "./components/NegotiateSection";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-items-start">
      <Header />
      <Intro />
      <NegotiateSection />
      <ExbihitionsSection />
      <footer className="row-start-3 flex gap-6 flex-wrap items-start justify-center"></footer>
    </div>
  );
}
