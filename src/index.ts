import { WorldMap } from './worldmap';
import Core from './core';
import BrowserGameLoop from './gameloop/browserloopstrategy';
import BrowserRenderer from './renderer/browserrenderstrategy';

(function(window) {
    
    const worldmap = new WorldMap([
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 0]
    ]);

    const gameLoop = new BrowserGameLoop(window);
    const renderer = new BrowserRenderer(window);
    const core = new Core(gameLoop, renderer);
    
    core.setMap(worldmap);
    core.init();
})(window);
