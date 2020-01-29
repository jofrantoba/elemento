goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalStateException');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Exceptions');

const FiniteWidgetIterator = goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator$impl');
exports = FiniteWidgetIterator; 