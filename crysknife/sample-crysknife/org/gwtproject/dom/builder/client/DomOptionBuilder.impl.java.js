goog.module('org.gwtproject.dom.builder.client.DomOptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const OptionBuilder = goog.require('org.gwtproject.dom.builder.shared.OptionBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<OptionBuilder, Object>}
 * @implements {OptionBuilder}
  */
class DomOptionBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomOptionBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomOptionBuilder.$clinit();
  let $instance = new DomOptionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomOptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomOptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_defaultSelected__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultSelected = true;
  return this;
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {?string} label
  * @return {OptionBuilder}
  * @public
  */
 m_label__java_lang_String(label) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).label = label;
  return this;
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_selected__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).selected = true;
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {OptionBuilder}
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
  DomOptionBuilder.$clinit = () =>{};
  DomOptionBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomOptionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomOptionBuilder, 'org.gwtproject.dom.builder.client.DomOptionBuilder');

OptionBuilder.$markImplementor(DomOptionBuilder);

exports = DomOptionBuilder; 
//# sourceMappingURL=DomOptionBuilder.js.map