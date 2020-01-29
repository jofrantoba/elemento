goog.module('org.gwtproject.i18n.client.AutoDirectionHandler');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.KeyUpHandler');
goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.dom.client.KeyUpEvent');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.i18n.client.AutoDirectionHandler.Target');
goog.require('org.gwtproject.i18n.shared.DirectionEstimator');
goog.require('org.gwtproject.i18n.shared.WordCountDirectionEstimator');

const AutoDirectionHandler = goog.require('org.gwtproject.i18n.client.AutoDirectionHandler$impl');
exports = AutoDirectionHandler; 