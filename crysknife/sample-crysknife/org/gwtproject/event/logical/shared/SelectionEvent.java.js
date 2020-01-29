goog.module('org.gwtproject.event.logical.shared.SelectionEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers');
goog.require('org.gwtproject.event.logical.shared.SelectionHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');

const SelectionEvent = goog.require('org.gwtproject.event.logical.shared.SelectionEvent$impl');
exports = SelectionEvent; 