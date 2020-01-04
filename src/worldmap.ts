import { Tile } from "./tile";
import tileset from './tileset';

export class WorldMap {
    private tiles: number[][];

    constructor(tiles: number[][]) {
        this.tiles = tiles;
    }

    public getWidth(): number {
        return this.tiles.length || 0;
    }

    public getHeight(): number {
        return this.tiles.length > 0 ?
            this.tiles[0].length
            :
            0;
    }

    public getTile(x: number, y: number): Tile {
        return tileset[this.tiles[x][y]];
    }
}