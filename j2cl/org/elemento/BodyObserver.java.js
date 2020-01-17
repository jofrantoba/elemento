goog.module('org.elemento.BodyObserver');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationObserver.$Overlay');
goog.require('elemental2.dom.MutationObserverInit.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Function');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('jsinterop.base.Js');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.BodyObserver.$1');
goog.require('org.elemento.BodyObserver.ElementObserver');
goog.require('org.elemento.Elements');
goog.require('org.elemento.ObserverCallback');
goog.require('vmbootstrap.Casts');

const BodyObserver = goog.require('org.elemento.BodyObserver$impl');
exports = BodyObserver; 