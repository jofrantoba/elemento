goog.module('org.gwtproject.view.client.SingleSelectionModel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel');
goog.require('org.gwtproject.view.client.SetSelectionModel');
goog.require('java.util.HashSet');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SelectionChangeEvent');
goog.require('vmbootstrap.Objects');

const SingleSelectionModel = goog.require('org.gwtproject.view.client.SingleSelectionModel$impl');
exports = SingleSelectionModel; 