import 'jasmine';
import { FluentPipe } from '../fluent-pipe';

describe("Fluent Pipe Tests", () => {
    it("should execute", () => {
        const result = FluentPipe
        .from([9,3,5,2,1])
        .pipe(v => v.map(num => num * -2))
        .result;

        expect(result.join(',')).toBe('-18,-6,-10,-4,-2');
    });
});


