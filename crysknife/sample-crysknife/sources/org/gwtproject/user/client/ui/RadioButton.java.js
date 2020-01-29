goog.module('org.gwtproject.user.client.ui.RadioButton');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.CheckBox');
goog.require('java.lang.Boolean');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.EventTarget.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper');
goog.require('vmbootstrap.Casts');

const RadioButton = goog.require('org.gwtproject.user.client.ui.RadioButton$impl');
exports = RadioButton; 