goog.module('org.gwtproject.user.client.ui.MenuBar.MenuPopup');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.DecoratedPopupPanel');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.EventTarget.$Overlay');
goog.require('org.gwtproject.dom.client.NativeEvent.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.i18n.client.LocaleInfo');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.Event.NativePreviewEvent');
goog.require('org.gwtproject.user.client.ui.MenuBar');
goog.require('org.gwtproject.user.client.ui.MenuItem');
goog.require('org.gwtproject.user.client.ui.PopupPanel.AnimationType');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.user.window.client.Window');

const MenuPopup = goog.require('org.gwtproject.user.client.ui.MenuBar.MenuPopup$impl');
exports = MenuPopup; 