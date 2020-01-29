goog.module('org.gwtproject.user.client.ui.TabBar.ClickDelegatePanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('org.gwtproject.user.client.ui.TabBar.Tab');
goog.require('java.lang.UnsupportedOperationException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickEvent');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.event.dom.client.KeyCodes');
goog.require('org.gwtproject.event.dom.client.KeyDownEvent');
goog.require('org.gwtproject.event.dom.client.KeyDownHandler');
goog.require('org.gwtproject.event.dom.client.KeyPressEvent');
goog.require('org.gwtproject.event.dom.client.KeyPressHandler');
goog.require('org.gwtproject.event.dom.client.KeyUpEvent');
goog.require('org.gwtproject.event.dom.client.KeyUpHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.FocusPanel');
goog.require('org.gwtproject.user.client.ui.HasWordWrap');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('org.gwtproject.user.client.ui.TabBar');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const ClickDelegatePanel = goog.require('org.gwtproject.user.client.ui.TabBar.ClickDelegatePanel$impl');
exports = ClickDelegatePanel; 