"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentPipe = void 0;
class FluentPipe {
    constructor(initialState, func) {
        this.result = func(initialState);
    }
    pipe(func) {
        return new FluentPipe(this.result, func);
    }
    static from(initialState) {
        return new FluentPipe(initialState, (v) => v);
    }
}
exports.FluentPipe = FluentPipe;
//# sourceMappingURL=fluent-pipe.js.map