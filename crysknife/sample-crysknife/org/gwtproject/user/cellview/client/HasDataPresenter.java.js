goog.module('org.gwtproject.user.cellview.client.HasDataPresenter');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy');
goog.require('org.gwtproject.view.client.HasData');
goog.require('org.gwtproject.view.client.HasKeyProvider');
goog.require('elemental2.core.JsArray.$Overlay');
goog.require('java.lang.Double');
goog.require('java.lang.Error');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Integer');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.ArrayList');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('jsinterop.base.Js');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.core.client.JsArrayInteger.$Overlay');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.$1');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.$2');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.DefaultState');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.PendingState');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.State');
goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.View');
goog.require('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy');
goog.require('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy');
goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent');
goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler');
goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState');
goog.require('org.gwtproject.view.client.CellPreviewEvent');
goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('org.gwtproject.view.client.Range');
goog.require('org.gwtproject.view.client.RangeChangeEvent');
goog.require('org.gwtproject.view.client.RangeChangeEvent.Handler');
goog.require('org.gwtproject.view.client.RowCountChangeEvent');
goog.require('org.gwtproject.view.client.RowCountChangeEvent.Handler');
goog.require('org.gwtproject.view.client.SelectionModel');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const HasDataPresenter = goog.require('org.gwtproject.user.cellview.client.HasDataPresenter$impl');
exports = HasDataPresenter; 