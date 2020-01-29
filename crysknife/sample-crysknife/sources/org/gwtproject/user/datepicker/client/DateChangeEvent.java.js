goog.module('org.gwtproject.user.datepicker.client.DateChangeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('java.util.Date');
goog.require('org.gwtproject.event.logical.shared.HasValueChangeHandlers');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.user.datepicker.client.CalendarUtil');
goog.require('vmbootstrap.Casts');

const DateChangeEvent = goog.require('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');
exports = DateChangeEvent; 