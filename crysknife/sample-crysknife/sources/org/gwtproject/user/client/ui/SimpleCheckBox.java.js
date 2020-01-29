goog.module('org.gwtproject.user.client.ui.SimpleCheckBox');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('org.gwtproject.user.client.ui.HasName');
goog.require('org.gwtproject.user.client.ui.HasValue');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('org.gwtproject.user.client.ui.SimpleCheckBox.$1');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const SimpleCheckBox = goog.require('org.gwtproject.user.client.ui.SimpleCheckBox$impl');
exports = SimpleCheckBox; 