goog.module('org.gwtproject.user.client.Event');

goog.require('nativebootstrap.Util');
goog.require('jsinterop.base.Js');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.shared.HandlerManager');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event.NativePreviewEvent');
goog.require('org.gwtproject.user.client.Event.NativePreviewHandler');
goog.require('org.gwtproject.user.client.EventListener');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const Event = goog.require('org.gwtproject.user.client.Event$impl');
exports = Event; 