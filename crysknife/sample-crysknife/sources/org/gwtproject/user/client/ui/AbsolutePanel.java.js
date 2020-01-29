goog.module('org.gwtproject.user.client.ui.AbsolutePanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ComplexPanel');
goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.Locale');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Exceptions');

const AbsolutePanel = goog.require('org.gwtproject.user.client.ui.AbsolutePanel$impl');
exports = AbsolutePanel; 