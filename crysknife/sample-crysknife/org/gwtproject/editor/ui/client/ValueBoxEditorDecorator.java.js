goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.HasEditorErrors');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('java.lang.StringBuilder');
goog.require('java.util.List');
goog.require('org.gwtproject.dom.client.DivElement.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Display');
goog.require('org.gwtproject.editor.client.EditorError');
goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder');
goog.require('org.gwtproject.editor.ui.client.adapters.ValueBoxEditor');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('org.gwtproject.user.client.ui.ValueBoxBase');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const ValueBoxEditorDecorator = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
exports = ValueBoxEditorDecorator; 