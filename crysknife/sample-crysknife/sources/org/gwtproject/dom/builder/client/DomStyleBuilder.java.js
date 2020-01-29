goog.module('org.gwtproject.dom.builder.client.DomStyleBuilder');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase');
goog.require('org.gwtproject.dom.builder.shared.StyleBuilder');
goog.require('java.lang.UnsupportedOperationException');
goog.require('org.gwtproject.dom.builder.client.DomBuilderImpl');
goog.require('org.gwtproject.dom.client.StyleElement.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const DomStyleBuilder = goog.require('org.gwtproject.dom.builder.client.DomStyleBuilder$impl');
exports = DomStyleBuilder; 