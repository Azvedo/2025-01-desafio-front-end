"use client";
import { Typewriter } from "react-simple-typewriter";

interface TypewriterProps {
  words: string[];
}

export default function TypewriterEffect({ words }: TypewriterProps) {
  return (
    <h1 className="text-xl font-bold text-center">
      <Typewriter
        words={words}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={0}
      />
    </h1>
  );
}
