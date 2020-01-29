goog.module('org.gwtproject.timer.client.Timer');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('java.lang.Double');
goog.require('java.lang.IllegalArgumentException');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Exceptions');

const Timer = goog.require('org.gwtproject.timer.client.Timer$impl');
exports = Timer; 