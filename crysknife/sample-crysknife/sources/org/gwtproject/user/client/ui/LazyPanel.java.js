goog.module('org.gwtproject.user.client.ui.LazyPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.Widget');

const LazyPanel = goog.require('org.gwtproject.user.client.ui.LazyPanel$impl');
exports = LazyPanel; 