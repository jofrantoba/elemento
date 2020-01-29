goog.module('org.gwtproject.user.client.ui.DeckLayoutPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.AcceptsOneWidget');
goog.require('org.gwtproject.user.client.ui.AnimatedLayout');
goog.require('org.gwtproject.user.client.ui.ComplexPanel');
goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget');
goog.require('org.gwtproject.user.client.ui.ProvidesResize');
goog.require('org.gwtproject.user.client.ui.RequiresResize');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.layout.client.Layout');
goog.require('org.gwtproject.layout.client.Layout.AnimationCallback');
goog.require('org.gwtproject.layout.client.Layout.Layer');
goog.require('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.LayoutCommand');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const DeckLayoutPanel = goog.require('org.gwtproject.user.client.ui.DeckLayoutPanel$impl');
exports = DeckLayoutPanel; 