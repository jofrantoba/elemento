goog.module('org.gwtproject.view.client.RangeChangeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.view.client.HasRows');
goog.require('org.gwtproject.view.client.Range');
goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler');
goog.require('vmbootstrap.Casts');

const RangeChangeEvent = goog.require('org.gwtproject.view.client.RangeChangeEvent$impl');
exports = RangeChangeEvent; 