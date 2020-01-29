goog.module('org.gwtproject.cell.client.CompositeCell');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.cell.client.AbstractCell');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.cell.client.CompositeCell.$1');
goog.require('org.gwtproject.cell.client.HasCell');
goog.require('org.gwtproject.cell.client.ValueUpdater');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CompositeCell = goog.require('org.gwtproject.cell.client.CompositeCell$impl');
exports = CompositeCell; 