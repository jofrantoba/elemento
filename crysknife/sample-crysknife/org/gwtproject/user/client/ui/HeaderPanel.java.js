goog.module('org.gwtproject.user.client.ui.HeaderPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Panel');
goog.require('org.gwtproject.user.client.ui.RequiresResize');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Iterable');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Display');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator');
goog.require('org.gwtproject.user.client.ui.HeaderPanel.$1');
goog.require('org.gwtproject.user.client.ui.HeaderPanel.$2');
goog.require('org.gwtproject.user.client.ui.HeaderPanel.WidgetProviderImpl');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl');
goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const HeaderPanel = goog.require('org.gwtproject.user.client.ui.HeaderPanel$impl');
exports = HeaderPanel; 