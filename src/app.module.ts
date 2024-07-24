import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validations';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
