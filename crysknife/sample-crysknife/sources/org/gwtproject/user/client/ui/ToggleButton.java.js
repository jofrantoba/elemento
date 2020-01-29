goog.module('org.gwtproject.user.client.ui.ToggleButton');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.CustomButton');
goog.require('org.gwtproject.user.client.ui.HasValue');
goog.require('java.lang.Boolean');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.ui.Image');
goog.require('vmbootstrap.Casts');

const ToggleButton = goog.require('org.gwtproject.user.client.ui.ToggleButton$impl');
exports = ToggleButton; 