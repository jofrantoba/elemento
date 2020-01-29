goog.module('org.gwtproject.user.client.ui.DockLayoutPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.AnimatedLayout');
goog.require('org.gwtproject.user.client.ui.ComplexPanel');
goog.require('org.gwtproject.user.client.ui.ProvidesResize');
goog.require('org.gwtproject.user.client.ui.RequiresResize');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.layout.client.Layout');
goog.require('org.gwtproject.layout.client.Layout.AnimationCallback');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.Direction');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.DockAnimateCommand');
goog.require('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.LayoutCommand');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const DockLayoutPanel = goog.require('org.gwtproject.user.client.ui.DockLayoutPanel$impl');
exports = DockLayoutPanel; 