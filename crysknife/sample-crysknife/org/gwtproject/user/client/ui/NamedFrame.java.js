goog.module('org.gwtproject.user.client.ui.NamedFrame');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Frame');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.IFrameElement.$Overlay');
goog.require('org.gwtproject.regexp.shared.RegExp');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const NamedFrame = goog.require('org.gwtproject.user.client.ui.NamedFrame$impl');
exports = NamedFrame; 