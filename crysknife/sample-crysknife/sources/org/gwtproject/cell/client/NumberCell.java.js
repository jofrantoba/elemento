goog.module('org.gwtproject.cell.client.NumberCell');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.cell.client.AbstractCell');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Number');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.i18n.client.NumberFormat');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.text.shared.SafeHtmlRenderer');
goog.require('org.gwtproject.text.shared.SimpleSafeHtmlRenderer');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const NumberCell = goog.require('org.gwtproject.cell.client.NumberCell$impl');
exports = NumberCell; 