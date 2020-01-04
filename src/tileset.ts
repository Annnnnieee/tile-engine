import { Tile } from "./tile";

const tileset: { [key: number]: Tile } = {
    0: {
        description: "water",
        color: "blue"
    },
    1: {
        description: "grass",
        color: "green"
    }
};

export default tileset;