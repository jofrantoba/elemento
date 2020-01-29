goog.module('org.gwtproject.dom.builder.shared.HtmlFrameSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FrameSetBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<FrameSetBuilder>}
 * @implements {FrameSetBuilder}
  */
class HtmlFrameSetBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlFrameSetBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlFrameSetBuilder.$clinit();
  let $instance = new HtmlFrameSetBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFrameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlFrameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} cols
  * @return {FrameSetBuilder}
  * @public
  */
 m_cols__java_lang_String(cols) {
  return /**@type {FrameSetBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("cols", cols), FrameSetBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {FrameSetBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @param {?string} rows
  * @return {FrameSetBuilder}
  * @public
  */
 m_rows__java_lang_String(rows) {
  return /**@type {FrameSetBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rows", rows), FrameSetBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {FrameSetBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlFrameSetBuilder.$clinit = () =>{};
  HtmlFrameSetBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlFrameSetBuilder;
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
$Util.$setClassMetadata(HtmlFrameSetBuilder, 'org.gwtproject.dom.builder.shared.HtmlFrameSetBuilder');

FrameSetBuilder.$markImplementor(HtmlFrameSetBuilder);

exports = HtmlFrameSetBuilder; 
//# sourceMappingURL=HtmlFrameSetBuilder.js.map