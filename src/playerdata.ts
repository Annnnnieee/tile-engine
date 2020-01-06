import Coordinates from './coordinates';
import Direction from './direction';

export default class PlayerData {
    private speed: number;
    public position: Coordinates;
    private color: string;

    constructor() {
        this.speed = 1;
        this.position = {
            x: 0,
            y: 0
        }
        this.color = "red";
    }

    public move(direction: Direction): void {
        if (direction === "left") {
            this.position.x -= this.speed;
        }
        else if (direction === "right") {
            this.position.x += this.speed;
        }
        else if (direction === "up") {
            this.position.y -= this.speed;
        }
        else if (direction === "down") {
            this.position.y += this.speed;
        }
    }
};