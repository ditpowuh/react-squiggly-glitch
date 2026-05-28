"use client";
import styles from "./SquigglyGlitch.module.css";
import {useId} from "react";

interface SquigglyGlitchProps {
  children?: React.ReactNode;
  rate?: number;
  mode?: "smooth" | "sharp";
  frequency?: [number, number] | number;
  layers?: number;
  noiseScale?: number;
  active?: boolean;
}

export function SquigglyGlitch({children, rate = 500, mode = "smooth", frequency = 0.25, layers = 2, noiseScale = 5, active = true}: SquigglyGlitchProps) {
  const uniqueID = useId().replace(/:/g, "");
  const filterIDPrefix = `squiggly-filter-${uniqueID}`;

  const filterSteps = Array.from({length: 5});

  const inlineStyles: React.CSSProperties = {
    "--glitch-rate": `${rate}ms`,
    "--glitch-id-0": `url(#${filterIDPrefix}-0)`,
    "--glitch-id-1": `url(#${filterIDPrefix}-1)`,
    "--glitch-id-2": `url(#${filterIDPrefix}-2)`,
    "--glitch-id-3": `url(#${filterIDPrefix}-3)`,
    "--glitch-id-4": `url(#${filterIDPrefix}-4)`,
  };

  const turbulenceFrequency: number | string = typeof frequency === "number" ? frequency : `${frequency[0]} ${frequency[1]}`;

  return (
    <>
      <svg className={styles.hiddensvg} aria-hidden>
        <defs>
          {
            filterSteps.map((_, index) => (
              <filter id={`${filterIDPrefix}-${index}`} key={index}>
                <feTurbulence type={mode === "smooth" ? "fractalNoise" : "turbulence"} baseFrequency={turbulenceFrequency} numOctaves={layers} result="noise" seed={index + 1}/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale={noiseScale}/>
              </filter>
            ))
          }
        </defs>
      </svg>
      <div className={active ? styles.active : ""} style={inlineStyles}>
        {children}
      </div>
    </>
  );
}
