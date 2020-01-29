goog.module('org.gwtproject.editor.client.CompositeEditor');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.ValueAwareEditor');
goog.require('org.gwtproject.editor.client.CompositeEditor.EditorChain');
goog.require('org.gwtproject.editor.client.Editor');

const CompositeEditor = goog.require('org.gwtproject.editor.client.CompositeEditor$impl');
exports = CompositeEditor; 