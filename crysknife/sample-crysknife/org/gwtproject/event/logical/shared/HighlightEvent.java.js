goog.module('org.gwtproject.event.logical.shared.HighlightEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasHighlightHandlers');
goog.require('org.gwtproject.event.logical.shared.HighlightHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('vmbootstrap.Casts');

const HighlightEvent = goog.require('org.gwtproject.event.logical.shared.HighlightEvent$impl');
exports = HighlightEvent; 