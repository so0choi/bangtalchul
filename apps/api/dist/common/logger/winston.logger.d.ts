import { LoggerService } from '@nestjs/common';
export declare class WinstonLogger implements LoggerService {
    private readonly logger;
    error(message: string, trace: string): void;
    log(message: string): void;
    warn(message: string): void;
}
