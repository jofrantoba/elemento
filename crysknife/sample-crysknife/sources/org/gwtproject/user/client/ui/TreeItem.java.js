goog.module('org.gwtproject.user.client.ui.TreeItem');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.client.HasSafeHtml');
goog.require('org.gwtproject.user.client.ui.HasHTML');
goog.require('org.gwtproject.user.client.ui.HasTreeItems');
goog.require('org.gwtproject.user.client.ui.IsTreeItem');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.ui.Focusable');
goog.require('org.gwtproject.user.client.ui.Tree');
goog.require('org.gwtproject.user.client.ui.TreeItem.TreeItemAnimation');
goog.require('org.gwtproject.user.client.ui.TreeItem.TreeItemImpl');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const TreeItem = goog.require('org.gwtproject.user.client.ui.TreeItem$impl');
exports = TreeItem; 