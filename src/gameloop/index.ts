import Core from "../core";

export default interface GameLoop {
    run(core: Core): void;
};