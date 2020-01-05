import { WorldMap } from './worldmap';
import { Renderer } from './renderer';

export default class Core {

    private requestAnimationFrame: Function;
    private renderer: Renderer;
    private map: WorldMap | undefined;
    
    constructor(requestAnimationFrame: Function, canvas: HTMLCanvasElement) {
        this.requestAnimationFrame = requestAnimationFrame;
        this.renderer = new Renderer(canvas);
    }
    
    public setMap(map: WorldMap): void {
        this.map = map;
    }
    
    public init(): void {
        if (!this.map) {
            throw new Error("No map set");
        }

        console.log(this.requestAnimationFrame);
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