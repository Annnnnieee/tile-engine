import { WorldMap } from './worldmap';
import Core from './core';
import BrowserGameLoop from './gameloop/browserloopstrategy';
import BrowserRenderer from './renderer/browserrenderstrategy';
import BrowserInput from './input/browserinput';
import ActiveWindow from './activewindow';

(function(window) {

    const worldmap = new WorldMap([
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 0]
    ]);

    const gameLoop = new BrowserGameLoop(window);
    const renderer = new BrowserRenderer(window);
    const input = new BrowserInput(window);
    const activeWindow = new ActiveWindow();
    const core = new Core(gameLoop, renderer, input, activeWindow);
    
    core.setMap(worldmap);
    core.init();
})(window);
