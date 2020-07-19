"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const fluent_pipe_1 = require("../fluent-pipe");
describe("Fluent Pipe Tests", () => {
    it("should execute", () => {
        const result = fluent_pipe_1.FluentPipe
            .from([9, 3, 5, 2, 1])
            .pipe(v => v.map(num => num * -2))
            .result;
        expect(result.join(',')).toBe('-18,-6,-10,-4,-2');
    });
});
//# sourceMappingURL=fluent-pipe.spec.js.map