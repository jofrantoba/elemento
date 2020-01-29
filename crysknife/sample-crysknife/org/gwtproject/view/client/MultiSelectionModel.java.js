goog.module('org.gwtproject.view.client.MultiSelectionModel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel');
goog.require('org.gwtproject.view.client.SetSelectionModel');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.view.client.MultiSelectionModel.SelectionChange');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SelectionChangeEvent');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const MultiSelectionModel = goog.require('org.gwtproject.view.client.MultiSelectionModel$impl');
exports = MultiSelectionModel; 