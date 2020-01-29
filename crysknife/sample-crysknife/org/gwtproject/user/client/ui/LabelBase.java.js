goog.module('org.gwtproject.user.client.ui.LabelBase');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('org.gwtproject.user.client.ui.HasAutoHorizontalAlignment');
goog.require('org.gwtproject.user.client.ui.HasWordWrap');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.WhiteSpace');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper');
goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant');
goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const LabelBase = goog.require('org.gwtproject.user.client.ui.LabelBase$impl');
exports = LabelBase; 