goog.module('org.gwtproject.editor.client.impl.SimpleViolation');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('javax.validation.ConstraintViolation');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorDriver');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('org.gwtproject.editor.client.impl.DelegateMap');
goog.require('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod');
goog.require('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const SimpleViolation = goog.require('org.gwtproject.editor.client.impl.SimpleViolation$impl');
exports = SimpleViolation; 