"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const slangDictionary: { [key: string]: string } = {
    good: "fire",
    awesome: "lit",
    cool: "vibing",
    feeling: "vibe",
    bad: "sus",
    sad: "in my feels",
    excited: "hyped",
    amazing: "goated",
    love: "mad respect",
    hate: "throwing shade",
    win: "dub",
    lose: "L",
    great: "bussin'",
    angry: "heated",
    happy: "on god",
    friend: "fam",
    enemy: "op",
    party: "turnt",
    understand: "I feel you",
    fun: "vibes",
  };

  const genAlphaSentences = [
    `Bruh, ${input} is giving major vibes, no cap!`,
    `Yo, for real ${input} is straight fire, on god.`,
    `Say less, ${input} is mad lit, fr fr.`,
    `${input} is straight up bussin', big facts.`,
    `No cap, ${input} is on another level.`,
    `Deadass, ${input} just hits different.`,
    `${input}? That’s what’s up, no lie.`,
    `${input} got me in my feels, fr no joke.`,
    `Bruh, ${input} got everyone shook.`,
    `Ayo, ${input} is legendary!`,
    `Yo ${input}, that's straight fire!`,
    `${input} is bussin', fr fr.`,
    `Bruh, ${input} is giving major vibes.`,
    `No cap, ${input} just hits different.`,
    `${input} finna slap hard, no kizzy.`,
    `${input} is a whole mood, on god.`,
    `That ${input} be poppin' off!`,
    `Sheesh, ${input} just went viral!`,
    `${input}? That's lit, no cap!`,
    `Deadass, ${input} just broke the internet.`,
    `Lowkey, ${input} is a vibe!`,
    `That ${input} got me in my feels, no lie.`,
    `${input} be straight vibing, real talk.`,
    `Straight up, ${input} is next level.`,
    `${input}? It's mad dope, like fr fr.`,
    `You really out here with that ${input}, big W!`,
    `Major flex, ${input} is pure heat.`,
    `Bet, ${input} 'bout to take over, no doubt.`,
    `${input} is just straight dripping, no joke.`,
    `Yo, ${input} is straight-up bussin' respectfully.`,
    `Bruh, you really did ${input} like that? It's a vibe!`,
    `${input} is goated, no cap.`,
    `That's on period, ${input} slaps!`,
    `On god, ${input} be the real MVP.`,
    `Sksksks, ${input} is giving what it needs to give.`,
    `Deadass, ${input} is straight-up heat.`,
    `Straight facts, ${input} is a W move.`,
    `${input} got that sauce, no lie.`,
    `Chill, ${input} is straight icy!`,
    `Say less, ${input} got mad drip.`,
    `Issa vibe, ${input} got everyone shook.`,
    `Real talk, ${input} is major fire.`,
    `Frfr, ${input} is gonna blow up.`,
    `No kizzy, ${input} be on another level.`,
    `${input} is peak, no joke.`,
    `Bet, ${input} is straight savage!`,
    `Bruh, that ${input} is kinda crazy.`,
    `Big facts, ${input} goes hard.`,
    `${input}? Straight winning, no doubt.`,
    `Deadass, ${input} is legendary.`,
  ];

  const handleTranslate = () => {
    let translatedText = input;

    for (const [key, value] of Object.entries(slangDictionary)) {
      const regex = new RegExp(`\\b${key}\\b`, "gi");
      translatedText = translatedText.replace(regex, value);
    }

    const randomSentence = genAlphaSentences[
      Math.floor(Math.random() * genAlphaSentences.length)
    ].replace(`${input}`, translatedText);

    setOutput(randomSentence);
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
