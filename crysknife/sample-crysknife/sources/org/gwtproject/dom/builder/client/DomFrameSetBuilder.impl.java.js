goog.module('org.gwtproject.dom.builder.client.DomFrameSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FrameSetBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<FrameSetBuilder, Object>}
 * @implements {FrameSetBuilder}
  */
class DomFrameSetBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomFrameSetBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomFrameSetBuilder.$clinit();
  let $instance = new DomFrameSetBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFrameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomFrameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} cols
  * @return {FrameSetBuilder}
  * @public
  */
 m_cols__java_lang_String(cols) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cols = cols;
  return this;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {FrameSetBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @param {?string} rows
  * @return {FrameSetBuilder}
  * @public
  */
 m_rows__java_lang_String(rows) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rows = rows;
  return this;
 }
 /**
  * @override
  * @param {?string} text
  * @return {FrameSetBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  DomFrameSetBuilder.$clinit = () =>{};
  DomFrameSetBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomFrameSetBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomFrameSetBuilder, 'org.gwtproject.dom.builder.client.DomFrameSetBuilder');

FrameSetBuilder.$markImplementor(DomFrameSetBuilder);

exports = DomFrameSetBuilder; 
//# sourceMappingURL=DomFrameSetBuilder.js.map