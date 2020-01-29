goog.module('org.gwtproject.editor.client.impl.DelegateMap.MapIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.editor.client.Editor');
goog.require('org.gwtproject.editor.client.impl.AbstractEditorDelegate');
goog.require('org.gwtproject.editor.client.impl.DelegateMap');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const MapIterator = goog.require('org.gwtproject.editor.client.impl.DelegateMap.MapIterator$impl');
exports = MapIterator; 