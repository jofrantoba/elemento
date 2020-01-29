goog.module('org.gwtproject.uibinder.client.LazyDomElement');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const LazyDomElement = goog.require('org.gwtproject.uibinder.client.LazyDomElement$impl');
exports = LazyDomElement; 