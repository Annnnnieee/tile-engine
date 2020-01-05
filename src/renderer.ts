import { WorldMap } from "./worldmap";

export class Renderer {

    private tileWidth = 60;
    private tileHeight = 60;

    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    renderWorld(worldMap: WorldMap, startIndex: number, offset: number){
        const ctx = this.canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Unable to acquire context from canvas");
        }

        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        const cols = worldMap.getWidth();
        const rows = worldMap.getHeight();

        for(let r = startIndex; r < rows; r++){
            for(let c = 0; c < cols; c++){
                const tile = worldMap.getTile(c, r);
                const x = r * this.tileWidth - offset;
                const y = c * this.tileHeight;
                ctx.fillStyle = tile.color;    
                ctx.fillRect(x, y, this.tileWidth, this.tileHeight);
            }
        }

    }

    // render other stuff
    updateWorld(){

    }

}