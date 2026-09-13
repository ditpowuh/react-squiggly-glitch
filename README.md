# react-squiggly-glitch

React Squiggly Glitch is a lightweight React component library that uses svg filters to apply a glitch or shaky effect to any element.

This was inspired and based on [react-glitch-effect](https://www.npmjs.com/package/react-glitch-effect)'s `GlitchSquiggly`.

> Note that there are some limitations - for example, upon testing on iOS, the effect is not visible on a `<video/>` element, but is otherwise visible on a desktop device.

### Demo
Check out the demo [here](https://react-squiggly-glitch.ditpowuh.com/) to see and play around with the different effects.

### Usage
To use the component (the main one), first import `SquigglyGlitch` into your file:
```tsx
import {SquigglyGlitch} from "react-squiggly-glitch";
```
Then wrap the `<SquigglyGlitch>` tags around any component or element you would like to apply the effect on.
```tsx
<SquigglyGlitch>
  <img src="cat.png" alt="it could be an image!"/>
</SquigglyGlitch>
```
```tsx
<SquigglyGlitch>
  <div>it could be text!</div>
</SquigglyGlitch>
```
```tsx
<SquigglyGlitch>
  <AnotherComponent value="it could be anything!"/>
</SquigglyGlitch>
```

For the morph effect, use `SquigglyMorphGlitch`:
```tsx
import {SquigglyMorphGlitch} from "react-squiggly-glitch";
```
```tsx
<SquigglyMorphGlitch>
  <div>whoa! i'm morphing!</div>
</SquigglyMorphGlitch>
```

### Props
#### SquigglyGlitch
| Prop       | Type                           | Default  | Description                                                               |
| ---------- | ------------------------------ | -------- | ------------------------------------------------------------------------- |
| children   | `React.ReactNode`              | None     | Element(s) to apply glitch effect to                                      |
| rate       | `number`                       | `500`    | Duration of each frame in `ms`                                            |
| mode       | `smooth` or `sharp`            | `smooth` | Change visual style of effect (internally is fractalNoise and turbulence) |
| frequency  | `number` or `[number, number]` | `0.25`   | Base frequency parameter for the noise function                           |
| layers     | `number`                       | `2`      | The number of octaves for the noise function                              |
| noiseScale | `number`                       | `5`      | Defines the displacement scale factor to be used                          |
| active     | `boolean`                      | `true`   | Disables or enables the effect                                            |

#### SquigglyMorphGlitch
| Prop       | Type                           | Default   | Description                                                               |
| ---------- | ------------------------------ | --------  | ------------------------------------------------------------------------- |
| children   | `React.ReactNode`              | None      | Element(s) to apply morph glitch effect to                                |
| rate       | `number`                       | `5000`    | Duration of the morph animation in `ms`                                   |
| mode       | `smooth` or `sharp`            | `smooth`  | Change visual style of effect (internally is fractalNoise and turbulence) |
| frequency  | `number` or `[number, number]` | `0.1`     | Base frequency parameter for the noise function                           |
| layers     | `number`                       | `1`       | The number of octaves for the noise function                              |
| noiseScale | `number` or `[number, number]` | `[5, 15]` | Defines the displacement scale factor to be used in the animation         |
| active     | `boolean`                      | `true`    | Disables or enables the effect                                            |

### Presets
#### SquigglyGlitch
The package comes with several presets for `SquigglyGlitch`:
- `DEFAULT_PRESET`
- `SKETCHY_PRESET`
- `GRAINY_PRESET`
- `WATERCOLOR_PRESET`
- `VHS_PRESET`

And for `SquigglyMorphGlitch` too:
- `DEFAULT_PRESET`
- `WATER_PRESET`
- `BLUR_PRESET`

They can be used like this:
```tsx
// Import the SquigglyGlitch component!
import {SquigglyGlitch} from "react-squiggly-glitch";
// Import a preset like this!
import {VHS_PRESET} from "react-squiggly-glitch/presets/SquigglyGlitch";

export function MyComponent() {
  // Use the preset like this!
  return (
    <SquigglyGlitch {...VHS_PRESET}>
      <div>hello world!</div>
    </SquigglyGlitch>
  );
}

export function AnotherComponent() {
  // Override props from the preset like this!
  return (
    <SquigglyGlitch {...VHS_PRESET} rate={500}>
      <div>another example!</div>
    </SquigglyGlitch>
  );
}

// Let's try it with the morph component!
import {SquigglyMorphGlitch} from "react-squiggly-glitch";

import {WATER_PRESET} from "react-squiggly-glitch/presets/SquigglyMorphGlitch";

export function MyMorphComponent() {
  // Use the preset like this!
  return (
    <SquigglyMorphGlitch {...WATER_PRESET}>
      <div>hello world!</div>
    </SquigglyMorphGlitch>
  );
}
```
