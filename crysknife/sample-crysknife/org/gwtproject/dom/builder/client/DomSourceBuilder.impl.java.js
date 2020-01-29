goog.module('org.gwtproject.dom.builder.client.DomSourceBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const SourceBuilder = goog.require('org.gwtproject.dom.builder.shared.SourceBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<SourceBuilder, Object>}
 * @implements {SourceBuilder}
  */
class DomSourceBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomSourceBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomSourceBuilder.$clinit();
  let $instance = new DomSourceBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomSourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomSourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} url
  * @return {SourceBuilder}
  * @public
  */
 m_src__java_lang_String(url) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = url;
  return this;
 }
 /**
  * @override
  * @param {?string} type
  * @return {SourceBuilder}
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
  DomSourceBuilder.$clinit = () =>{};
  DomSourceBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomSourceBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomSourceBuilder, 'org.gwtproject.dom.builder.client.DomSourceBuilder');

SourceBuilder.$markImplementor(DomSourceBuilder);

exports = DomSourceBuilder; 
//# sourceMappingURL=DomSourceBuilder.js.map