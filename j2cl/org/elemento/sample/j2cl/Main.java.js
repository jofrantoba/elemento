goog.module('org.elemento.sample.j2cl.Main');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.core.client.EntryPoint');
goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLBodyElement.$Overlay');
goog.require('elemental2.dom.HashChangeEvent.$Overlay');
goog.require('org.elemento.Elements');
goog.require('org.elemento.EventType');
goog.require('org.elemento.HtmlContentBuilder');
goog.require('org.elemento.sample.j2cl.ApplicationElement');
goog.require('org.elemento.sample.j2cl.FooterElement');
goog.require('org.elemento.sample.j2cl.TodoRepository');
goog.require('vmbootstrap.Casts');

const Main = goog.require('org.elemento.sample.j2cl.Main$impl');
exports = Main; 