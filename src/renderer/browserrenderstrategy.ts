import { WorldMap } from "../worldmap";
import Renderer from '.';
import ActiveWindow from "../activewindow";
import PlayerData from "../playerdata";

export default class BrowserRenderer implements Renderer {
    private tileWidth = 60;
    private tileHeight = 60;
    private windowWidth: number;
    private windowHeight: number;

    private ctx: any;

    constructor(window: Window) {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        const canvas = <HTMLCanvasElement> window.document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.ctx.canvas.width = this.windowWidth;
        this.ctx.canvas.height = this.windowHeight;
    }

    renderWorld(worldMap: WorldMap, activeWindow: ActiveWindow){
        if (!this.ctx) {
            throw new Error("Unable to acquire context from canvas");
        }

        const startIndex = activeWindow.getStartIndex();
        const offset = activeWindow.getTileOffset();

        const cols = worldMap.getNumColumns();
        const rows = worldMap.getNumRows();

        for(let r = startIndex; r < rows; r++){
            for(let c = 0; c < cols; c++){
                const tile = worldMap.getTile(c, r);
                const x = r * this.tileWidth - offset;
                const y = c * this.tileHeight;
                this.ctx.fillStyle = tile.color;    
                this.ctx.fillRect(x, y, this.tileWidth, this.tileHeight);
            }
        }

    }

    renderPlayer(player: PlayerData, activeWindow: ActiveWindow): void {
        const x = activeWindow.getRelativePosition(player.position.x);
        const y = player.position.y;
        this.ctx.fillStyle = player.getColor();
        this.ctx.fillRect(x, y, this.tileWidth, this.tileHeight);
    }

    getWindowWidth(): number{
        return this.windowWidth;
    }

    getTileWidth(): number{
        return this.tileWidth;
    }
}