goog.module('javax.validation.Validator');

goog.require('nativebootstrap.Util');
goog.require('java.lang.Class');
goog.require('java.util.Set');
goog.require('javax.validation.ConstraintViolation');
goog.require('javax.validation.metadata.BeanDescriptor');

const Validator = goog.require('javax.validation.Validator$impl');
exports = Validator; 