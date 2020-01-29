goog.module('org.gwtproject.user.client.ui.Frame');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasLoadHandlers');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.FrameElement.$Overlay');
goog.require('org.gwtproject.dom.client.IFrameElement.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.dom.client.LoadEvent');
goog.require('org.gwtproject.event.dom.client.LoadHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.safehtml.shared.SafeUri');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const Frame = goog.require('org.gwtproject.user.client.ui.Frame$impl');
exports = Frame; 