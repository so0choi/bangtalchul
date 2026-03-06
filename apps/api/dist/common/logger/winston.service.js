"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const chalk_1 = require("chalk");
let WinstonService = class WinstonService {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.printf(({ level, message, timestamp }) => {
                const emoji = this.getEmoji(level);
                const coloredLevel = this.getColoredLevel(level);
                return `${chalk_1.default.gray(timestamp)} ${emoji} ${coloredLevel}: ${message}`;
            })),
            transports: [
                new winston_1.transports.Console(),
                new winston_1.transports.File({ filename: 'log' }),
            ],
        });
    }
    log(message) {
        this.logger.info(message);
    }
    error(message, trace) {
        this.logger.error(`${message}${trace ? ` - ${trace}` : ''}`);
    }
    warn(message) {
        this.logger.warn(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    verbose(message) {
        this.logger.verbose(message);
    }
    getEmoji(level) {
        switch (level) {
            case 'error':
                return '❌';
            case 'warn':
                return '⚠️';
            case 'info':
                return 'ℹ️';
            case 'debug':
                return '🐛';
            case 'verbose':
                return '📢';
            default:
                return '';
        }
    }
    getColoredLevel(level) {
        switch (level) {
            case 'error':
                return chalk_1.default.red.bold(level.toUpperCase());
            case 'warn':
                return chalk_1.default.yellow.bold(level.toUpperCase());
            case 'info':
                return chalk_1.default.cyan.bold(level.toUpperCase());
            case 'debug':
                return chalk_1.default.magenta.bold(level.toUpperCase());
            case 'verbose':
                return chalk_1.default.green.bold(level.toUpperCase());
            default:
                return level;
        }
    }
};
exports.WinstonService = WinstonService;
exports.WinstonService = WinstonService = __decorate([
    (0, common_1.Injectable)()
], WinstonService);
//# sourceMappingURL=winston.service.js.map