goog.module('org.gwtproject.user.client.ui.TabLayoutPanel.Tab');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickEvent');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.resources.client.CommonResources');
goog.require('org.gwtproject.user.client.ui.TabLayoutPanel');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');

const Tab = goog.require('org.gwtproject.user.client.ui.TabLayoutPanel.Tab$impl');
exports = Tab; 