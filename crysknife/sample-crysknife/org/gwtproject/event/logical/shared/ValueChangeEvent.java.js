goog.module('org.gwtproject.event.logical.shared.ValueChangeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasValueChangeHandlers');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ValueChangeEvent = goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
exports = ValueChangeEvent; 