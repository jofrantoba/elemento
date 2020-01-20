goog.module('org.jboss.elemento.HtmlContentBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.jboss.elemento.ElementBuilder$impl');
const HtmlContent = goog.require('org.jboss.elemento.HtmlContent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let TextContent = goog.forwardDeclare('org.jboss.elemento.TextContent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, HtmlContentBuilder<E>>}
 * @implements {HtmlContent<E, HtmlContentBuilder<E>>}
  */
class HtmlContentBuilder extends ElementBuilder {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template E
  * @param {E} element
  * @return {!HtmlContentBuilder<E>}
  * @public
  */
 static $create__elemental2_dom_HTMLElement(element) {
  HtmlContentBuilder.$clinit();
  let $instance = new HtmlContentBuilder();
  $instance.$ctor__org_jboss_elemento_HtmlContentBuilder__elemental2_dom_HTMLElement(element);
  return $instance;
 }
 /**
  * @param {E} element
  * @public
  */
 $ctor__org_jboss_elemento_HtmlContentBuilder__elemental2_dom_HTMLElement(element) {
  this.$ctor__org_jboss_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /**
  * @override
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_that__() {
  return this;
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {?string} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_add__java_lang_String(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_add__$default__org_jboss_elemento_HtmlContent__java_lang_String(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Node} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_add__elemental2_dom_Node(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_add__$default__org_jboss_elemento_HtmlContent__elemental2_dom_Node(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {IsElement<?>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_add__org_jboss_elemento_IsElement(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_add__$default__org_jboss_elemento_HtmlContent__org_jboss_elemento_IsElement(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Array<Node>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_addAll__arrayOf_elemental2_dom_Node(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_Node(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Array<Element>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_addAll__arrayOf_elemental2_dom_Element(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_Element(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Array<HTMLElement>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_addAll__arrayOf_elemental2_dom_HTMLElement(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_HTMLElement(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template F
  * @param {Array<IsElement<?>>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_addAll__arrayOf_org_jboss_elemento_IsElement(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_org_jboss_elemento_IsElement(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Iterable<?>} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_addAll__java_lang_Iterable(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_addAll__$default__org_jboss_elemento_HtmlContent__java_lang_Iterable(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {SafeHtml} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(HtmlContent.m_innerHtml__$default__org_jboss_elemento_HtmlContent__org_gwtproject_safehtml_shared_SafeHtml(this, arg0), HtmlContentBuilder));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {?string} arg0
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 m_textContent__java_lang_String(arg0) {
  return /**@type {HtmlContentBuilder<E>} */ ($Casts.$to(TextContent.m_textContent__$default__org_jboss_elemento_TextContent__java_lang_String(this, arg0), HtmlContentBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlContentBuilder.$clinit = () =>{};
  HtmlContentBuilder.$loadModules();
  ElementBuilder.$clinit();
  HtmlContent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlContentBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  TextContent = goog.module.get('org.jboss.elemento.TextContent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlContentBuilder, 'org.jboss.elemento.HtmlContentBuilder');

HtmlContent.$markImplementor(HtmlContentBuilder);

exports = HtmlContentBuilder; 
//# sourceMappingURL=HtmlContentBuilder.js.map