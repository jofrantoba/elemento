goog.module('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.i18n.shared.BidiFormatterBase');
goog.require('java.util.HashMap');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter.Factory');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils');
goog.require('vmbootstrap.Casts');

const SafeHtmlBidiFormatter = goog.require('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter$impl');
exports = SafeHtmlBidiFormatter; 