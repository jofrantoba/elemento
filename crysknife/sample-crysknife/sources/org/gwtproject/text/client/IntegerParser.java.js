goog.module('org.gwtproject.text.client.IntegerParser');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.text.shared.Parser');
goog.require('java.lang.CharSequence');
goog.require('java.lang.Integer');
goog.require('java.lang.Math');
goog.require('java.lang.NumberFormatException');
goog.require('java.text.ParseException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.i18n.client.NumberFormat');
goog.require('vmbootstrap.CharSequences');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const IntegerParser = goog.require('org.gwtproject.text.client.IntegerParser$impl');
exports = IntegerParser; 