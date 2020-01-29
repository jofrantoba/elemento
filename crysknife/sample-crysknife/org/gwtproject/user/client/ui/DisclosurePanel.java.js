goog.module('org.gwtproject.user.client.ui.DisclosurePanel');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers');
goog.require('org.gwtproject.event.logical.shared.HasOpenHandlers');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('org.gwtproject.user.client.ui.HasAnimation');
goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.event.logical.shared.CloseEvent');
goog.require('org.gwtproject.event.logical.shared.CloseHandler');
goog.require('org.gwtproject.event.logical.shared.OpenEvent');
goog.require('org.gwtproject.event.logical.shared.OpenHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.resources.client.ImageResource');
goog.require('org.gwtproject.user.client.ui.DisclosurePanel.ClickableHeader');
goog.require('org.gwtproject.user.client.ui.DisclosurePanel.ContentAnimation');
goog.require('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader');
goog.require('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages');
goog.require('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl');
goog.require('org.gwtproject.user.client.ui.HasText');
goog.require('org.gwtproject.user.client.ui.IsWidget');
goog.require('org.gwtproject.user.client.ui.SimplePanel');
goog.require('org.gwtproject.user.client.ui.VerticalPanel');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('org.gwtproject.user.client.ui.WidgetIterators');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const DisclosurePanel = goog.require('org.gwtproject.user.client.ui.DisclosurePanel$impl');
exports = DisclosurePanel; 