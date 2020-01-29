goog.module('org.gwtproject.editor.client.testing.MockSimpleBeanEditorDriver');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.SimpleBeanEditorDriver');
goog.require('java.lang.Iterable');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('javax.validation.ConstraintViolation');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorError');
goog.require('org.gwtproject.editor.client.EditorVisitor');

const MockSimpleBeanEditorDriver = goog.require('org.gwtproject.editor.client.testing.MockSimpleBeanEditorDriver$impl');
exports = MockSimpleBeanEditorDriver; 