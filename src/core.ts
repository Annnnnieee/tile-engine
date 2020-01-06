import { WorldMap } from './worldmap';
import PlayerData from './playerdata';
import Renderer from './renderer';
import GameLoop from './gameloop';
import Input from './input';

export default class Core {

    private gameLoop: GameLoop;
    private renderer: Renderer;
    private input: Input;
    private map: WorldMap | undefined;

    public player: PlayerData;
    
    constructor(gameLoop: GameLoop, renderer: Renderer, input: Input) {
        this.gameLoop = gameLoop;
        this.player = new PlayerData();
        this.renderer = renderer;
        this.input = input;
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

        this.gameLoop.init(this);
        this.input.init(this);
    }
    
    public tick(elapsedMs: number): void {
        console.log(this.player.position);
        this.renderer.renderWorld(this.map!, 0, 0);
    }
}