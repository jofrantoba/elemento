goog.module('org.gwtproject.event.logical.shared.ResizeEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.HasResizeHandlers');
goog.require('org.gwtproject.event.logical.shared.ResizeHandler');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.HasHandlers');
goog.require('vmbootstrap.Casts');

const ResizeEvent = goog.require('org.gwtproject.event.logical.shared.ResizeEvent$impl');
exports = ResizeEvent; 