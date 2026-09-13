import styles from "./App.module.css";
import {useState} from "react";

import {SquigglyGlitch, SquigglyMorphGlitch} from "../lib/main";
import {SKETCHY_PRESET, WATERCOLOR_PRESET, VHS_PRESET, GRAINY_PRESET} from "../lib/constants/presets/squigglyglitch";
import {WATER_PRESET, BLUR_PRESET} from "../lib/constants/presets/squigglymorphglitch";

import springImage from "./assets/Spring.jpg";
import grootImage from "./assets/Groot.jpg";
import cityImage from "./assets/City.jpg";
import techDeskImage from "./assets/Desk.jpg";
import leavesImage from "./assets/Leaves.jpg";
import forestImage from "./assets/Forest.jpg";
import fishImage from "./assets/Fish.png";
import catImage from "./assets/Cat.jpg";

import viteLogo from "./assets/Vite.svg";
import sunsetGif from "./assets/Sunset.gif";
import waterVideo from "./assets/Water.mp4";

export default function App() {
  const [rate, setRate] = useState<number>(500);
  const [mode, setMode] = useState<"smooth" | "sharp">("smooth");
  const [frequency, setFrequency] = useState<number>(0.25);
  const [layers, setLayers] = useState<number>(2);
  const [noiseScale, setNoiseScale] = useState<number>(5);
  const [active, setActive] = useState<boolean>(true);
  const [image, setImage] = useState<string>(springImage);

  const handlePlaygroundImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/avif", "image/apng", "image/bmp"];

      if (allowedTypes.includes(file.type)) {
        const localUrl = URL.createObjectURL(file);
        setImage(localUrl);
      }
    }
  }

  return (
    <main className={styles.content}>
      <section>
        <SquigglyGlitch {...WATERCOLOR_PRESET}>
          <div className={styles.welcome}>Welcome.</div>
        </SquigglyGlitch>
        <SquigglyGlitch {...VHS_PRESET} rate={1000}>
          <div className={styles.between}>This is...</div>
        </SquigglyGlitch>
        <SquigglyGlitch {...GRAINY_PRESET}>
          <div className={styles.heading}>React Squiggly Glitch</div>
        </SquigglyGlitch>
      </section>
      <div className={styles.description}>
        <div>
          <strong>React Squiggly Glitch</strong> is a lightweight React component that uses svg filters to apply a glitch or shaky effect to any element.
        </div>
        <div>
          This was inspired and based on <a href="https://www.npmjs.com/package/react-glitch-effect" target="_blank" rel="noopener noreferrer">react-glitch-effect</a>'s <strong>GlitchSquiggly</strong>.
        </div>
        <div>
          For more information and examples of how to use in code, check out the <a href="https://github.com/ditpowuh/react-squiggly-glitch" target="_blank" rel="noopener noreferrer">GitHub repository</a> or the <a href="https://www.npmjs.com/package/react-squiggly-glitch" target="_blank" rel="noopener noreferrer">npm page</a>.
          <div className={styles.tiny}>
            Tested with <strong>Vite</strong> and <strong>Next.JS</strong>!
          </div>
        </div>
      </div>
      <div>
        <SquigglyGlitch {...WATERCOLOR_PRESET}>
          <div className={styles.subheading}>Play around!</div>
        </SquigglyGlitch>
      </div>
      <div>
        <SquigglyGlitch rate={rate} mode={mode} frequency={frequency} layers={layers} noiseScale={noiseScale} active={active}>
          <img className={styles.bigexample} src={image}/>
        </SquigglyGlitch>
        <div className={styles.settings}>
          <div>
            <input id="file" type="file" accept="image/*" onChange={handlePlaygroundImage}/>
            <label htmlFor="file">Upload file</label>
          </div>
          <div>
            <label>{`Rate (${rate}):`}</label>
            <br/>
            <input type="range" min={100} max={2000} value={rate} step={50} onChange={(e) => setRate(Number(e.target.value))}/>
          </div>
          <div>
            <label>{`Mode:`}</label>
            <br/>
            <select value={mode} onChange={(e) => setMode(e.target.value as "smooth" | "sharp")}>
              <option value="smooth">Smooth</option>
              <option value="sharp">Sharp</option>
            </select>
          </div>
          <div>
            <label>{`Frequency (${frequency}):`}</label>
            <br/>
            <input type="range" min={0} max={1} value={frequency} step={0.01} onChange={(e) => setFrequency(Number(e.target.value))}/>
          </div>
          <div>
            <label>{`Layers (${layers}):`}</label>
            <br/>
            <input type="range" min={0} max={10} value={layers} step={1} onChange={(e) => setLayers(Number(e.target.value))}/>
          </div>
          <div>
            <label>{`Noise scale (${noiseScale}):`}</label>
            <br/>
            <input type="range" min={-10} max={10} value={noiseScale} step={0.5} onChange={(e) => setNoiseScale(Number(e.target.value))}/>
          </div>
          <div>
            <label>{`Active (${active}):`}</label>
            <br/>
            <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)}/>
          </div>
        </div>
      </div>
      <div>
        <SquigglyGlitch {...WATERCOLOR_PRESET}>
          <div className={styles.subheading}>Examples below!</div>
        </SquigglyGlitch>
      </div>
      <div className={styles.examples}>
        <div>
          <SquigglyGlitch>
            <img className={styles.bigexample} src={techDeskImage}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>This is using the preset DEFAULT_PRESET</div>
        </div>
        <div>
          <SquigglyGlitch {...SKETCHY_PRESET}>
            <img className={styles.bigexample} src={grootImage}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>This is using the preset SKETCHY_PRESET</div>
        </div>
        <div>
          <SquigglyGlitch {...VHS_PRESET}>
            <img className={styles.bigexample} src={cityImage}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>This is using the preset VHS_PRESET</div>
        </div>
        <div>
          <SquigglyGlitch {...WATERCOLOR_PRESET} rate={500}>
            <img className={styles.bigexample} src={leavesImage}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>This is using the preset WATERCOLOR_PRESET</div>
        </div>
      </div>
      <div>
        <SquigglyGlitch {...WATERCOLOR_PRESET}>
          <div className={styles.subheading}>Even more examples!</div>
        </SquigglyGlitch>
      </div>
      <div className={styles.examples}>
        <div>
          <SquigglyGlitch>
            <img className={styles.smallexample} src={viteLogo}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>Works with svg files (and other formats with transparency)</div>
        </div>
        <div>
          <SquigglyGlitch>
            <img className={styles.smallexample} src={sunsetGif}/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>Works with animated content such as a gif...</div>
        </div>
        <div>
          <SquigglyGlitch {...VHS_PRESET}>
            <video className={styles.bigexample} src={waterVideo} controls autoPlay loop muted playsInline/>
          </SquigglyGlitch>
          <div className={styles.examplenote}>...and video too?</div>
          <div>about that... i found that it did not work with video on iOS :(</div>
          <div>but it still works fine with desktop!</div>
        </div>
      </div>
      <br/>
      <div>
        <SquigglyMorphGlitch noiseScale={[5, 10]}>
          <div className={styles.morphintro}>A new challenger approaches...</div>
        </SquigglyMorphGlitch>
        <div>Another component has been added... <strong>SquigglyMorphGlitch</strong>!</div>
        <div className={styles.examples}>
          <div>
            <SquigglyMorphGlitch>
              <img className={styles.bigexample} src={forestImage}/>
            </SquigglyMorphGlitch>
            <div className={styles.examplenote}>This is using the preset DEFAULT_PRESET</div>
          </div>
          <div>
            <SquigglyMorphGlitch {...WATER_PRESET}>
              <img className={styles.bigexample} src={fishImage}/>
            </SquigglyMorphGlitch>
            <div className={styles.examplenote}>This is using the preset WATER_PRESET</div>
          </div>
          <div>
            <SquigglyMorphGlitch {...BLUR_PRESET}>
              <img className={styles.bigexample} src={catImage}/>
            </SquigglyMorphGlitch>
            <div className={styles.examplenote}>This is using the preset BLUR_PRESET</div>
          </div>
        </div>
      </div>
      <div className={styles.note}>
        <div>All visuals are from <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a> and <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>.</div>
        <div className={styles.tiny}>(apart from the vite logo... which obviously is from vite)</div>
      </div>
    </main>
  );
}
