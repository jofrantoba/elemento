goog.module('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.BrowserEvents');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.event.dom.client.KeyCodes');
goog.require('org.gwtproject.user.cellview.client.AbstractHasData');
goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImpl');
goog.require('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy');
goog.require('org.gwtproject.view.client.CellPreviewEvent');

const DefaultKeyboardSelectionHandler = goog.require('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler$impl');
exports = DefaultKeyboardSelectionHandler; 