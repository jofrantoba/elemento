goog.module('org.gwtproject.event.logical.shared.CloseEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.CloseHandler');
goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');

const CloseEvent = goog.require('org.gwtproject.event.logical.shared.CloseEvent$impl');
exports = CloseEvent; 