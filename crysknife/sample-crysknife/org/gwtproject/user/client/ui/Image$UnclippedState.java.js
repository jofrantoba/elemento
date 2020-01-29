goog.module('org.gwtproject.user.client.ui.Image.UnclippedState');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Image.State');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.ImageElement.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeUri');
goog.require('org.gwtproject.safehtml.shared.UriUtils');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.Image');
goog.require('org.gwtproject.user.client.ui.Image.ClippedState');
goog.require('vmbootstrap.Casts');

const UnclippedState = goog.require('org.gwtproject.user.client.ui.Image.UnclippedState$impl');
exports = UnclippedState; 