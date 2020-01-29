goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator');
goog.require('java.lang.String');
goog.require('java.util.Locale');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.BrowserEvents');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.view.client.CellPreviewEvent');
goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction');
goog.require('vmbootstrap.Casts');

const CheckboxEventTranslator = goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator$impl');
exports = CheckboxEventTranslator; 