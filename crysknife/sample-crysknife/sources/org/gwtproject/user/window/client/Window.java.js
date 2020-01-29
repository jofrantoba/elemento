goog.module('org.gwtproject.user.window.client.Window');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.CSSProperties.MarginUnionType.$Overlay');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.CloseEvent');
goog.require('org.gwtproject.event.logical.shared.CloseHandler');
goog.require('org.gwtproject.event.logical.shared.ResizeEvent');
goog.require('org.gwtproject.event.logical.shared.ResizeHandler');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.window.client.Window.ClosingEvent');
goog.require('org.gwtproject.user.window.client.Window.ClosingHandler');
goog.require('org.gwtproject.user.window.client.Window.ScrollEvent');
goog.require('org.gwtproject.user.window.client.Window.ScrollHandler');
goog.require('org.gwtproject.user.window.client.Window.WindowHandlers');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const org_gwtproject_user_window_client_Window = goog.require('org.gwtproject.user.window.client.Window$impl');
exports = org_gwtproject_user_window_client_Window; 