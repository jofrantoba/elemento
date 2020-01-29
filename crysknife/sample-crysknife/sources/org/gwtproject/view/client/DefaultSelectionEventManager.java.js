goog.module('org.gwtproject.view.client.DefaultSelectionEventManager');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.BrowserEvents');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.view.client.CellPreviewEvent');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.BlacklistEventTranslator');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.WhitelistEventTranslator');
goog.require('org.gwtproject.view.client.HasData');
goog.require('org.gwtproject.view.client.MultiSelectionModel');
goog.require('org.gwtproject.view.client.Range');
goog.require('org.gwtproject.view.client.SelectionModel');
goog.require('vmbootstrap.Casts');

const DefaultSelectionEventManager = goog.require('org.gwtproject.view.client.DefaultSelectionEventManager$impl');
exports = DefaultSelectionEventManager; 