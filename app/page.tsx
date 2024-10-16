"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Zap } from "lucide-react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
    `${input}? That's what's up, no lie.`,
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
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="z-10 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Skibidi Translator
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
        <div className="p-6 space-y-4">
          <textarea
            className="w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg resize-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to translate"
          />
          <button
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            onClick={handleTranslate}
          >
            <Zap size={20} />
            <span>Translate</span>
          </button>
          <textarea
            className="w-full p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg resize-none"
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
