goog.module('org.gwtproject.user.client.ui.SplitPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Panel');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Iterable');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.user.client.ui.WidgetIterators');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Exceptions');

const SplitPanel = goog.require('org.gwtproject.user.client.ui.SplitPanel$impl');
exports = SplitPanel; 