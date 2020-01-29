goog.module('org.gwtproject.user.client.impl.DOMImplStandard');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.impl.DOMImpl');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('jsinterop.base.Js');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.BrowserEvents');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.impl.DOMImplStandardBase');
goog.require('org.gwtproject.user.client.impl.EventMap');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const DOMImplStandard = goog.require('org.gwtproject.user.client.impl.DOMImplStandard$impl');
exports = DOMImplStandard; 