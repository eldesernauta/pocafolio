"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

export const TextGenerateEffect = ({
  words,
  paragraph2,
  className,
  align,
  textColor = "white",
}: {
  words: string;
  paragraph2: string;
  className?: string;
  align?: string;
  textColor?: "black" | "white";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  let wordsArray = words.split(" ");
  let pArray = paragraph2.split(" ");

  useEffect(() => {
    if (containerRef.current) {
      const targets = containerRef.current.querySelectorAll("span");

      gsap.fromTo(
        targets,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${
                textColor === "black" ? "text-black" : "text-white"
              }`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
        <br />
        <br />
        {pArray.map((p, idx) => {
          return (
            <motion.span
              key={p + idx}
              className={`opacity-0 ${
                textColor === "black" ? "text-black" : "text-white"
              }`}
            >
              {p}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div
        className={`${
          align === "center"
            ? "w-full md:w-9/12 px-4 md:px-0 mx-auto"
            : "w-full"
        }`}
        ref={containerRef}
      >
        <div
          className={`${align === "center" ? "text-center" : "text-left"} ${
            textColor === "black" ? "text-black" : "text-white"
          } font-medium text-2xl md:text-3xl leading-snug tracking-wide`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
