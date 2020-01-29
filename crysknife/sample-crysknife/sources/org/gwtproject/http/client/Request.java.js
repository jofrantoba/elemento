goog.module('org.gwtproject.http.client.Request');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.XMLHttpRequest.$Overlay');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.NullPointerException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.http.client.RequestCallback');
goog.require('org.gwtproject.http.client.RequestTimeoutException');
goog.require('org.gwtproject.http.client.Response');
goog.require('org.gwtproject.http.client.ResponseImpl');
goog.require('vmbootstrap.Exceptions');

const Request = goog.require('org.gwtproject.http.client.Request$impl');
exports = Request; 