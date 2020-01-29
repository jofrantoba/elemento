goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasResizeHandlers');
goog.require('org.gwtproject.user.client.ui.ProvidesResize');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.event.logical.shared.ResizeEvent');
goog.require('org.gwtproject.event.logical.shared.ResizeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.layout.client.Layout');
goog.require('org.gwtproject.layout.client.Layout.Layer');
goog.require('org.gwtproject.user.client.ui.RequiresResize');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.$1');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.$2');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');

const ResizeLayoutPanel = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel$impl');
exports = ResizeLayoutPanel; 