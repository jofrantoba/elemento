goog.module('org.gwtproject.user.client.ui.DirectionalTextHelper');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.i18n.client.BidiUtils');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.BidiFormatter');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.i18n.shared.WordCountDirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');

const DirectionalTextHelper = goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
exports = DirectionalTextHelper; 