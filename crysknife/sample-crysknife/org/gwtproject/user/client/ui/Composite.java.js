goog.module('org.gwtproject.user.client.ui.Composite');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.IsRenderable');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.NullPointerException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.builder.shared.HtmlBuilderFactory');
goog.require('org.gwtproject.dom.builder.shared.HtmlSpanBuilder');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.event.logical.shared.AttachEvent');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.gwtproject.user.client.DOM');
goog.require('org.gwtproject.user.client.Event');
goog.require('org.gwtproject.user.client.ui.PotentialElement');
goog.require('org.gwtproject.user.client.ui.RenderableStamper');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
exports = Composite; 