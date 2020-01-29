goog.module('org.gwtproject.dom.builder.shared.HtmlAnchorBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnchorBuilder = goog.require('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<AnchorBuilder>}
 * @implements {AnchorBuilder}
  */
class HtmlAnchorBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlAnchorBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlAnchorBuilder.$clinit();
  let $instance = new HtmlAnchorBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlAnchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlAnchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {AnchorBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), AnchorBuilder));
 }
 /**
  * @override
  * @param {SafeUri} href
  * @return {AnchorBuilder}
  * @public
  */
 m_href__org_gwtproject_safehtml_shared_SafeUri(href) {
  return this.m_href__java_lang_String(href.m_asString__());
 }
 /**
  * @override
  * @param {?string} href
  * @return {AnchorBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), AnchorBuilder));
 }
 /**
  * @override
  * @param {?string} hreflang
  * @return {AnchorBuilder}
  * @public
  */
 m_hreflang__java_lang_String(hreflang) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("hreflang", hreflang), AnchorBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {AnchorBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), AnchorBuilder));
 }
 /**
  * @override
  * @param {?string} rel
  * @return {AnchorBuilder}
  * @public
  */
 m_rel__java_lang_String(rel) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rel", rel), AnchorBuilder));
 }
 /**
  * @override
  * @param {?string} target
  * @return {AnchorBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), AnchorBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {AnchorBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  return /**@type {AnchorBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), AnchorBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlAnchorBuilder.$clinit = () =>{};
  HtmlAnchorBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlAnchorBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlAnchorBuilder, 'org.gwtproject.dom.builder.shared.HtmlAnchorBuilder');

AnchorBuilder.$markImplementor(HtmlAnchorBuilder);

exports = HtmlAnchorBuilder; 
//# sourceMappingURL=HtmlAnchorBuilder.js.map