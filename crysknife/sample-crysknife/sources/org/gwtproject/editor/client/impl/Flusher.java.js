goog.module('org.gwtproject.editor.client.impl.Flusher');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('java.util.Stack');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const Flusher = goog.require('org.gwtproject.editor.client.impl.Flusher$impl');
exports = Flusher; 