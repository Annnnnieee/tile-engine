import Core from '../core';

export default interface Input {
    init(core: Core): void;
    onLeft(): void;
    onRight(): void;
    onUp(): void;
    onDown(): void;
}