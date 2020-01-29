goog.module('org.gwtproject.dom.builder.client.DomInputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const InputBuilder = goog.require('org.gwtproject.dom.builder.shared.InputBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<InputBuilder, Object>}
 * @implements {InputBuilder}
  */
class DomInputBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomInputBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomInputBuilder.$clinit();
  let $instance = new DomInputBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomInputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomInputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} accept
  * @return {InputBuilder}
  * @public
  */
 m_accept__java_lang_String(accept) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accept = accept;
  return this;
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {InputBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /**
  * @override
  * @param {?string} alt
  * @return {InputBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).alt = alt;
  return this;
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_checked__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).checked = true;
  return this;
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_defaultChecked__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultChecked = true;
  return this;
 }
 /**
  * @override
  * @param {?string} defaultValue
  * @return {InputBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultValue = defaultValue;
  return this;
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {number} maxLength
  * @return {InputBuilder}
  * @public
  */
 m_maxLength__int(maxLength) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).maxLength = maxLength;
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_readOnly__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).readOnly = true;
  return this;
 }
 /**
  * @override
  * @param {number} size
  * @return {InputBuilder}
  * @public
  */
 m_size__int(size) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).size = size;
  return this;
 }
 /**
  * @override
  * @param {?string} src
  * @return {InputBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {InputBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).value = value;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomInputBuilder.$clinit = () =>{};
  DomInputBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomInputBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomInputBuilder, 'org.gwtproject.dom.builder.client.DomInputBuilder');

InputBuilder.$markImplementor(DomInputBuilder);

exports = DomInputBuilder; 
//# sourceMappingURL=DomInputBuilder.js.map