goog.module('org.gwtproject.view.client.CellPreviewEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler');
goog.require('org.gwtproject.view.client.HasCellPreviewHandlers');
goog.require('org.gwtproject.view.client.HasData');
goog.require('vmbootstrap.Casts');

const CellPreviewEvent = goog.require('org.gwtproject.view.client.CellPreviewEvent$impl');
exports = CellPreviewEvent; 