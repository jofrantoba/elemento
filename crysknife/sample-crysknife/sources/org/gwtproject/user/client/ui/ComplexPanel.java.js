goog.module('org.gwtproject.user.client.ui.ComplexPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget');
goog.require('org.gwtproject.user.client.ui.Panel');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Iterable');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.AttachDetachException');
goog.require('org.gwtproject.user.client.ui.AttachDetachException.Command');
goog.require('org.gwtproject.user.client.ui.ComplexPanel.$1');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.user.client.ui.WidgetCollection');
goog.require('vmbootstrap.Exceptions');

const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
exports = ComplexPanel; 