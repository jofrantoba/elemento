goog.module('org.gwtproject.http.client.UrlBuilder');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Integer');
goog.require('java.lang.NumberFormatException');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.http.client.URL');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const UrlBuilder = goog.require('org.gwtproject.http.client.UrlBuilder$impl');
exports = UrlBuilder; 