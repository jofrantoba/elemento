goog.module('org.elemento.ElementsBag.IterableImpl');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('org.elemento.Elements');

const IterableImpl = goog.require('org.elemento.ElementsBag.IterableImpl$impl');
exports = IterableImpl; 