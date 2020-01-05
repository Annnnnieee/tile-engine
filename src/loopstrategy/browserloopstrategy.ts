import LoopStrategy from ".";
import Core from "../core";

export default class BrowserLoopStrategy implements LoopStrategy {

    private window: Window;
    private core: Core | undefined;

    constructor(window: Window) {
        this.window = window;
    }

    run(core: Core): void {
        this.core = core;
        const that = this;
        this.window.requestAnimationFrame(function(timestamp) {
            return that.loop.call(that, timestamp);
        });
    }

    private previousTimestamp: number | undefined;
    private loop(timestamp: number) {
        const elapsedMs = timestamp - (this.previousTimestamp || 0);
        this.previousTimestamp = timestamp;

        this.core!.tick(elapsedMs);

        const that = this;
        this.window.requestAnimationFrame(function(timestamp) {
            return that.loop.call(that, timestamp);
        });
    }
}