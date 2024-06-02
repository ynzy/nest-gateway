import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getLocalIP } from './utils';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { VersionValue } from '@nestjs/common/interfaces';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument, swaggerUrl } from './doc';

declare const module: any;

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.setGlobalPrefix('api');
  // 定义支持的API版本
  const supportedApiVersions: VersionValue = [VERSION_NEUTRAL, '1', '2']; // 假设我们支持版本1和版本2
  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: supportedApiVersions
  });

  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());
  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  generateDocument(app);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(port, '0.0.0.0', () => {
    console.log(`Application is running on: http://${getLocalIP()}:${port}/api/v1`);
    const supportVersions = supportedApiVersions.slice(1, supportedApiVersions.length).map((version: string) => `/v${version}`);
    console.log(`Supported API versions: ${supportVersions.join(', ')}`);
    console.log(`swagger running on: http://${getLocalIP()}:${port}${swaggerUrl}`);
  });
}
bootstrap();
