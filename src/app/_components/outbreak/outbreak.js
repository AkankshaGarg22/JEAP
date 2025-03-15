"use client";
import { useMediaQuery } from "@react-hook/media-query";
import React, { useState } from "react";
import { useEffect } from "react";

var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;

function init() {
  if (
    window &&
    typeof window !== "undefined" &&
    window.AdobeAn &&
    window.createjs
  ) {
    canvas = document.getElementById("canvas-outbreak");
    anim_container = document.getElementById("animation_container_outbreak");
    dom_overlay_container = document.getElementById("dom_overlay_container_outbreak");
    var comp=AdobeAn.getComposition("43D59298A37CE247BFAC71FF180991A9");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(let i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}

	exportRoot = new lib.ui();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	// AdobeAn.makeResponsive(true,'both',true,1,[canvas, anim_container,dom_overlay_container], stage);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

export function Outbreak(isVisible) {
  const isXlScreen = useMediaQuery("only screen and (min-width: 1280px)"); // adjust the breakpoint as needed

  useEffect(() => {
    if (isVisible?.isVisible && isXlScreen) {
      loadDesktopScript();
    } else if (isVisible.isVisible) {
      loadScript();
    }

    return () => {
      // cleanup the script element when the component is unmounted
      let script;
      if (!isXlScreen) {
        script = document.querySelector(
          'script[src*="outbreak-mobile.js"]'
        );
      } else {
        script = document.querySelector(
          'script[src*="outbreak-desktop.js"]'
        );
      }
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
    script.setAttribute("src", "/scripts/outbreak-mobile.js");
    document.body.appendChild(script);
  };

  const loadDesktopScript = () => {
    setTimeout(() => {
      init();
    }, 500);
    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/outbreak-desktop.js");
    document.body.appendChild(script);
  };

  return (
    <div>
      <div
        id="animation_container_outbreak"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%"
        }}
        className="absolute bottom-[100%]"
      >
        <canvas
          id="canvas-outbreak"
          width="1200" height="300"
        ></canvas>
        <div
          id="dom_overlay_container_outbreak"
          style={{
            pointerEvents: "none",
            overflow: "hidden",
            position: "absolute",
            left: "0px",
            top: "0px"
          }}
        ></div>
      </div>
      <p className="text-xl text-balance p-4 flex text-center align-center justify-center my-20 pt-[20px]">
      A crucial component of the JEAP is the 7-1-7 strategy which is a comprehensive approach to enhancing global health security. By promoting timely and effective actions in response to infectious disease outbreaks and public health threats, the 7-1-7 strategy has transformative potential to the way the African Region responds to health emergencies. The approach addresses the need for swift detection, notification, and response to potential epidemics, and aims to prevent their escalation and global spread. The strategy sets clear performance standards for three key timeframes: detecting a suspected disease outbreak within 7 days, notifying relevant public health authorities within 1 day, and executing early response actions within 7 days.
      </p>
      </div>
  );
}

export default Outbreak;
