goog.module('org.gwtproject.dom.builder.shared.HtmlIFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const IFrameBuilder = goog.require('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<IFrameBuilder>}
 * @implements {IFrameBuilder}
  */
class HtmlIFrameBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlIFrameBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlIFrameBuilder.$clinit();
  let $instance = new HtmlIFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlIFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlIFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {number} frameBorder
  * @return {IFrameBuilder}
  * @public
  */
 m_frameBorder__int(frameBorder) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("frameBorder", frameBorder), IFrameBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {HtmlIFrameBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isChildElementSupported__() {
  return false;
 }
 /**
  * @override
  * @param {number} marginHeight
  * @return {IFrameBuilder}
  * @public
  */
 m_marginHeight__int(marginHeight) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginHeight", marginHeight), IFrameBuilder));
 }
 /**
  * @override
  * @param {number} marginWidth
  * @return {IFrameBuilder}
  * @public
  */
 m_marginWidth__int(marginWidth) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginWidth", marginWidth), IFrameBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {IFrameBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), IFrameBuilder));
 }
 /**
  * @override
  * @return {IFrameBuilder}
  * @public
  */
 m_noResize__() {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("noresize", "noresize"), IFrameBuilder));
 }
 /**
  * @override
  * @param {?string} scrolling
  * @return {IFrameBuilder}
  * @public
  */
 m_scrolling__java_lang_String(scrolling) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("scrolling", scrolling), IFrameBuilder));
 }
 /**
  * @override
  * @param {SafeUri} src
  * @return {IFrameBuilder}
  * @public
  */
 m_src__org_gwtproject_safehtml_shared_SafeUri(src) {
  return this.m_src__java_lang_String(src.m_asString__());
 }
 /**
  * @override
  * @param {?string} src
  * @return {IFrameBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  return /**@type {IFrameBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), IFrameBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {HtmlIFrameBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlIFrameBuilder.$clinit = () =>{};
  HtmlIFrameBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlIFrameBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HtmlIFrameBuilder, 'org.gwtproject.dom.builder.shared.HtmlIFrameBuilder');

IFrameBuilder.$markImplementor(HtmlIFrameBuilder);

exports = HtmlIFrameBuilder; 
//# sourceMappingURL=HtmlIFrameBuilder.js.map