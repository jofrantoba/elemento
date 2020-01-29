goog.module('org.gwtproject.editor.client.impl.AbstractEditorContext');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('java.lang.Class');
goog.require('java.lang.IllegalStateException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.CompositeEditor');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorDelegate');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('org.gwtproject.editor.client.HasEditorDelegate');
goog.require('org.gwtproject.editor.client.HasEditorErrors');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.ValueAwareEditor');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractEditorContext = goog.require('org.gwtproject.editor.client.impl.AbstractEditorContext$impl');
exports = AbstractEditorContext; 