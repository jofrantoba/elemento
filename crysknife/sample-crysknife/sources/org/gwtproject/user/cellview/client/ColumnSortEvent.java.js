goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.user.cellview.client.Column');
goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler');
goog.require('org.gwtproject.user.cellview.client.ColumnSortList');
goog.require('vmbootstrap.Casts');

const ColumnSortEvent = goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
exports = ColumnSortEvent; 