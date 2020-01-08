import { WorldMap } from "./worldmap";
import PlayerData from "./playerdata";

export default class ActiveWindow {
    private windowWidth: number | undefined;
    private tileWidth: number | undefined;
    private frameOffset: number;
    private totalMapLength: number | undefined;

    constructor(){
        this.frameOffset = 0;
    }

    init(worldMap: WorldMap, windowWidth: number, tileWidth: number): void {
        this.windowWidth = windowWidth;
        this.tileWidth = tileWidth;
        this.totalMapLength = this.tileWidth*worldMap.getNumColumns();
    }

    updateFrame(playerData: PlayerData): void{
        if(this.isPlayerAtLeftMapEdge(playerData)){
            this.frameOffset = 0;
        }
        else if(this.isPlayerAtRightMapEdge(playerData)){
            this.frameOffset = this.totalMapLength! - this.windowWidth!;
        }
        else {
            this.frameOffset = playerData.position.x - this.windowWidth!/2;
        }
    }

    getStartIndex(): number {
        return this.frameOffset/this.tileWidth!;
    }

    getTileOffset(): number {
        const tileIndex = this.frameOffset/this.tileWidth!;
        return this.frameOffset - (tileIndex * this.tileWidth!);
    }

    getRelativePosition(xPosition: number): number {
        return xPosition - this.frameOffset;
    }

    getLength(){
        return this.windowWidth;
    }

    private isPlayerAtLeftMapEdge(playerData: PlayerData){
        return playerData.position.x <= this.windowWidth!/2;
    }

    private isPlayerAtRightMapEdge(playerData: PlayerData){
        return playerData.position.x >= this.totalMapLength! - (this.windowWidth!/2);
    }
} 