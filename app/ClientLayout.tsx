"use client";

import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Skibidi Translator</h1>
        <button
          className="ml-4 bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle Dark Mode
        </button>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-8">
        <p>&copy; 2024 Skibidi Translator. All rights reserved.</p>
      </footer>
    </>
  );
}
