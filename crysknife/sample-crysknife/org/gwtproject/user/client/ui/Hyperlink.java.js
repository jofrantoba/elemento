goog.module('org.gwtproject.user.client.ui.Hyperlink');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasClickHandlers');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml');
goog.require('org.gwtproject.user.client.ui.HasHTML');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickEvent');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.impl.HyperlinkImpl');
goog.require('org.gwtproject.user.history.client.History');
goog.require('vmbootstrap.Asserts');

const Hyperlink = goog.require('org.gwtproject.user.client.ui.Hyperlink$impl');
exports = Hyperlink; 