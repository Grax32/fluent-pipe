"use strict";
var ForegroundColor;
(function (ForegroundColor) {
    ForegroundColor["FgBlack"] = "\u001B[30m";
    ForegroundColor["FgRed"] = "\u001B[31m";
    ForegroundColor["FgGreen"] = "\u001B[32m";
    ForegroundColor["FgYellow"] = "\u001B[33m";
    ForegroundColor["FgBlue"] = "\u001B[34m";
    ForegroundColor["FgMagenta"] = "\u001B[35m";
    ForegroundColor["FgCyan"] = "\u001B[36m";
    ForegroundColor["FgWhite"] = "\u001B[37m";
})(ForegroundColor || (ForegroundColor = {}));
var BackgroundColor;
(function (BackgroundColor) {
    BackgroundColor["BgBlack"] = "\u001B[40m";
    BackgroundColor["BgRed"] = "\u001B[41m";
    BackgroundColor["BgGreen"] = "\u001B[42m";
    BackgroundColor["BgYellow"] = "\u001B[43m";
    BackgroundColor["BgBlue"] = "\u001B[44m";
    BackgroundColor["BgMagenta"] = "\u001B[45m";
    BackgroundColor["BgCyan"] = "\u001B[46m";
    BackgroundColor["BgWhite"] = "\u001B[47m";
})(BackgroundColor || (BackgroundColor = {}));
var Code;
(function (Code) {
    Code["Reset"] = "\u001B[0m";
    Code["Bright"] = "\u001B[1m";
    Code["Dim"] = "\u001B[2m";
    Code["Underscore"] = "\u001B[4m";
    Code["Blink"] = "\u001B[5m";
    Code["Reverse"] = "\u001B[7m";
    Code["Hidden"] = "\u001B[8m";
})(Code || (Code = {}));
function NewString(text, foreground, background, ...codes) {
    return { text, background, foreground, codes };
}
function DecodeString(value) {
    if (typeof value === "string") {
        return value;
    }
    const bg = value.background || "";
    const fg = value.foreground || "";
    const codes = (value.codes || []).join("");
    return bg + fg + codes + value.text + Code.Reset;
}
function log(...values) {
    console.log(values.map(DecodeString).join("") + Code.Reset);
}
function logLine(background, foreground) {
    var _a;
    const columns = ((_a = process === null || process === void 0 ? void 0 : process.stdout) === null || _a === void 0 ? void 0 : _a.columns) || 40;
    const line = "-".repeat(columns);
    log(NewString(line, foreground, background));
}
function getPrettyStatus(status) {
    if (status == null) {
        return "";
    }
    switch (status) {
        case "passed":
            return NewString(status, ForegroundColor.FgGreen);
        default:
            return NewString(status, ForegroundColor.FgYellow);
    }
}
const myReporter = {
    jasmineStarted: function (suiteInfo) {
        log("Running suite with " + suiteInfo.totalSpecsDefined + " test specs");
    },
    suiteStarted: function (result) {
        log("Suite started: ");
        log(" Name: " + result.description);
        log(" Description: " + result.fullName);
        log("");
    },
    specStarted: function (result) {
        // console.log("Spec started: " + result.fullName);
    },
    specDone: function (result) {
        log("Spec: " + result.fullName);
        log("    Status: ", getPrettyStatus(result.status));
        const failedExpectations = result.failedExpectations || [];
        for (var i = 0; i < failedExpectations.length; i++) {
            log("Failure: " + failedExpectations[i].message);
            log(failedExpectations[i].stack);
        }
        logLine(BackgroundColor.BgWhite, ForegroundColor.FgBlue);
    },
    suiteDone: function (result) {
        log("Suite: " + result.description);
        log("    Status: " + result.status);
        const failedExpectations = result.failedExpectations || [];
        for (var i = 0; i < failedExpectations.length; i++) {
            log("Suite " + failedExpectations[i].message);
            log(failedExpectations[i].stack);
        }
    },
    jasmineDone: function (result) {
        log("Finished suite: " + result.overallStatus);
        const failedExpectations = result.failedExpectations || [];
        for (var i = 0; i < failedExpectations.length; i++) {
            log("Global " + failedExpectations[i].message);
        }
    },
};
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(myReporter);
//# sourceMappingURL=reporter.spec.js.map