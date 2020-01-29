goog.module('org.gwtproject.event.logical.shared.InitializeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasInitializeHandlers');
goog.require('org.gwtproject.event.logical.shared.InitializeHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('vmbootstrap.Casts');

const InitializeEvent = goog.require('org.gwtproject.event.logical.shared.InitializeEvent$impl');
exports = InitializeEvent; 