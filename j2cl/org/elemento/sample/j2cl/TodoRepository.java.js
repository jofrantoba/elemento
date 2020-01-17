goog.module('org.elemento.sample.j2cl.TodoRepository');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.webstorage.Storage.$Overlay');
goog.require('elemental2.webstorage.StorageEvent.$Overlay');
goog.require('elemental2.webstorage.WebStorageWindow.$Overlay');
goog.require('java.lang.Exception');
goog.require('java.lang.String');
goog.require('java.util.Collection');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.Set');
goog.require('jsinterop.base.Js');
goog.require('jsinterop.base.JsArrayLike.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.sample.j2cl.Todo.$Overlay');
goog.require('org.elemento.sample.j2cl.TodoRepository.$LambdaAdaptor$1');
goog.require('org.elemento.sample.j2cl.TodoRepository.ModificationCallback');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$char');

const TodoRepository = goog.require('org.elemento.sample.j2cl.TodoRepository$impl');
exports = TodoRepository; 