goog.module('org.gwtproject.user.client.ui.ScrollPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.HasScrolling');
goog.require('org.gwtproject.user.client.ui.ProvidesResize');
goog.require('org.gwtproject.user.client.ui.RequiresResize');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.event.dom.client.ScrollEvent');
goog.require('org.gwtproject.event.dom.client.ScrollHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.touch.client.TouchScroller');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.ScrollImpl');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const ScrollPanel = goog.require('org.gwtproject.user.client.ui.ScrollPanel$impl');
exports = ScrollPanel; 