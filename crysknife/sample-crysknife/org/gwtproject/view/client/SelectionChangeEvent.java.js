goog.module('org.gwtproject.view.client.SelectionChangeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.view.client.SelectionChangeEvent.Handler');
goog.require('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers');
goog.require('vmbootstrap.Casts');

const SelectionChangeEvent = goog.require('org.gwtproject.view.client.SelectionChangeEvent$impl');
exports = SelectionChangeEvent; 