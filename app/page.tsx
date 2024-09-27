"use client"; 

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    // Placeholder translation logic
    setOutput(`Skibidi ${input} toilet? Like, are we rizzin' or just vibin' in the skibidi universe? Duke Dennis got me thinking!`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Skibidi Language Translator</h1>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to translate"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTranslate}
        >
          Translate
        </button>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={output}
            readOnly
            placeholder="Translation will appear here"
          />
        </div>
      </div>
    </main>
  );
}
