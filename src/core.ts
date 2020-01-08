import { WorldMap } from './worldmap';
import PlayerData from './playerdata';
import Renderer from './renderer';
import GameLoop from './gameloop';
import Input from './input';
import ActiveWindow from './activewindow';

export default class Core {

    private gameLoop: GameLoop;
    private renderer: Renderer;
    private input: Input;
    private map: WorldMap | undefined;
    private activeWindow: ActiveWindow;

    public player: PlayerData;

    
    constructor(gameLoop: GameLoop, renderer: Renderer, input: Input, activeWindow: ActiveWindow) {
        this.gameLoop = gameLoop;
        this.player = new PlayerData();
        this.renderer = renderer;
        this.input = input;
        this.activeWindow = activeWindow;
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
        this.activeWindow.init(this.map, this.renderer.getWindowWidth(), this.renderer.getTileWidth());
    }
    
    public tick(elapsedMs: number): void {
        // console.log(this.player.position);
        this.activeWindow.updateFrame(this.player);
        this.renderer.renderWorld(this.map!, this.activeWindow);
        this.renderer.renderPlayer(this.player, this.activeWindow);
    }
}