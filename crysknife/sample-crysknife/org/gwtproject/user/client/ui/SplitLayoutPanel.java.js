goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.Direction');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData');
goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.HSplitter');
goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter');
goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.VSplitter');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const SplitLayoutPanel = goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
exports = SplitLayoutPanel; 