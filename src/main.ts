import { Logger, LogLevel, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserModule } from './users/user.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(UserModule);

  const configService = app.get(ConfigService);
  const isProduction = configService.get('NODE_ENV') === 'production';
  const loggerLevels: LogLevel[] = isProduction
    ? ['error', 'warn']
    : ['error', 'warn', 'debug', 'log', 'verbose'];

  app.useLogger(loggerLevels);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  const allowedOrigins = configService.get<string>('CORS_ORIGIN')?.split(',') || ['*'];
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Documentação completa da API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'access-token'
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);


  const port = configService.get('PORT') || 3000;
  await app.listen(port);

  const appUrl = await app.getUrl();
  logger.log(`🚀 Aplicação rodando em: ${appUrl}`);
  logger.log(`📚 Documentação disponível em: ${appUrl}/docs`);
}

bootstrap().catch((error) => {
  console.error('❌ Erro fatal ao iniciar a aplicação:', error);
  process.exit(1);
});
