goog.module('org.gwtproject.editor.client.impl.ErrorCollector');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.Stack');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('org.gwtproject.editor.client.EditorError');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('org.gwtproject.editor.client.impl.SimpleError');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const ErrorCollector = goog.require('org.gwtproject.editor.client.impl.ErrorCollector$impl');
exports = ErrorCollector; 