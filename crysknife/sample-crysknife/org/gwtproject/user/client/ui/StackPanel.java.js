goog.module('org.gwtproject.user.client.ui.StackPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ComplexPanel');
goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget');
goog.require('java.lang.Integer');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');

const StackPanel = goog.require('org.gwtproject.user.client.ui.StackPanel$impl');
exports = StackPanel; 