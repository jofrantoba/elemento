goog.module('org.elemento.Attachable');

goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.Attachable.$LambdaAdaptor');
goog.require('org.elemento.Elements');
goog.require('org.elemento.IsElement');
goog.require('org.elemento.ObserverCallback');

const Attachable = goog.require('org.elemento.Attachable$impl');
exports = Attachable; 