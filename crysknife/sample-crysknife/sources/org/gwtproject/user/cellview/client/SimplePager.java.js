goog.module('org.gwtproject.user.cellview.client.SimplePager');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.cellview.client.AbstractPager');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.event.dom.client.ClickEvent');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.i18n.client.NumberFormat');
goog.require('org.gwtproject.user.cellview.client.SimplePager.ImageButton');
goog.require('org.gwtproject.user.cellview.client.SimplePager.ImageButtonsConstants');
goog.require('org.gwtproject.user.cellview.client.SimplePager.Resources');
goog.require('org.gwtproject.user.cellview.client.SimplePager.Style');
goog.require('org.gwtproject.user.cellview.client.SimplePager.TextLocation');
goog.require('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl');
goog.require('org.gwtproject.user.client.ui.HTML');
goog.require('org.gwtproject.user.client.ui.HasVerticalAlignment');
goog.require('org.gwtproject.user.client.ui.HorizontalPanel');
goog.require('org.gwtproject.view.client.HasRows');
goog.require('vmbootstrap.Primitives');

const SimplePager = goog.require('org.gwtproject.user.cellview.client.SimplePager$impl');
exports = SimplePager; 