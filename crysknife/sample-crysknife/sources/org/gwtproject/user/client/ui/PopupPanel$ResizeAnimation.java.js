goog.module('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.animation.client.Animation');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.timer.client.Timer');
goog.require('org.gwtproject.user.client.ui.PopupPanel');
goog.require('org.gwtproject.user.client.ui.PopupPanel.AnimationType');
goog.require('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation.$1');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('org.gwtproject.user.window.client.Window');
goog.require('vmbootstrap.Primitives');

const ResizeAnimation = goog.require('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation$impl');
exports = ResizeAnimation; 