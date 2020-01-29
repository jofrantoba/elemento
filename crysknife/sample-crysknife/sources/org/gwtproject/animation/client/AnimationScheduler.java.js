goog.module('org.gwtproject.animation.client.AnimationScheduler');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback');
goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle');
goog.require('org.gwtproject.animation.client.AnimationSchedulerImplStandard');
goog.require('org.gwtproject.dom.client.Element.$Overlay');

const AnimationScheduler = goog.require('org.gwtproject.animation.client.AnimationScheduler$impl');
exports = AnimationScheduler; 