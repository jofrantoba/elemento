goog.module('org.gwtproject.user.client.ui.FileUpload');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasChangeHandlers');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('org.gwtproject.user.client.ui.HasEnabled');
goog.require('org.gwtproject.user.client.ui.HasName');
goog.require('java.lang.String');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.dom.client.ChangeEvent');
goog.require('org.gwtproject.event.dom.client.ChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const FileUpload = goog.require('org.gwtproject.user.client.ui.FileUpload$impl');
exports = FileUpload; 