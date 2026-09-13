import type {SquigglyMorphGlitchProps} from "../../components/SquigglyMorphGlitch";

export const DEFAULT_PRESET: SquigglyMorphGlitchProps = {
  rate: 5000,
  mode: "smooth",
  frequency: 0.1,
  layers: 1,
  noiseScale: [5, 15]
};

export const WATER_PRESET: SquigglyMorphGlitchProps = {
  rate: 5000,
  mode: "smooth",
  frequency: 0.025,
  layers: 2,
  noiseScale: [20, 30]
};

export const BLUR_PRESET: SquigglyMorphGlitchProps = {
  rate: 5000,
  mode: "smooth",
  frequency: 0.75,
  layers: 2,
  noiseScale: [20, 100]
};
