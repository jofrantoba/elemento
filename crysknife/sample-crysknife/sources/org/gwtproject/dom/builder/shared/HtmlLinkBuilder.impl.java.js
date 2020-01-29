goog.module('org.gwtproject.dom.builder.shared.HtmlLinkBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LinkBuilder = goog.require('org.gwtproject.dom.builder.shared.LinkBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LinkBuilder>}
 * @implements {LinkBuilder}
  */
class HtmlLinkBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlLinkBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlLinkBuilder.$clinit();
  let $instance = new HtmlLinkBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLinkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlLinkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @return {LinkBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} href
  * @return {LinkBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} hreflang
  * @return {LinkBuilder}
  * @public
  */
 m_hreflang__java_lang_String(hreflang) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("hreflang", hreflang), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} media
  * @return {LinkBuilder}
  * @public
  */
 m_media__java_lang_String(media) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("media", media), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} rel
  * @return {LinkBuilder}
  * @public
  */
 m_rel__java_lang_String(rel) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rel", rel), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} target
  * @return {LinkBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), LinkBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {LinkBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  return /**@type {LinkBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), LinkBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlLinkBuilder.$clinit = () =>{};
  HtmlLinkBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlLinkBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLinkBuilder, 'org.gwtproject.dom.builder.shared.HtmlLinkBuilder');

LinkBuilder.$markImplementor(HtmlLinkBuilder);

exports = HtmlLinkBuilder; 
//# sourceMappingURL=HtmlLinkBuilder.js.map