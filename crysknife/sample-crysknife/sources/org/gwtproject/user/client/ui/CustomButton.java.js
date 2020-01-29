goog.module('org.gwtproject.user.client.ui.CustomButton');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ButtonBase');
goog.require('java.lang.IllegalStateException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.aria.client.PressedValue');
goog.require('org.gwtproject.aria.client.Roles');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.CustomButton.$1');
goog.require('org.gwtproject.user.client.ui.CustomButton.$2');
goog.require('org.gwtproject.user.client.ui.CustomButton.Face');
goog.require('org.gwtproject.user.client.ui.FocusPanel');
goog.require('org.gwtproject.user.client.ui.Image');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const CustomButton = goog.require('org.gwtproject.user.client.ui.CustomButton$impl');
exports = CustomButton; 