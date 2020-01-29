goog.module('org.gwtproject.i18n.client.LocaleInfo');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.i18n.client.DateTimeFormatInfo');
goog.require('org.gwtproject.i18n.client.constants.DateTimeConstants');
goog.require('org.gwtproject.i18n.client.constants.NumberConstants');
goog.require('org.gwtproject.i18n.client.impl.CldrImpl');
goog.require('org.gwtproject.i18n.client.impl.LocaleInfoImpl');
goog.require('org.gwtproject.i18n.client.impl.NumberConstantsImpl_');

const LocaleInfo = goog.require('org.gwtproject.i18n.client.LocaleInfo$impl');
exports = LocaleInfo; 