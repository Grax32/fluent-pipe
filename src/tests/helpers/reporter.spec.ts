enum ForegroundColor {
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
}

enum BackgroundColor {
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m",
}

enum Code {
  Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
}

interface EncodedString {
  text: string;
  background?: BackgroundColor;
  foreground?: ForegroundColor;
  codes?: Code[];
}

function NewString(
  text: string,
  foreground?: ForegroundColor,
  background?: BackgroundColor,
  ...codes: Code[]
): EncodedString {
  return { text, background, foreground, codes };
}

function DecodeString(value: EncodedString | string) {
  if (typeof value === "string") {
    return value;
  }

  const bg = value.background || "";
  const fg = value.foreground || "";
  const codes = (value.codes || []).join("");

  return bg + fg + codes + value.text + Code.Reset;
}

function log(...values: (EncodedString | string)[]) {
  console.log(values.map(DecodeString).join("") + Code.Reset);
}

function logLine(background: BackgroundColor, foreground: ForegroundColor) {
  const columns = process?.stdout?.columns || 40;
  const line = "-".repeat(columns);
  log(NewString(line, foreground, background));
}

function getPrettyStatus(status: string | null | undefined) {
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

const myReporter: jasmine.CustomReporter = {
  jasmineStarted: function (suiteInfo: jasmine.SuiteInfo) {
    log("Running suite with " + suiteInfo.totalSpecsDefined + " test specs");
  },

  suiteStarted: function (result: { description: string; fullName: string }) {
    log("Suite started: ");
    log(" Name: " + result.description);
    log(" Description: " + result.fullName);
    log("");
  },

  specStarted: function (result: { description: string; fullName: string }) {
    // console.log("Spec started: " + result.fullName);
  },

  specDone: function (result: jasmine.CustomReporterResult) {
    log("Spec: " + result.fullName);
    log("    Status: ", getPrettyStatus(result.status));
    const failedExpectations = result.failedExpectations || [];

    for (var i = 0; i < failedExpectations.length; i++) {
      log("Failure: " + failedExpectations[i].message);
      log(failedExpectations[i].stack);
    }
    logLine(BackgroundColor.BgWhite, ForegroundColor.FgBlue);
  },

  suiteDone: function (result: jasmine.CustomReporterResult) {
    log("Suite: " + result.description);
    log("    Status: " + result.status);
    const failedExpectations = result.failedExpectations || [];

    for (var i = 0; i < failedExpectations.length; i++) {
      log("Suite " + failedExpectations[i].message);
      log(failedExpectations[i].stack);
    }
  },

  jasmineDone: function (
    result: jasmine.RunDetails & {
      overallStatus: "passed" | "failed" | "incomplete";
    }
  ) {
    log("Finished suite: " + result.overallStatus);
    const failedExpectations = result.failedExpectations || [];

    for (var i = 0; i < failedExpectations.length; i++) {
      log("Global " + failedExpectations[i].message);
    }
  },
};

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(myReporter);
