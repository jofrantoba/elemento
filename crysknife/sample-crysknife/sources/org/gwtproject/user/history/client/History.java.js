goog.module('org.gwtproject.user.history.client.History');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.history.client.History.$LambdaAdaptor$1');
goog.require('org.gwtproject.user.history.client.History.HistoryEventSource');
goog.require('org.gwtproject.user.history.client.History.HistoryTokenEncoder');
goog.require('org.gwtproject.user.history.client.History.NoopHistoryTokenEncoder');
goog.require('org.gwtproject.user.window.client.Window.Location');

const org_gwtproject_user_history_client_History = goog.require('org.gwtproject.user.history.client.History$impl');
exports = org_gwtproject_user_history_client_History; 