import { WorldMap } from "../worldmap";

export default interface RenderStrategy {
    renderWorld(worldMap: WorldMap, startIndex: number, offset: number): void;
};