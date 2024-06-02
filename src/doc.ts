import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const swaggerUrl = '/api/doc';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(swaggerUrl, app, document);
};
