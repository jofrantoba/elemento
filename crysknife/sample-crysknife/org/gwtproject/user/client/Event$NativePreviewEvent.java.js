goog.module('org.gwtproject.user.client.Event.NativePreviewEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasNativeEvent');
goog.require('org.gwtproject.event.legacy.shared.GwtEvent');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.legacy.shared.GwtEvent.Type');
goog.require('org.gwtproject.event.shared.HandlerManager');
goog.require('org.gwtproject.user.client.Event.NativePreviewHandler');
goog.require('vmbootstrap.Casts');

const NativePreviewEvent = goog.require('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
exports = NativePreviewEvent; 