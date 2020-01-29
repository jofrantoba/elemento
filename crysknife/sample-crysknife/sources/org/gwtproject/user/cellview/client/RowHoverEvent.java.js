goog.module('org.gwtproject.user.cellview.client.RowHoverEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.TableRowElement.$Overlay');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('org.gwtproject.user.cellview.client.RowHoverEvent.Handler');
goog.require('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope');
goog.require('org.gwtproject.user.client.Event');
goog.require('vmbootstrap.Casts');

const RowHoverEvent = goog.require('org.gwtproject.user.cellview.client.RowHoverEvent$impl');
exports = RowHoverEvent; 