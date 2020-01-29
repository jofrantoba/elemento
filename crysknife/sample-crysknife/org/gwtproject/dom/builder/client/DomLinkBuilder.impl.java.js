goog.module('org.gwtproject.dom.builder.client.DomLinkBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const LinkBuilder = goog.require('org.gwtproject.dom.builder.shared.LinkBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<LinkBuilder, Object>}
 * @implements {LinkBuilder}
  */
class DomLinkBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomLinkBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomLinkBuilder.$clinit();
  let $instance = new DomLinkBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomLinkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomLinkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @return {LinkBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {?string} href
  * @return {LinkBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /**
  * @override
  * @param {?string} hreflang
  * @return {LinkBuilder}
  * @public
  */
 m_hreflang__java_lang_String(hreflang) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).hreflang = hreflang;
  return this;
 }
 /**
  * @override
  * @param {?string} media
  * @return {LinkBuilder}
  * @public
  */
 m_media__java_lang_String(media) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).media = media;
  return this;
 }
 /**
  * @override
  * @param {?string} rel
  * @return {LinkBuilder}
  * @public
  */
 m_rel__java_lang_String(rel) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rel = rel;
  return this;
 }
 /**
  * @override
  * @param {?string} target
  * @return {LinkBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 /**
  * @override
  * @param {?string} type
  * @return {LinkBuilder}
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
  DomLinkBuilder.$clinit = () =>{};
  DomLinkBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomLinkBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomLinkBuilder, 'org.gwtproject.dom.builder.client.DomLinkBuilder');

LinkBuilder.$markImplementor(DomLinkBuilder);

exports = DomLinkBuilder; 
//# sourceMappingURL=DomLinkBuilder.js.map