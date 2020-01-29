goog.module('org.gwtproject.user.client.ui.CheckBox');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('org.gwtproject.user.client.ui.ButtonBase');
goog.require('org.gwtproject.user.client.ui.HasDirectionalSafeHtml');
goog.require('org.gwtproject.user.client.ui.HasName');
goog.require('org.gwtproject.user.client.ui.HasValue');
goog.require('org.gwtproject.user.client.ui.HasWordWrap');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.LabelElement.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.WhiteSpace');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.i18n.client.HasDirection.Direction');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.CheckBox.$1');
goog.require('org.gwtproject.user.client.ui.DirectionalTextHelper');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('vmbootstrap.Casts');

const CheckBox = goog.require('org.gwtproject.user.client.ui.CheckBox$impl');
exports = CheckBox; 