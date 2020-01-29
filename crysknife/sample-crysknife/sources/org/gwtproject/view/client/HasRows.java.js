goog.module('org.gwtproject.view.client.HasRows');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.view.client.Range');
goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler');
goog.require('org.gwtproject.view.client.RowCountChangeEvent.Handler');

const HasRows = goog.require('org.gwtproject.view.client.HasRows$impl');
exports = HasRows; 