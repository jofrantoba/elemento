goog.module('org.gwtproject.event.logical.shared.OpenEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasOpenHandlers');
goog.require('org.gwtproject.event.logical.shared.OpenHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');

const OpenEvent = goog.require('org.gwtproject.event.logical.shared.OpenEvent$impl');
exports = OpenEvent; 