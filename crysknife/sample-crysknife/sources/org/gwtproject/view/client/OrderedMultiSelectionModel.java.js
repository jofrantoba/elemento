goog.module('org.gwtproject.view.client.OrderedMultiSelectionModel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.MultiSelectionModel');
goog.require('java.util.ArrayList');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.List');
goog.require('org.gwtproject.view.client.MultiSelectionModel.SelectionChange');
goog.require('org.gwtproject.view.client.ProvidesKey');

const OrderedMultiSelectionModel = goog.require('org.gwtproject.view.client.OrderedMultiSelectionModel$impl');
exports = OrderedMultiSelectionModel; 