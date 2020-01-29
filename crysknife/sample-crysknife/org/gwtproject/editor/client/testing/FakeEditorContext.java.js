goog.module('org.gwtproject.editor.client.testing.FakeEditorContext');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('java.lang.Class');
goog.require('org.gwtproject.editor.client.CompositeEditor');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorDelegate');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('org.gwtproject.editor.client.HasEditorDelegate');
goog.require('org.gwtproject.editor.client.HasEditorErrors');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.ValueAwareEditor');

const FakeEditorContext = goog.require('org.gwtproject.editor.client.testing.FakeEditorContext$impl');
exports = FakeEditorContext; 