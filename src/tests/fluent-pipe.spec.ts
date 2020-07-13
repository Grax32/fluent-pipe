import 'jasmine';
import { FluentPipe } from '../fluent-pipe';

describe("Fluent Pipe Tests", () => {
    it("should execute", () => {
        const result = FluentPipe
        .from([9,3,5,2,1])
        .pipe(v => v.map(num => num * -2))
        .result;

        expect(result[0]).toBe(-18);
    });
});


