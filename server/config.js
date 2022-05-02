const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  client_id: 'd2075042affa5f2ecf0a',
  redirect_uri: 'http://localhost:3000/login',
  client_secret: '06e6e4d9f3c700ee16ec8541a61b5448f8599356',
  proxy_url: 'http://localhost:5000/authenticate'
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;