goog.module('org.gwtproject.dom.builder.client.DomAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const AreaBuilder = goog.require('org.gwtproject.dom.builder.shared.AreaBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<AreaBuilder, Object>}
 * @implements {AreaBuilder}
  */
class DomAreaBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomAreaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomAreaBuilder.$clinit();
  let $instance = new DomAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {AreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /**
  * @override
  * @param {?string} alt
  * @return {AreaBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).alt = alt;
  return this;
 }
 /**
  * @override
  * @param {?string} coords
  * @return {AreaBuilder}
  * @public
  */
 m_coords__java_lang_String(coords) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).coords = coords;
  return this;
 }
 /**
  * @override
  * @param {?string} href
  * @return {AreaBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /**
  * @override
  * @param {?string} shape
  * @return {AreaBuilder}
  * @public
  */
 m_shape__java_lang_String(shape) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).shape = shape;
  return this;
 }
 /**
  * @override
  * @param {?string} target
  * @return {AreaBuilder}
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
  DomAreaBuilder.$clinit = () =>{};
  DomAreaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomAreaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomAreaBuilder, 'org.gwtproject.dom.builder.client.DomAreaBuilder');

AreaBuilder.$markImplementor(DomAreaBuilder);

exports = DomAreaBuilder; 
//# sourceMappingURL=DomAreaBuilder.js.map