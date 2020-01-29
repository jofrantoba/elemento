goog.module('org.gwtproject.user.client.ui.ValueLabel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.TakesValue');
goog.require('org.gwtproject.user.client.ui.LabelBase');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.text.shared.Parser');
goog.require('org.gwtproject.text.shared.Renderer');
goog.require('org.gwtproject.text.shared.ToStringRenderer');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');

const ValueLabel = goog.require('org.gwtproject.user.client.ui.ValueLabel$impl');
exports = ValueLabel; 