"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useRef, useState } from "react";

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
  if (window && typeof window !== 'undefined' && window.AdobeAn && window.createjs) {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("43D59298A37CE247BFAC71FF180991A9");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  } else {
    setTimeout(() => {
      init()
    }, 200)
  }
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
  try {
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }

    exportRoot = new lib.ui();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
      stage.addChild(exportRoot);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container], stage);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
    //Code to support hidpi screens and responsive scaling.
  } catch (error) {
    console.log('error', error)
    init();
  }
}
export default function Chart() {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  const loadScript = () => {
    setTimeout(() => {
      init();
    }, 500);

    // const scriptCreateJS = document.createElement("script");
    // scriptCreateJS.setAttribute("src", "https://code.createjs.com/1.0.0/createjs.min.js");
    // document.body.appendChild(scriptCreateJS);

    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/map-ui.js");
    document.body.appendChild(script);
  };

  useEffect(() => {
    // Initialize the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the observed element is in the viewport
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Load script only when div is visible
      loadScript();
    }
    return () => {
      // cleanup the script element when the component is unmounted
      // const scriptCreateJSElement = document.querySelector('script[src*="createjs.min.js"]');
      // if (scriptCreateJSElement) scriptCreateJSElement.remove();
      const scriptUIElement = document.querySelector('script[src*="map-ui.js"]');

      if (scriptUIElement) scriptUIElement.remove();
    };
  }, [isVisible]);



  return (
    <div className="overflow-clip mx-auto flex flex-col justify-center items-center" ref={animationRef}>
      <div id="animation_container" style={{ backgroundColor: "rgba(18, 59, 71, 1.00)", position: "relative", height: "200px", width: "800px" }}>
        <canvas id="canvas" width="800" height="200" style={{ position: "absolute", backgroundColor: "transparent" }}></canvas>
        <div id="dom_overlay_container" style={{ pointerEvents: "none", overflow: "hidden", position: "absolute", left: 0, top: 0, display: "block" }}></div>
      </div>
    </div>
  );
}
