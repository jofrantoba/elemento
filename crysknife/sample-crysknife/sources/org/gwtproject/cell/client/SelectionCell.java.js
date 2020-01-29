goog.module('org.gwtproject.cell.client.SelectionCell');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.cell.client.AbstractInputCell');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.cell.client.SelectionCell.Template');
goog.require('org.gwtproject.cell.client.ValueUpdater');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.BrowserEvents');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.SelectElement.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const SelectionCell = goog.require('org.gwtproject.cell.client.SelectionCell$impl');
exports = SelectionCell; 