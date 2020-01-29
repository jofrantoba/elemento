goog.module('org.gwtproject.dom.builder.client.DomFormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FormBuilder = goog.require('org.gwtproject.dom.builder.shared.FormBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<FormBuilder, Object>}
 * @implements {FormBuilder}
  */
class DomFormBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomFormBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomFormBuilder.$clinit();
  let $instance = new DomFormBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFormBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomFormBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} acceptCharset
  * @return {FormBuilder}
  * @public
  */
 m_acceptCharset__java_lang_String(acceptCharset) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).acceptCharset = acceptCharset;
  return this;
 }
 /**
  * @override
  * @param {SafeUri} action
  * @return {FormBuilder}
  * @public
  */
 m_action__org_gwtproject_safehtml_shared_SafeUri(action) {
  $Overlay.m_setAction__$devirt__org_gwtproject_dom_client_FormElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), action);
  return this;
 }
 /**
  * @override
  * @param {?string} action
  * @return {FormBuilder}
  * @public
  */
 m_action__java_lang_String(action) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).action = action;
  return this;
 }
 /**
  * @override
  * @param {?string} enctype
  * @return {FormBuilder}
  * @public
  */
 m_enctype__java_lang_String(enctype) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).enctype = enctype;
  return this;
 }
 /**
  * @override
  * @param {?string} method
  * @return {FormBuilder}
  * @public
  */
 m_method__java_lang_String(method) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).method = method;
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @return {FormBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /**
  * @override
  * @param {?string} target
  * @return {FormBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomFormBuilder.$clinit = () =>{};
  DomFormBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomFormBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomFormBuilder, 'org.gwtproject.dom.builder.client.DomFormBuilder');

FormBuilder.$markImplementor(DomFormBuilder);

exports = DomFormBuilder; 
//# sourceMappingURL=DomFormBuilder.js.map