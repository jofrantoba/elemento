goog.module('org.gwtproject.user.cellview.client.CellBasedWidgetImpl');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.String');
goog.require('java.util.HashSet');
goog.require('java.util.Locale');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');

const CellBasedWidgetImpl = goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
exports = CellBasedWidgetImpl; 