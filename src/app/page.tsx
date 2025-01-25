"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import NegotiateSection from "./components/NegotiateSection";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-items-start">
      <Header />
      <Intro />
      <NegotiateSection />
      <Footer />
    </div>
  );
}
