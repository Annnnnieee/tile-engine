import { WorldMap } from './worldmap';
import {Renderer} from './renderer';
import Core from './core';

(function(window) {
    
    const worldmap = new WorldMap([
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 0]
    ]);

    let coreRef: Core; //hacky..
    const requestAnimationFrame = function(callback: FrameRequestCallback) {
        return window.requestAnimationFrame.call(window, callback.bind(coreRef));
    };
    const canvas = <HTMLCanvasElement> window.document.getElementById("canvas");
    const core = new Core(requestAnimationFrame, canvas);
    coreRef = core;
    
    core.setMap(worldmap);
    core.init();
})(window);
