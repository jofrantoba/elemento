goog.module('org.gwtproject.user.client.ui.Hidden');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.TakesValue');
goog.require('org.gwtproject.user.client.ui.HasName');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const Hidden = goog.require('org.gwtproject.user.client.ui.Hidden$impl');
exports = Hidden; 