"use client";

import FormSearch from "./components/FormSearch";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <FormSearch />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
