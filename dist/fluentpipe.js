var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
define("fluent-pipe-async", ["require", "exports"], function (require, exports) {
    "use strict";
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
});
define("fluent-pipe", ["require", "exports"], function (require, exports) {
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
});
define("operators/orderBy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.orderBy = void 0;
    /**
     * @description Sort array by 1 or more expressions
     * @example orderBy(myArrayOfObjects, v => v.firstName)
     * @example orderBy(myArrayOfObjects, [v => v.lastName, v => v.firstName])
     */
    function orderBy(value, sortExpression) {
        const newValue = [...value];
        if (!Array.isArray(sortExpression)) {
            sortExpression = [sortExpression];
        }
        const sorters = sortExpression;
        newValue.sort((a, b) => sort(a, b, sorters));
        return newValue;
    }
    exports.orderBy = orderBy;
    function sort(a, b, sorters) {
        const sortExpression = sorters[0];
        if (!sortExpression) {
            return 0;
        }
        const left = sortExpression(a);
        const right = sortExpression(b);
        if (left < right) {
            return -1;
        }
        else if (right > left) {
            return 1;
        }
        return sort(a, b, sorters.slice(1));
    }
});
define("index", ["require", "exports", "fluent-pipe", "fluent-pipe-async", "operators/orderBy"], function (require, exports, fluent_pipe_1, fluent_pipe_async_1, orderBy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(fluent_pipe_1, exports);
    __exportStar(fluent_pipe_async_1, exports);
    __exportStar(orderBy_1, exports);
});
define("operators/index", ["require", "exports", "operators/orderBy"], function (require, exports, orderBy_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(orderBy_2, exports);
});
//# sourceMappingURL=fluentpipe.js.map