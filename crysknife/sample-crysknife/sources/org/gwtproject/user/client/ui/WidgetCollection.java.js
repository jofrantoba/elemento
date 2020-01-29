goog.module('org.gwtproject.user.client.ui.WidgetCollection');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.HasWidgets');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.user.client.ui.WidgetCollection.WidgetIterator');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');

const WidgetCollection = goog.require('org.gwtproject.user.client.ui.WidgetCollection$impl');
exports = WidgetCollection; 