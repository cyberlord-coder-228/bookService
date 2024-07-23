import Joi from 'joi';

const bookSchema = Joi.object({
 title: Joi.string().required(),
 pageCount: Joi.number().required(),
 publishedDate: Joi.object({
   date: Joi.string().isoDate().required(),
 }).required(),
 thumbnailUrl: Joi.string().uri().required(),
 shortDescription: Joi.string().required(),
 longDescription: Joi.string().required(),
 status: Joi.string().valid('PUBLISH', 'DRAFT').required(),
 authors: Joi.array().items(Joi.string()).required(),
});

export default bookSchema;
