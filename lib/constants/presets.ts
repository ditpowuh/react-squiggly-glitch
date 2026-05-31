import type {SquigglyGlitchProps} from "../components/SquigglyGlitch";

export const DEFAULT_PRESET: SquigglyGlitchProps = {
  rate: 500,
  mode: "smooth",
  frequency: 0.25,
  layers: 2,
  noiseScale: 5
};

export const SKETCHY_PRESET: SquigglyGlitchProps = {
  rate: 500,
  mode: "sharp",
  frequency: 0.25,
  layers: 2,
  noiseScale: 10
};

export const GRAINY_PRESET: SquigglyGlitchProps = {
  rate: 500,
  mode: "smooth",
  frequency: 1,
  layers: 1,
  noiseScale: 5
};

export const WATERCOLOR_PRESET: SquigglyGlitchProps = {
  rate: 1000,
  mode: "sharp",
  frequency: 0.05,
  layers: 2,
  noiseScale: 5
};

export const VHS_PRESET: SquigglyGlitchProps = {
  rate: 200,
  mode: "sharp",
  frequency: [0.1, 1],
  layers: 1,
  noiseScale: 5
};
