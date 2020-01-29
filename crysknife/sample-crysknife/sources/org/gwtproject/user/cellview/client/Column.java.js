goog.module('org.gwtproject.user.cellview.client.Column');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.cell.client.HasCell');
goog.require('org.gwtproject.user.client.ui.HasAlignment');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.cell.client.FieldUpdater');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.user.cellview.client.Column.$1');
goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant');
goog.require('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant');

const Column = goog.require('org.gwtproject.user.cellview.client.Column$impl');
exports = Column; 