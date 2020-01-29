goog.module('org.gwtproject.user.client.ui.PrefixTree');

goog.require('java.util.AbstractCollection');
goog.require('nativebootstrap.Util');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Collection');
goog.require('java.util.HashMap');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator');
goog.require('vmbootstrap.Casts');

const PrefixTree = goog.require('org.gwtproject.user.client.ui.PrefixTree$impl');
exports = PrefixTree; 