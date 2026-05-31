# react-squiggly-glitch

React Squiggly Glitch is a lightweight React component that uses svg filters to apply a glitch or shaky effect to any element.

This was inspired and based on [react-glitch-effect](https://www.npmjs.com/package/react-glitch-effect)'s `GlitchSquiggly`.

> Note that there are some limitations - for example, upon testing on iOS, the effect is not visible on a `<video/>` element, but is otherwise visible on a desktop device.

### Usage
To use the component, first import `SquigglyGlitch` into your file:
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

### Props
| Prop       | Type                           | Default  | Description                                                               |
| ---------- | ------------------------------ | -------- | ------------------------------------------------------------------------- |
| children   | `React.ReactNode`              | None     | Element(s) to apply glitch effect to                                      |
| rate       | `number`                       | `500`    | Duration of each frame in `ms`                                            |
| mode       | `smooth` or `sharp`            | `smooth` | Change visual style of effect (internally is fractalNoise and turbulence) |
| frequency  | `number` or `[number, number]` | `0.25`   | Base frequency parameter for the noise function                           |
| layers     | `number`                       | `2`      | The number of octaves for the noise function                              |
| noiseScale | `number`                       | `5`      | Defines the displacement scale factor to be used                          |
| active     | `boolean`                      | `true`   |

### Presets
The package comes with several presets:
- `DEFAULT_PRESET`
- `SKETCHY_PRESET`
- `GRAINY_PRESET`
- `WATERCOLOR_PRESET`
- `VHS_PRESET`

They can be used like this:
```tsx
// Import the component and the preset(s) you want.
import {SquigglyGlitch, VHS_PRESET} from "react-squiggly-glitch";

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
```
