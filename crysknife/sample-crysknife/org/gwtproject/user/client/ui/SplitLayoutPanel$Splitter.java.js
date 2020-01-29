goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.Duration');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData');
goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel');
goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter.$1');
goog.require('org.gwtproject.user.window.client.Window');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const Splitter = goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');
exports = Splitter; 