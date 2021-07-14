import "./styles.css";
import * as ogv from "ogv";
import { useEffect, useRef } from "react";

export default function App() {
  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const rootContainer = useRef(null);

  useEffect(() => {
    ogv.OGVLoader.base = "/ogvjs-1.8.4";
    const player = new ogv.OGVPlayer({ debug: true, debugFilter: /demuxer/ });
    rootContainer.current.appendChild(player);
    player.src = "/sample-30s.webm";
    player.muted = true;
    player.play();
    console.log({ player, ogv });
  }, []);

  return <div className="App" ref={rootContainer}></div>;
}
