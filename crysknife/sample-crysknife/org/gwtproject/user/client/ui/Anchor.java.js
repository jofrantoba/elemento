goog.module('org.gwtproject.user.client.ui.Anchor');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.i18n.client.HasDirection');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml');
goog.require('org.gwtproject.user.client.ui.HasHTML');
goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment');
goog.require('org.gwtproject.user.client.ui.HasName');
goog.require('org.gwtproject.user.client.ui.HasWordWrap');
goog.require('java.lang.Character');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.AnchorElement.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.WhiteSpace');
goog.require('org.gwtproject.i18n.client.BidiUtils');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeUri');
goog.require('org.gwtproject.user.client.ui.Anchor.$1');
goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper');
goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');

const Anchor = goog.require('org.gwtproject.user.client.ui.Anchor$impl');
exports = Anchor; 