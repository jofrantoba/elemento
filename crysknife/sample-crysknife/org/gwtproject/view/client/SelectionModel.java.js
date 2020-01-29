goog.module('org.gwtproject.view.client.SelectionModel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.view.client.SelectionChangeEvent.Handler');

const SelectionModel = goog.require('org.gwtproject.view.client.SelectionModel$impl');
exports = SelectionModel; 