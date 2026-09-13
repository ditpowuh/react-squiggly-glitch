"use client";
import styles from "./SquigglyMorphGlitch.module.css";
import {useId} from "react";

import {getHashFromID} from "../utility";

export interface SquigglyMorphGlitchProps {
  children?: React.ReactNode;
  rate?: number;
  mode?: "smooth" | "sharp";
  frequency?: [number, number] | number;
  layers?: number;
  noiseScale?: [number, number] | number;
  active?: boolean;
}

export function SquigglyMorphGlitch({children, rate = 5000, mode = "smooth", frequency = 0.1, layers = 1, noiseScale = [5, 15], active = true}: SquigglyMorphGlitchProps) {
  const uniqueID = useId().replace(/:/g, "");
  const filterID = `squiggly-filter-${uniqueID}`;

  const seed = getHashFromID(uniqueID);

  const inlineStyles = {
    "--glitch-id": `url(#${filterID})`,
  } as React.CSSProperties;

  const turbulenceFrequency: number | string = typeof frequency === "number" ? frequency : `${frequency[0]} ${frequency[1]}`;
  let animatedScale: string = "";
  if (typeof noiseScale === "number") {
    if (noiseScale >= 0) {
      animatedScale = `${noiseScale};-${noiseScale};${noiseScale}`;
    }
    else {
      animatedScale = `-${-noiseScale};${-noiseScale};-${-noiseScale}`;
    }
  }
  else {
    animatedScale = `${noiseScale[0]};${noiseScale[1]};${noiseScale[0]}`;
  }

  return (
    <>
      <svg className={styles.hiddensvg} aria-hidden>
        <defs>
          <filter id={filterID}>
            <feTurbulence type={mode === "smooth" ? "fractalNoise" : "turbulence"} baseFrequency={turbulenceFrequency} numOctaves={layers} result="noise" seed={seed + 1}/>
            <feDisplacementMap in="SourceGraphic" in2="noise">
              <animate attributeName="scale" values={animatedScale} dur={`${rate / 1000}s`} repeatCount="indefinite"/>
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div className={active ? styles.active : ""} style={inlineStyles}>
        {children}
      </div>
    </>
  );
}
