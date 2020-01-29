goog.module('org.gwtproject.dom.builder.client.DomTableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableColBuilder = goog.require('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<TableColBuilder, Object>}
 * @implements {TableColBuilder}
  */
class DomTableColBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @param {boolean} group
  * @return {!DomTableColBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, group) {
  DomTableColBuilder.$clinit();
  let $instance = new DomTableColBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, group);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @param {boolean} group
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomTableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, group) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, !group);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableColBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableColBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableColBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /**
  * @override
  * @param {number} span
  * @return {TableColBuilder}
  * @public
  */
 m_span__int(span) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).span = span;
  return this;
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableColBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 /**
  * @override
  * @param {?string} width
  * @return {TableColBuilder}
  * @public
  */
 m_width__java_lang_String(width) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomTableColBuilder.$clinit = () =>{};
  DomTableColBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomTableColBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomTableColBuilder, 'org.gwtproject.dom.builder.client.DomTableColBuilder');

TableColBuilder.$markImplementor(DomTableColBuilder);

exports = DomTableColBuilder; 
//# sourceMappingURL=DomTableColBuilder.js.map