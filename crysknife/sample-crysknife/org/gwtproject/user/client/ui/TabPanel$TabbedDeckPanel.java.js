goog.module('org.gwtproject.user.client.ui.TabPanel.TabbedDeckPanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.DeckPanel');
goog.require('java.lang.Iterable');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('org.gwtproject.user.client.ui.TabPanel.UnmodifiableTabBar');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Exceptions');

const TabbedDeckPanel = goog.require('org.gwtproject.user.client.ui.TabPanel.TabbedDeckPanel$impl');
exports = TabbedDeckPanel; 