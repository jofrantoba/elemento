goog.module('org.gwtproject.user.client.ui.Button');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ButtonBase');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.ButtonElement.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const Button = goog.require('org.gwtproject.user.client.ui.Button$impl');
exports = Button; 