import { WorldMap } from './worldmap';
import { PlayerData } from './playerdata';
import RenderStrategy from './renderstrategy';
import LoopStrategy from './loopstrategy';

export default class Core {

    private loopStrategy: LoopStrategy;
    private renderer: RenderStrategy;
    private map: WorldMap | undefined;
    private player: PlayerData;
    
    constructor(loopStrategy: LoopStrategy, renderStrategy: RenderStrategy) {
        this.loopStrategy = loopStrategy;
        this.player = {
            position: {
                x: 10,
                y: 10
            },
            color: "red"
        };
        this.renderer = renderStrategy;
    }
    
    public setLoopStrategy(loopStrategy: LoopStrategy) {
        this.loopStrategy = loopStrategy;
    }

    public setMap(map: WorldMap): void {
        this.map = map;
    }
    
    public init(): void {
        if (!this.map) {
            throw new Error("No map set");
        }

        this.loopStrategy.run(this);
    }
    
    public tick(elapsedMs: number): void {
        this.renderer.renderWorld(this.map!, 0, 0);
    }
}