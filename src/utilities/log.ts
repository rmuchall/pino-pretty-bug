import * as pino from "pino";

export const log = pino({
    name: "pino-pretty-bug",
    level: "trace",
    prettyPrint: {
        colorize: true,
        translateTime: true
    }
});
