"use client";
import { useEffect } from "react";

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
  if (window && typeof window !== 'undefined' && window.AdobeAn && window.createjs) {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("A21712AB28279C479C1EE6271A2DA330");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) {
      handleFileLoad(evt, comp);
    });
    loader.addEventListener("complete", function (evt) {
      handleComplete(evt, comp);
    });
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
  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt, comp) {
  try {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (let i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({ images: [queue.getResult(ssMetadata[i].name)], frames: ssMetadata[i].frames });
  }

  exportRoot = new lib.cir2();
  stage = new lib.Stage(canvas);

  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  if (canvas) {
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, "both", false, 1, [canvas, anim_container, dom_overlay_container], stage);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
  } catch (error) {
    console.log('error', error);
    init();
  }
}

export function InnerCircle({ isVisible }) {
  useEffect(() => {
    if (isVisible) {
      loadScript();
    }

    return () => {
      // cleanup the script element when the component is unmounted
      const script = document.querySelector('script[src*="inner-circle.js"]');
      if (script) {
        script.remove();
      }
    };
  }, [isVisible]);

  const loadScript = () => {
    setTimeout(() => {
      init();
    }, 1500);
    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/inner-circle-100px.js");
    document.body.appendChild(script);
  };

  return (
    <div id="animation_container" className="absolute" style={{ height: "100px", width: "100px" }}>
      <canvas id="canvas" style={{ position: "absolute", display: "block", height: "100px", width: "100px" }}></canvas>
      <div id="dom_overlay_container" style={{ pointerEvents: "none", overflow: "hidden", position: "absolute", left: "0px", top: "0px", display: "block", height: "100px", width: "100px" }}></div>
    </div>
  );
}

export default InnerCircle;
