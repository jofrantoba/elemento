goog.module('org.gwtproject.user.client.ui.MenuItem');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.client.HasSafeHtml');
goog.require('org.gwtproject.user.client.ui.HasEnabled');
goog.require('org.gwtproject.user.client.ui.HasHTML');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.aria.client.Roles');
goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.Command');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.FocusPanel');
goog.require('org.gwtproject.user.client.ui.MenuBar');
goog.require('org.gwtproject.user.client.ui.MenuItem.$1');
goog.require('vmbootstrap.Casts');

const MenuItem = goog.require('org.gwtproject.user.client.ui.MenuItem$impl');
exports = MenuItem; 