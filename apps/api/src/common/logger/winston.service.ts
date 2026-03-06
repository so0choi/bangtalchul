import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, transports, format } from 'winston';
import chalk from 'chalk';

@Injectable()
export class WinstonService implements LoggerService {
  private readonly logger = createLogger({
    level: 'debug',
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(({ level, message, timestamp }) => {
        const emoji = this.getEmoji(level);
        const coloredLevel = this.getColoredLevel(level);
        return `${chalk.gray(timestamp)} ${emoji} ${coloredLevel}: ${message}`;
      }),
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'log' }),
    ],
  });

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error(`${message}${trace ? ` - ${trace}` : ''}`);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  // Optional: implement debug, verbose if needed
  debug?(message: string) {
    this.logger.debug(message);
  }

  verbose?(message: string) {
    this.logger.verbose(message);
  }

  private getEmoji(level: string): string {
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

  private getColoredLevel(level: string): string {
    switch (level) {
      case 'error':
        return chalk.red.bold(level.toUpperCase());
      case 'warn':
        return chalk.yellow.bold(level.toUpperCase());
      case 'info':
        return chalk.cyan.bold(level.toUpperCase());
      case 'debug':
        return chalk.magenta.bold(level.toUpperCase());
      case 'verbose':
        return chalk.green.bold(level.toUpperCase());
      default:
        return level;
    }
  }
}
