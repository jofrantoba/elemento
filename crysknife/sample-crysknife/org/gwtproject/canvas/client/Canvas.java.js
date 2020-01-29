goog.module('org.gwtproject.canvas.client.Canvas');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('org.gwtproject.canvas.dom.client.Context.$Overlay');
goog.require('org.gwtproject.canvas.dom.client.Context2d.$Overlay');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.CanvasElement.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const Canvas = goog.require('org.gwtproject.canvas.client.Canvas$impl');
exports = Canvas; 