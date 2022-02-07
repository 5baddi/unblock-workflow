import { ILogger } from "./interfaces/logger";
import { Logger as WLogger } from "winston";
import { ENV, LOG_FILE, LOG_FOLDER, LOG_LEVEL } from "./settings";
import { injectable } from "inversify";
import path from "path";

const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

@injectable()
export class Logger implements ILogger
{
    readonly logger: WLogger;

    constructor()
    {
        this.logger = this.initLogger();
    }

    private initLogger(): WLogger
    {
        const transport = new DailyRotateFile({
            filename: `${ENV}-` + LOG_FILE,
            dirname: path.resolve(LOG_FOLDER),
            datePattern: "YYYY-MM-DD-HH",
            zippedArchive: true,
            json: false,
            maxSize: "20m",
            maxFiles: "14d",
            prepend: true,
            handleExceptions: true,
            level: LOG_LEVEL,
        });

        return winston.createLogger({
            transports: [
                transport
            ],
            exitOnError: false
        });
    }

    private getEntry(data: {}): object
    {
        return JSON.parse(JSON.stringify(data));
    }

    async info(data: {}, logName?: string): Promise<void>
    {
        this.logger.info(this.getEntry(data));
    }

    async debug(data: {}): Promise<void>
    {
        this.logger.debug(this.getEntry(data));
    }

    async warning(data: {}): Promise<void>
    {
        this.logger.warn(this.getEntry(data));
    }

    async error(data: {}): Promise<void>
    {
        this.logger.error(this.getEntry(data));
    }

    async critical(data: {}): Promise<void>
    {
        this.logger.crit(this.getEntry(data));
    }
}