/// <reference types="jasmine" />
declare enum ForegroundColor {
    FgBlack = "\u001B[30m",
    FgRed = "\u001B[31m",
    FgGreen = "\u001B[32m",
    FgYellow = "\u001B[33m",
    FgBlue = "\u001B[34m",
    FgMagenta = "\u001B[35m",
    FgCyan = "\u001B[36m",
    FgWhite = "\u001B[37m"
}
declare enum BackgroundColor {
    BgBlack = "\u001B[40m",
    BgRed = "\u001B[41m",
    BgGreen = "\u001B[42m",
    BgYellow = "\u001B[43m",
    BgBlue = "\u001B[44m",
    BgMagenta = "\u001B[45m",
    BgCyan = "\u001B[46m",
    BgWhite = "\u001B[47m"
}
declare enum Code {
    Reset = "\u001B[0m",
    Bright = "\u001B[1m",
    Dim = "\u001B[2m",
    Underscore = "\u001B[4m",
    Blink = "\u001B[5m",
    Reverse = "\u001B[7m",
    Hidden = "\u001B[8m"
}
interface EncodedString {
    text: string;
    background?: BackgroundColor;
    foreground?: ForegroundColor;
    codes?: Code[];
}
declare function NewString(text: string, foreground?: ForegroundColor, background?: BackgroundColor, ...codes: Code[]): EncodedString;
declare function DecodeString(value: EncodedString | string): string;
declare function log(...values: (EncodedString | string)[]): void;
declare function logLine(background: BackgroundColor, foreground: ForegroundColor): void;
declare function getPrettyStatus(status: string | null | undefined): "" | EncodedString;
declare const myReporter: jasmine.CustomReporter;
//# sourceMappingURL=reporter.d.ts.map