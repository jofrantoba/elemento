goog.module('org.gwtproject.text.client.DateTimeFormatRenderer');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.text.shared.AbstractRenderer');
goog.require('java.util.Date');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.i18n.shared.DateTimeFormat');
goog.require('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat');
goog.require('org.gwtproject.i18n.shared.TimeZone');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const DateTimeFormatRenderer = goog.require('org.gwtproject.text.client.DateTimeFormatRenderer$impl');
exports = DateTimeFormatRenderer; 