import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// import a svg file as react component
import { ReactComponent as ReactLogo1 } from "../assets/bg/bg1.svg";
import { ReactComponent as ReactLogo2 } from "../assets/bg/bg2.svg";
import { ReactComponent as ReactLogo3 } from "../assets/bg/bg3.svg";
// import { Slideshow } from "./Slideshow";

import "../styles/bg.css";
import About from "./About";
// import ArtGallery from "./ArtGallery";
import Services from "./Services";
// import Contact from "./Contact";

function Home() {
  const parallax = useRef(!null);
  return (
    <div style={{ zIndex: "1" }}>
      <Parallax ref={parallax} pages={9}>
        <ParallaxLayer offset={0} speed={-1}>
          <div className="bgGradient"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.8}>
          <div className="Container">
            <ReactLogo1 />
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#b1b1b1",
              }}
            ></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.7}>
          <div className="Container">
            <ReactLogo2 />
            <div
              style={{
                width: "100%",
                height: "130px",
                backgroundColor: "#696969",
              }}
            ></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.6}>
          <div style={{ position: "absolute", right: "20px" }}>
            <div className="moon"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.65}>
          <div className="Container">
            <div className="Container">
              <ReactLogo3 />
            </div>

            <div
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#353535",
                position: "relative",
                top: "200px",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#353535",
                position: "relative",
                top: "200px",
              }}
            ></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.85}>
          <div className="Container">
            <div className="shiva"></div>
            <div className="bgGradient2"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <About />
            {/* <ArtGallery /> */}
            <Services />
            {/* <Contact /> */}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default Home;
