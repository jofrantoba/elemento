goog.module('org.gwtproject.user.client.ui.HTMLPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ComplexPanel');
goog.require('java.lang.Iterable');
goog.require('java.lang.StringBuilder');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const HTMLPanel = goog.require('org.gwtproject.user.client.ui.HTMLPanel$impl');
exports = HTMLPanel; 