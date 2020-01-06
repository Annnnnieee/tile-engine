import { WorldMap } from './worldmap';
import { PlayerData } from './playerdata';
import Renderer from './renderer';
import GameLoop from './gameloop';

export default class Core {

    private gameLoop: GameLoop;
    private renderer: Renderer;
    private map: WorldMap | undefined;
    private player: PlayerData;
    
    constructor(gameLoop: GameLoop, renderer: Renderer) {
        this.gameLoop = gameLoop;
        this.player = {
            position: {
                x: 10,
                y: 10
            },
            color: "red"
        };
        this.renderer = renderer;
    }
    
    public setGameLoop(loopStrategy: GameLoop) {
        this.gameLoop = loopStrategy;
    }

    public setMap(map: WorldMap): void {
        this.map = map;
    }
    
    public init(): void {
        if (!this.map) {
            throw new Error("No map set");
        }

        this.gameLoop.run(this);
    }
    
    public tick(elapsedMs: number): void {
        this.renderer.renderWorld(this.map!, 0, 0);
    }
}