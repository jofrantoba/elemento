goog.module('org.gwtproject.user.client.ui.DecoratorPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Arrays');

const DecoratorPanel = goog.require('org.gwtproject.user.client.ui.DecoratorPanel$impl');
exports = DecoratorPanel; 