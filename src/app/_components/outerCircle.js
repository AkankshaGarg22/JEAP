'use client'
import { useEffect } from "react";

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("A21712AB28279C479C1EE6271A2DA330");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    stage = new lib.Stage(canvas);
    exportRoot = new lib.Forlokesh(stage);

    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container], stage);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

export function OuterCircle({ isVisible }) {

    useEffect(() => {
        if (isVisible) {
            init();
        }

        const script = document.createElement('script');
        script.setAttribute('src', "/scripts/outer-circle.js?1714316498851");
        document.body.appendChild(script);

    }, [isVisible])


    return (
        <div id="animation_container" style={{ position: 'relative' }}>
            <canvas id="canvas" style={{ display: "block", position: 'absolute' }}></canvas>
            <div id="dom_overlay_container" style={{ pointerEvents: "none", overflow: "hidden", display: "block", position: 'absolute', left: '0', top: '0' }}>
            </div>
        </div>
    );
}

export default OuterCircle;
