goog.module('org.gwtproject.dom.builder.shared.HtmlAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AreaBuilder = goog.require('org.gwtproject.dom.builder.shared.AreaBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<AreaBuilder>}
 * @implements {AreaBuilder}
  */
class HtmlAreaBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlAreaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlAreaBuilder.$clinit();
  let $instance = new HtmlAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {AreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), AreaBuilder));
 }
 /**
  * @override
  * @param {?string} alt
  * @return {AreaBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), AreaBuilder));
 }
 /**
  * @override
  * @param {?string} coords
  * @return {AreaBuilder}
  * @public
  */
 m_coords__java_lang_String(coords) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("coords", coords), AreaBuilder));
 }
 /**
  * @override
  * @param {?string} href
  * @return {AreaBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), AreaBuilder));
 }
 /**
  * @override
  * @param {?string} shape
  * @return {AreaBuilder}
  * @public
  */
 m_shape__java_lang_String(shape) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("shape", shape), AreaBuilder));
 }
 /**
  * @override
  * @param {?string} target
  * @return {AreaBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  return /**@type {AreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), AreaBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlAreaBuilder.$clinit = () =>{};
  HtmlAreaBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlAreaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlAreaBuilder, 'org.gwtproject.dom.builder.shared.HtmlAreaBuilder');

AreaBuilder.$markImplementor(HtmlAreaBuilder);

exports = HtmlAreaBuilder; 
//# sourceMappingURL=HtmlAreaBuilder.js.map