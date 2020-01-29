goog.module('org.gwtproject.uibinder.client.impl.AbstractUiRenderer');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.uibinder.client.UiRenderer');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const AbstractUiRenderer = goog.require('org.gwtproject.uibinder.client.impl.AbstractUiRenderer$impl');
exports = AbstractUiRenderer; 