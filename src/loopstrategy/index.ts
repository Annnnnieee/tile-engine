import Core from "../core";

export default interface LoopStrategy {
    run(core: Core): void;
};