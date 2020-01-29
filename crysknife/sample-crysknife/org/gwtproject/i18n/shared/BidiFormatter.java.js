goog.module('org.gwtproject.i18n.shared.BidiFormatter');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.i18n.shared.BidiFormatterBase');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.i18n.shared.BidiFormatter.Factory');
goog.require('vmbootstrap.Casts');

const BidiFormatter = goog.require('org.gwtproject.i18n.shared.BidiFormatter$impl');
exports = BidiFormatter; 