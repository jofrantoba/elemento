goog.module('org.gwtproject.user.history.client.History.HistoryEventSource');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasValueChangeHandlers');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.SimpleEventBus');

const HistoryEventSource = goog.require('org.gwtproject.user.history.client.History.HistoryEventSource$impl');
exports = HistoryEventSource; 