goog.module('org.gwtproject.user.window.client.Window.WindowHandlers');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers');
goog.require('org.gwtproject.event.logical.shared.HasResizeHandlers');
goog.require('org.gwtproject.event.shared.SimpleEventBus');
goog.require('org.gwtproject.event.logical.shared.CloseEvent');
goog.require('org.gwtproject.event.logical.shared.CloseHandler');
goog.require('org.gwtproject.event.logical.shared.ResizeEvent');
goog.require('org.gwtproject.event.logical.shared.ResizeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.window.client.Window');

const WindowHandlers = goog.require('org.gwtproject.user.window.client.Window.WindowHandlers$impl');
exports = WindowHandlers; 