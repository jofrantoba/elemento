goog.module('org.gwtproject.event.logical.shared.AttachEvent');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.logical.shared.AttachEvent.Handler');
goog.require('org.gwtproject.event.logical.shared.HasAttachHandlers');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('vmbootstrap.Casts');

const AttachEvent = goog.require('org.gwtproject.event.logical.shared.AttachEvent$impl');
exports = AttachEvent; 