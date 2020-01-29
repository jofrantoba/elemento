goog.module('org.gwtproject.user.client.ui.AbstractNativeScrollbar');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasScrollHandlers');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.event.dom.client.ScrollEvent');
goog.require('org.gwtproject.event.dom.client.ScrollHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.Event');

const AbstractNativeScrollbar = goog.require('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');
exports = AbstractNativeScrollbar; 