import { WorldMap } from './worldmap';
import Core from './core';
import BrowserLoopStrategy from './loopstrategy/browserloopstrategy';
import BrowserRenderStrategy from './renderstrategy/browserrenderstrategy';

(function(window) {
    
    const worldmap = new WorldMap([
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 0]
    ]);

    const loopStrategy = new BrowserLoopStrategy(window);
    const renderStrategy = new BrowserRenderStrategy(window);
    const core = new Core(loopStrategy, renderStrategy);
    
    core.setMap(worldmap);
    core.init();
})(window);
