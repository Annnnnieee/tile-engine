import { Tile } from "./tile";

const tileset: { [key: number]: Tile } = {
    0: {
        description: "grass",
        color: "green"
    },
    1: {
        description: "water",
        color: "blue"
    },
};

export default tileset;