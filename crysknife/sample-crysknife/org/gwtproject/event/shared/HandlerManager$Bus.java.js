goog.module('org.gwtproject.event.shared.HandlerManager.Bus');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.EventBus');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerManager.Bus.Command');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.UmbrellaException');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const Bus = goog.require('org.gwtproject.event.shared.HandlerManager.Bus$impl');
exports = Bus; 