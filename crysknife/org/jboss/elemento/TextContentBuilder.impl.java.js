goog.module('org.jboss.elemento.TextContentBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.jboss.elemento.ElementBuilder$impl');
const TextContent = goog.require('org.jboss.elemento.TextContent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, TextContentBuilder<E>>}
 * @implements {TextContent<E, TextContentBuilder<E>>}
  */
class TextContentBuilder extends ElementBuilder {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template E
  * @param {E} element
  * @return {!TextContentBuilder<E>}
  * @public
  */
 static $create__elemental2_dom_HTMLElement(element) {
  TextContentBuilder.$clinit();
  let $instance = new TextContentBuilder();
  $instance.$ctor__org_jboss_elemento_TextContentBuilder__elemental2_dom_HTMLElement(element);
  return $instance;
 }
 /**
  * @param {E} element
  * @public
  */
 $ctor__org_jboss_elemento_TextContentBuilder__elemental2_dom_HTMLElement(element) {
  this.$ctor__org_jboss_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /**
  * @override
  * @return {TextContentBuilder<E>}
  * @public
  */
 m_that__() {
  return this;
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {?string} arg0
  * @return {TextContentBuilder<E>}
  * @public
  */
 m_textContent__java_lang_String(arg0) {
  return /**@type {TextContentBuilder<E>} */ ($Casts.$to(TextContent.m_textContent__$default__org_jboss_elemento_TextContent__java_lang_String(this, arg0), TextContentBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  TextContentBuilder.$clinit = () =>{};
  TextContentBuilder.$loadModules();
  ElementBuilder.$clinit();
  TextContent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextContentBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TextContentBuilder, 'org.jboss.elemento.TextContentBuilder');

TextContent.$markImplementor(TextContentBuilder);

exports = TextContentBuilder; 
//# sourceMappingURL=TextContentBuilder.js.map