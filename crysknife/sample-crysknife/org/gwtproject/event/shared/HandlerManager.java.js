goog.module('org.gwtproject.event.shared.HandlerManager');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.event.legacy.shared.EventHandler');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerManager.Bus');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.UmbrellaException');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const HandlerManager = goog.require('org.gwtproject.event.shared.HandlerManager$impl');
exports = HandlerManager; 