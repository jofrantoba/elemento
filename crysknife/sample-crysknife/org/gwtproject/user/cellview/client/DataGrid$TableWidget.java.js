goog.module('org.gwtproject.user.cellview.client.DataGrid.TableWidget');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.client.TableColElement.$Overlay');
goog.require('org.gwtproject.dom.client.TableElement.$Overlay');
goog.require('org.gwtproject.dom.client.TableSectionElement.$Overlay');
goog.require('org.gwtproject.dom.style.shared.TableLayout');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('vmbootstrap.Casts');

const TableWidget = goog.require('org.gwtproject.user.cellview.client.DataGrid.TableWidget$impl');
exports = TableWidget; 