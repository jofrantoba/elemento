goog.module('org.gwtproject.cell.client.DateCell');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.cell.client.AbstractCell');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.i18n.shared.DateTimeFormat');
goog.require('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat');
goog.require('org.gwtproject.i18n.shared.TimeZone');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.text.shared.SafeHtmlRenderer');
goog.require('org.gwtproject.text.shared.SimpleSafeHtmlRenderer');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const DateCell = goog.require('org.gwtproject.cell.client.DateCell$impl');
exports = DateCell; 