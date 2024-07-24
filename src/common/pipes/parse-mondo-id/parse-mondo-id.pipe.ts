import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMondoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({ value, metadata });
    if (!isValidObjectId(value)) {
      throw new BadRequestException(
        `Invalid id: ${value} is not a valid mongoId`,
      );
    }
    return value;
  }
}
