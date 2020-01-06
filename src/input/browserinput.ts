import Input from ".";
import Core from "../core";

export default class BrowserInput implements Input {

    private window: Window;
    private core: Core | undefined;

    constructor(window: Window) {
        this.window = window;
    }

    public init(core: Core): void {
        this.core = core;
        this.window.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    private handleKeyPress(e: KeyboardEvent) {
        switch(e.key) {
            case "ArrowLeft": this.onLeft(); return;
            case "ArrowRight": this.onRight(); return;
            case "ArrowUp": this.onUp(); return;
            case "ArrowDown": this.onDown(); return;
        }
    }

    onLeft(): void {
        this.core!.player.move("left");
    }   

    onRight(): void {
        this.core!.player.move("right");
    }

    onUp(): void {
        this.core!.player.move("up");
    }

    onDown(): void {
        this.core!.player.move("down");
    }
}