import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {VersioningType} from "@nestjs/common";
const fs = require('fs');
const yaml = require('js-yaml');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Social App')
    .setDescription('Social network API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const yamlData = yaml.dump(document);

//Save to file
  fs.writeFileSync('./api/rest_api.yml', yamlData, 'utf8');

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
