import { WorldMap } from "../worldmap";

export default interface Renderer {
    renderWorld(worldMap: WorldMap, startIndex: number, offset: number): void;
};