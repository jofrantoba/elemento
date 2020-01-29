goog.module('org.gwtproject.user.client.ui.ValuePicker');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('org.gwtproject.user.client.ui.HasConstrainedValue');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.text.shared.Renderer');
goog.require('org.gwtproject.text.shared.ToStringRenderer');
goog.require('org.gwtproject.user.cellview.client.CellList');
goog.require('org.gwtproject.user.client.ui.ValuePicker.$1');
goog.require('org.gwtproject.user.client.ui.ValuePicker.DefaultCell');
goog.require('org.gwtproject.view.client.SingleSelectionModel');
goog.require('vmbootstrap.Objects');

const ValuePicker = goog.require('org.gwtproject.user.client.ui.ValuePicker$impl');
exports = ValuePicker; 