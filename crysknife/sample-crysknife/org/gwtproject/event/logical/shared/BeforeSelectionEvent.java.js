goog.module('org.gwtproject.event.logical.shared.BeforeSelectionEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.BeforeSelectionHandler');
goog.require('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');

const BeforeSelectionEvent = goog.require('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
exports = BeforeSelectionEvent; 