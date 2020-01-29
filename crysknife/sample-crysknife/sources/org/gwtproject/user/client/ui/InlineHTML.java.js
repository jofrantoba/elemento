goog.module('org.gwtproject.user.client.ui.InlineHTML');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.HTML');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.ui.RootPanel');
goog.require('vmbootstrap.Asserts');

const InlineHTML = goog.require('org.gwtproject.user.client.ui.InlineHTML$impl');
exports = InlineHTML; 