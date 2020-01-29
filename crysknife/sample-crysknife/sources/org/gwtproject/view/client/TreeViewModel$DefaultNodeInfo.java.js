goog.module('org.gwtproject.view.client.TreeViewModel.DefaultNodeInfo');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.TreeViewModel.NodeInfo');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell');
goog.require('org.gwtproject.cell.client.ValueUpdater');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.view.client.AbstractDataProvider');
goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager');
goog.require('org.gwtproject.view.client.HasData');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SelectionModel');

const DefaultNodeInfo = goog.require('org.gwtproject.view.client.TreeViewModel.DefaultNodeInfo$impl');
exports = DefaultNodeInfo; 