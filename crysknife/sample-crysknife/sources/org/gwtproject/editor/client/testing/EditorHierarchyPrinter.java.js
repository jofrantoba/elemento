goog.module('org.gwtproject.editor.client.testing.EditorHierarchyPrinter');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('org.gwtproject.editor.client.EditorDriver');
goog.require('vmbootstrap.Objects');

const EditorHierarchyPrinter = goog.require('org.gwtproject.editor.client.testing.EditorHierarchyPrinter$impl');
exports = EditorHierarchyPrinter; 