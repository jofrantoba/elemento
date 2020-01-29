goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.EventListener');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.dom.style.shared.Visibility');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard.$1');
goog.require('vmbootstrap.Casts');

const ImplStandard = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
exports = ImplStandard; 