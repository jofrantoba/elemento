goog.module('org.gwtproject.touch.client.TouchScroller.MomentumTouchRemovalCommand');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.core.client.Scheduler.RepeatingCommand');
goog.require('org.gwtproject.core.client.Duration');
goog.require('org.gwtproject.touch.client.TouchScroller');
goog.require('org.gwtproject.touch.client.TouchScroller.TemporalPoint');
goog.require('vmbootstrap.Casts');

const MomentumTouchRemovalCommand = goog.require('org.gwtproject.touch.client.TouchScroller.MomentumTouchRemovalCommand$impl');
exports = MomentumTouchRemovalCommand; 