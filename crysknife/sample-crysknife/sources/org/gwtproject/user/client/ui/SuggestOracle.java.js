goog.module('org.gwtproject.user.client.ui.SuggestOracle');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.util.ArrayList');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.SuggestOracle.Callback');
goog.require('org.gwtproject.user.client.ui.SuggestOracle.Request');
goog.require('org.gwtproject.user.client.ui.SuggestOracle.Response');
goog.require('org.gwtproject.user.client.ui.SuggestOracle.Suggestion');
goog.require('vmbootstrap.Asserts');

const SuggestOracle = goog.require('org.gwtproject.user.client.ui.SuggestOracle$impl');
exports = SuggestOracle; 