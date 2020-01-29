goog.module('org.gwtproject.user.cellview.client.AbstractHasData.View');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.View');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.user.cellview.client.AbstractHasData');
goog.require('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent');
goog.require('org.gwtproject.user.cellview.client.AbstractHasData.View.$1');
goog.require('org.gwtproject.user.cellview.client.AbstractHasData.View.$2');
goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImpl');
goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState');
goog.require('org.gwtproject.view.client.SelectionModel');
goog.require('vmbootstrap.Exceptions');

const AbstractHasData_View = goog.require('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');
exports = AbstractHasData_View; 