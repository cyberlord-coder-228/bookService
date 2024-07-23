import Joi from 'joi';

const create = Joi.object({
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

const update = Joi.object({
  _id: Joi.number().optional(),
  title: Joi.string().optional(),
  pageCount: Joi.number().optional(),
  publishedDate: Joi.object({
    date: Joi.string().isoDate().optional(),
  }).optional(),
  thumbnailUrl: Joi.string().uri().optional(),
  shortDescription: Joi.string().optional(),
  longDescription: Joi.string().optional(),
  status: Joi.string().valid('PUBLISH', 'DRAFT').optional(),
  authors: Joi.array().items(Joi.string()).optional(),
});

export { create, update } ;
