goog.module('org.gwtproject.dom.builder.shared.HtmlFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FrameBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<FrameBuilder>}
 * @implements {FrameBuilder}
  */
class HtmlFrameBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlFrameBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlFrameBuilder.$clinit();
  let $instance = new HtmlFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {number} frameBorder
  * @return {FrameBuilder}
  * @public
  */
 m_frameBorder__int(frameBorder) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("frameBorder", frameBorder), FrameBuilder));
 }
 /**
  * @override
  * @param {SafeUri} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(longDesc) {
  return this.m_longDesc__java_lang_String(longDesc.m_asString__());
 }
 /**
  * @override
  * @param {?string} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__java_lang_String(longDesc) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("longDesc", longDesc), FrameBuilder));
 }
 /**
  * @override
  * @param {number} marginHeight
  * @return {FrameBuilder}
  * @public
  */
 m_marginHeight__int(marginHeight) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginHeight", marginHeight), FrameBuilder));
 }
 /**
  * @override
  * @param {number} marginWidth
  * @return {FrameBuilder}
  * @public
  */
 m_marginWidth__int(marginWidth) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginWidth", marginWidth), FrameBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {FrameBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), FrameBuilder));
 }
 /**
  * @override
  * @return {FrameBuilder}
  * @public
  */
 m_noResize__() {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("noresize", "noresize"), FrameBuilder));
 }
 /**
  * @override
  * @param {?string} scrolling
  * @return {FrameBuilder}
  * @public
  */
 m_scrolling__java_lang_String(scrolling) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("scrolling", scrolling), FrameBuilder));
 }
 /**
  * @override
  * @param {SafeUri} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__org_gwtproject_safehtml_shared_SafeUri(src) {
  return this.m_src__java_lang_String(src.m_asString__());
 }
 /**
  * @override
  * @param {?string} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  return /**@type {FrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), FrameBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlFrameBuilder.$clinit = () =>{};
  HtmlFrameBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlFrameBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlFrameBuilder, 'org.gwtproject.dom.builder.shared.HtmlFrameBuilder');

FrameBuilder.$markImplementor(HtmlFrameBuilder);

exports = HtmlFrameBuilder; 
//# sourceMappingURL=HtmlFrameBuilder.js.map