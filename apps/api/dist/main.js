"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("module-alias/register");
const dotenv_1 = require("dotenv");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const winston_service_1 = require("./common/logger/winston.service");
(0, dotenv_1.config)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.useLogger(app.get(winston_service_1.WinstonService));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map