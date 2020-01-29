goog.module('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.ArrayList');
goog.require('java.util.LinkedList');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.PrefixTree');
goog.require('org.gwtproject.user.client.ui.PrefixTree.Frame');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const PrefixTreeIterator = goog.require('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator$impl');
exports = PrefixTreeIterator; 