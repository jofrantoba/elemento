goog.module('org.gwtproject.view.client.DefaultSelectionModel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel');
goog.require('java.lang.Boolean');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.view.client.MultiSelectionModel.SelectionChange');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SelectionChangeEvent');
goog.require('vmbootstrap.Casts');

const DefaultSelectionModel = goog.require('org.gwtproject.view.client.DefaultSelectionModel$impl');
exports = DefaultSelectionModel; 