"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentPipeAsync = void 0;
/** Wrap func in promise */
function funcToPromise(func) {
    return (value) => Promise.resolve(func(value));
}
class FluentPipeAsync {
    constructor(initialState, func) {
        this.result = this.exec(initialState, func);
    }
    exec(valuePromise, func) {
        return __awaiter(this, void 0, void 0, function* () {
            return func(yield valuePromise);
        });
    }
    pipe(func) {
        return new FluentPipeAsync(this.result, funcToPromise(func));
    }
    pipeAsync(func) {
        return new FluentPipeAsync(this.result, func);
    }
    static from(initialState) {
        return new FluentPipeAsync(Promise.resolve(initialState), (v) => Promise.resolve(v));
    }
}
exports.FluentPipeAsync = FluentPipeAsync;
//# sourceMappingURL=fluent-pipe-async.js.map