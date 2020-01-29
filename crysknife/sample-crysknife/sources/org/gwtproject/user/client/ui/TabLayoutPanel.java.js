goog.module('org.gwtproject.user.client.ui.TabLayoutPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers');
goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers');
goog.require('org.gwtproject.user.client.ui.AnimatedLayout');
goog.require('org.gwtproject.user.client.ui.HasWidgets');
goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget');
goog.require('org.gwtproject.user.client.ui.ProvidesResize');
goog.require('org.gwtproject.user.client.ui.ResizeComposite');
goog.require('java.lang.Integer');
goog.require('java.lang.Iterable');
goog.require('java.util.ArrayList');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.event.logical.shared.BeforeSelectionEvent');
goog.require('org.gwtproject.event.logical.shared.BeforeSelectionHandler');
goog.require('org.gwtproject.event.logical.shared.SelectionEvent');
goog.require('org.gwtproject.event.logical.shared.SelectionHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.layout.client.Layout.Alignment');
goog.require('org.gwtproject.layout.client.Layout.AnimationCallback');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.ui.FlowPanel');
goog.require('org.gwtproject.user.client.ui.HTML');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.Label');
goog.require('org.gwtproject.user.client.ui.LayoutPanel');
goog.require('org.gwtproject.user.client.ui.TabLayoutPanel.$1');
goog.require('org.gwtproject.user.client.ui.TabLayoutPanel.Tab');
goog.require('org.gwtproject.user.client.ui.TabLayoutPanel.TabbedDeckLayoutPanel');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const TabLayoutPanel = goog.require('org.gwtproject.user.client.ui.TabLayoutPanel$impl');
exports = TabLayoutPanel; 