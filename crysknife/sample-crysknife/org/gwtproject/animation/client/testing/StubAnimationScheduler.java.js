goog.module('org.gwtproject.animation.client.testing.StubAnimationScheduler');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.animation.client.AnimationScheduler');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback');
goog.require('org.gwtproject.animation.client.testing.StubAnimationScheduler.StubAnimationHandle');
goog.require('org.gwtproject.dom.client.Element.$Overlay');

const StubAnimationScheduler = goog.require('org.gwtproject.animation.client.testing.StubAnimationScheduler$impl');
exports = StubAnimationScheduler; 