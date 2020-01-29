goog.module('org.gwtproject.dom.builder.client.DomStyleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const StyleBuilder = goog.require('org.gwtproject.dom.builder.shared.StyleBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<StyleBuilder, Object>}
 * @implements {StyleBuilder}
  */
class DomStyleBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomStyleBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomStyleBuilder.$clinit();
  let $instance = new DomStyleBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomStyleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomStyleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} cssText
  * @return {StyleBuilder}
  * @public
  */
 m_cssText__java_lang_String(cssText) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cssText = cssText;
  this.m_getDelegate___$pp_org_gwtproject_dom_builder_client().m_lockCurrentElement__();
  return this;
 }
 /**
  * @override
  * @return {StyleBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {StyleBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isChildElementSupported__() {
  return false;
 }
 /**
  * @override
  * @param {?string} media
  * @return {StyleBuilder}
  * @public
  */
 m_media__java_lang_String(media) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).media = media;
  return this;
 }
 /**
  * @override
  * @param {?string} text
  * @return {StyleBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {StyleBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomStyleBuilder.$clinit = () =>{};
  DomStyleBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomStyleBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomStyleBuilder, 'org.gwtproject.dom.builder.client.DomStyleBuilder');

StyleBuilder.$markImplementor(DomStyleBuilder);

exports = DomStyleBuilder; 
//# sourceMappingURL=DomStyleBuilder.js.map