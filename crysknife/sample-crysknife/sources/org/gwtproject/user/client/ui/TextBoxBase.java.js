goog.module('org.gwtproject.user.client.ui.TextBoxBase');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.ValueBoxBase');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.text.shared.testing.PassthroughParser');
goog.require('org.gwtproject.text.shared.testing.PassthroughRenderer');
goog.require('org.gwtproject.user.client.ui.TextBoxBase.TextAlignConstant');
goog.require('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment');
goog.require('vmbootstrap.Casts');

const TextBoxBase = goog.require('org.gwtproject.user.client.ui.TextBoxBase$impl');
exports = TextBoxBase; 