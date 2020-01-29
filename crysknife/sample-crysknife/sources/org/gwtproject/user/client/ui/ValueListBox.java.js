goog.module('org.gwtproject.user.client.ui.ValueListBox');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('org.gwtproject.user.client.ui.Focusable');
goog.require('org.gwtproject.user.client.ui.HasConstrainedValue');
goog.require('org.gwtproject.user.client.ui.HasEnabled');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.text.shared.Renderer');
goog.require('org.gwtproject.text.shared.ToStringRenderer');
goog.require('org.gwtproject.user.client.ui.ListBox');
goog.require('org.gwtproject.user.client.ui.ValueListBox.$1');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.SimpleKeyProvider');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ValueListBox = goog.require('org.gwtproject.user.client.ui.ValueListBox$impl');
exports = ValueListBox; 