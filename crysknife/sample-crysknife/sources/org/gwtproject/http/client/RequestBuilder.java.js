goog.module('org.gwtproject.http.client.RequestBuilder');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.XMLHttpRequest.$Overlay');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.http.client.Request');
goog.require('org.gwtproject.http.client.RequestBuilder.Method');
goog.require('org.gwtproject.http.client.RequestCallback');
goog.require('org.gwtproject.http.client.RequestException');
goog.require('org.gwtproject.http.client.StringValidator');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const RequestBuilder = goog.require('org.gwtproject.http.client.RequestBuilder$impl');
exports = RequestBuilder; 