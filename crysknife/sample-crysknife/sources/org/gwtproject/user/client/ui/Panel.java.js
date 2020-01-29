goog.module('org.gwtproject.user.client.ui.Panel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('java.lang.Iterable');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.AttachDetachException');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Exceptions');

const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');
exports = Panel; 