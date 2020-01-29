goog.module('org.gwtproject.dom.builder.client.DomMetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const MetaBuilder = goog.require('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<MetaBuilder, Object>}
 * @implements {MetaBuilder}
  */
class DomMetaBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomMetaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomMetaBuilder.$clinit();
  let $instance = new DomMetaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomMetaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomMetaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} content
  * @return {MetaBuilder}
  * @public
  */
 m_content__java_lang_String(content) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).content = content;
  return this;
 }
 /**
  * @override
  * @param {?string} httpEquiv
  * @return {MetaBuilder}
  * @public
  */
 m_httpEquiv__java_lang_String(httpEquiv) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).httpEquiv = httpEquiv;
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @return {MetaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomMetaBuilder.$clinit = () =>{};
  DomMetaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomMetaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomMetaBuilder, 'org.gwtproject.dom.builder.client.DomMetaBuilder');

MetaBuilder.$markImplementor(DomMetaBuilder);

exports = DomMetaBuilder; 
//# sourceMappingURL=DomMetaBuilder.js.map