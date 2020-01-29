goog.module('org.gwtproject.i18n.shared.BidiFormatterBase');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.BidiFormatterBase.Format');
goog.require('org.gwtproject.i18n.shared.BidiUtils');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils');

const BidiFormatterBase = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase$impl');
exports = BidiFormatterBase; 