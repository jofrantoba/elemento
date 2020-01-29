goog.module('org.gwtproject.editor.client.impl.DirtCollector');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.EditorVisitor');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.EditorContext');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('vmbootstrap.Casts');

const DirtCollector = goog.require('org.gwtproject.editor.client.impl.DirtCollector$impl');
exports = DirtCollector; 