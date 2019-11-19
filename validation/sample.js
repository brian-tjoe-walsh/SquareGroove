const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSampleInput(data) {
  let errors = {};
  data.name = validText(data.name) ? data.name : "";
  data.url = validText(data.url) ? data.url : "";

  if (Validator.isEmpty(data.name)){
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.url)){
    errors.url = "URL is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
