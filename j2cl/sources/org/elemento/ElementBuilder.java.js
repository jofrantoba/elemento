goog.module('org.elemento.ElementBuilder');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.elemento.IsElement');
goog.require('org.elemento.TypedBuilder');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Arrays');
goog.require('java.util.List');
goog.require('java.util.Objects');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.By');
goog.require('org.elemento.Elements');
goog.require('org.elemento.EventType');
goog.require('vmbootstrap.Casts');

const ElementBuilder = goog.require('org.elemento.ElementBuilder$impl');
exports = ElementBuilder; 