goog.module('org.elemento.HtmlContent');

goog.require('nativebootstrap.Util');
goog.require('org.elemento.TextContent');
goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.IsElement');
goog.require('org.elemento.TypedBuilder');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('vmbootstrap.Casts');

const HtmlContent = goog.require('org.elemento.HtmlContent$impl');
exports = HtmlContent; 