"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect } from "react";

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
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
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (let i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({ images: [queue.getResult(ssMetadata[i].name)], frames: ssMetadata[i].frames });
  }
  stage = new lib.Stage(canvas);
  exportRoot = new lib.cir1(stage);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, "both", false, 1, [canvas, anim_container, dom_overlay_container], stage);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

export function OuterCircle({ isVisible }) {
  const isXlScreen = useMediaQuery("only screen and (min-width: 1280px)"); // adjust the breakpoint as needed

  useEffect(() => {
    if (isVisible && isXlScreen) {
      loadScript();
    }

    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/outer-circle.js?1714316498851");
    document.body.appendChild(script);

    return () => {
      // cleanup the script element when the component is unmounted
      const script = document.querySelector('script[src*="outer-circle.js"]');
      if (script) {
        script.remove();
      }
    };
  }, [isVisible]);

  const loadScript = () => {
    setTimeout(() => {
      init();
    }, 500);
    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/outer-circle.js?1714316498851");
    document.body.appendChild(script);
  };

  return (
    <div id="animation_container" className="hidden xl:block" style={{ width: "1024px", height: "576px" }}>
      <canvas id="canvas" width="1024" height="576" style={{ position: "absolute", display: "block" }}></canvas>
      <div id="dom_overlay_container" style={{ pointerEvents: "none", overflow: "hidden", width: "1024px", height: "576px", position: "absolute", left: "0px", top: "0px", display: "block" }}></div>
      {/* <div id='preload_div'><img src=images /preloader.gif style='width: 30%; max-height: 100%;'/><div id="loader-txt">Loading...</div></div> */}
    </div>
  );
}

export default OuterCircle;
