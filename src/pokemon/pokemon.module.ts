import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pokemonSchema } from './entities/pokemon.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: 'Pokemon', schema: pokemonSchema }]),
  ],
  exports: [MongooseModule],
})
export class PokemonModule {}
