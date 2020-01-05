import { WorldMap } from './worldmap';
import { Renderer } from './renderer';
import { PlayerData } from './playerdata';

export default class Core {

    private requestAnimationFrame: Function;
    private renderer: Renderer;
    private map: WorldMap | undefined;
    private player: PlayerData;
    
    constructor(requestAnimationFrame: Function, canvas: HTMLCanvasElement) {
        this.requestAnimationFrame = requestAnimationFrame;
        this.player = {
            position: {
                x: 10,
                y: 10
            },
            color: "red"
        };
        this.renderer = new Renderer(canvas);
    }
    
    public setMap(map: WorldMap): void {
        this.map = map;
    }
    
    public init(): void {
        if (!this.map) {
            throw new Error("No map set");
        }

        this.requestAnimationFrame(this.mainLoop);
    }
    
    private previousTimestamp: number | undefined;
    private mainLoop(timestamp: number) {
        const elapsedMs = timestamp - (this.previousTimestamp || 0);
        this.previousTimestamp = timestamp;

        this.tick(elapsedMs);

        this.requestAnimationFrame(this.mainLoop);
    }

    private tick(elapsedMs: number): void {
        this.renderer.renderWorld(this.map!, 0, 0);
    }
}