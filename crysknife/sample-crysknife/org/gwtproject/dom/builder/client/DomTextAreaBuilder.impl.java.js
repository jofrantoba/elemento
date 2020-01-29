goog.module('org.gwtproject.dom.builder.client.DomTextAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TextAreaBuilder = goog.require('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TextAreaBuilder, Object>}
 * @implements {TextAreaBuilder}
  */
class DomTextAreaBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomTextAreaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomTextAreaBuilder.$clinit();
  let $instance = new DomTextAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTextAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomTextAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {TextAreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /**
  * @override
  * @param {number} cols
  * @return {TextAreaBuilder}
  * @public
  */
 m_cols__int(cols) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cols = cols;
  return this;
 }
 /**
  * @override
  * @param {?string} defaultValue
  * @return {TextAreaBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultValue = defaultValue;
  return this;
 }
 /**
  * @override
  * @return {TextAreaBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {TextAreaBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TextAreaBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TextAreaBuilder));
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
  * @param {?string} name
  * @return {TextAreaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /**
  * @override
  * @return {TextAreaBuilder}
  * @public
  */
 m_readOnly__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).readOnly = true;
  return this;
 }
 /**
  * @override
  * @param {number} rows
  * @return {TextAreaBuilder}
  * @public
  */
 m_rows__int(rows) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rows = rows;
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {TextAreaBuilder}
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
  DomTextAreaBuilder.$clinit = () =>{};
  DomTextAreaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomTextAreaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTextAreaBuilder, 'org.gwtproject.dom.builder.client.DomTextAreaBuilder');

TextAreaBuilder.$markImplementor(DomTextAreaBuilder);

exports = DomTextAreaBuilder; 
//# sourceMappingURL=DomTextAreaBuilder.js.map