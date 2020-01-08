import { WorldMap } from "../worldmap";
import ActiveWindow from "../activewindow";
import PlayerData from "../playerdata";

export default interface Renderer {
    renderWorld(worldMap: WorldMap, activeFrame: ActiveWindow): void;
    renderPlayer(player: PlayerData, activeFrame: ActiveWindow): void;
    getWindowWidth(): number;
    getTileWidth(): number;
};