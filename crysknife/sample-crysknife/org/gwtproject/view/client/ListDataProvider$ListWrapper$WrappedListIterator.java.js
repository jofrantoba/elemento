goog.module('org.gwtproject.view.client.ListDataProvider.ListWrapper.WrappedListIterator');

goog.require('java.lang.Object');
goog.require('java.util.ListIterator');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('org.gwtproject.view.client.ListDataProvider.ListWrapper');
goog.require('vmbootstrap.Exceptions');

const WrappedListIterator = goog.require('org.gwtproject.view.client.ListDataProvider.ListWrapper.WrappedListIterator$impl');
exports = WrappedListIterator; 