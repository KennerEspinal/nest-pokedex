import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_URI: Joi.string().required(),
  MONGO_DB_NAME: Joi.string().required(),
  PORT: Joi.number().default(3002),
  DEFAULT_LIMIT: Joi.number().default(5),
});
