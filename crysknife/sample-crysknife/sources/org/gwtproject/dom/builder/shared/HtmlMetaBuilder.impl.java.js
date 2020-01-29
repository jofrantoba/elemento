goog.module('org.gwtproject.dom.builder.shared.HtmlMetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const MetaBuilder = goog.require('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<MetaBuilder>}
 * @implements {MetaBuilder}
  */
class HtmlMetaBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlMetaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlMetaBuilder.$clinit();
  let $instance = new HtmlMetaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlMetaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlMetaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} content
  * @return {MetaBuilder}
  * @public
  */
 m_content__java_lang_String(content) {
  return /**@type {MetaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("content", content), MetaBuilder));
 }
 /**
  * @override
  * @param {?string} httpEquiv
  * @return {MetaBuilder}
  * @public
  */
 m_httpEquiv__java_lang_String(httpEquiv) {
  return /**@type {MetaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("httpEquiv", httpEquiv), MetaBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {MetaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {MetaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), MetaBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlMetaBuilder.$clinit = () =>{};
  HtmlMetaBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlMetaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlMetaBuilder, 'org.gwtproject.dom.builder.shared.HtmlMetaBuilder');

MetaBuilder.$markImplementor(HtmlMetaBuilder);

exports = HtmlMetaBuilder; 
//# sourceMappingURL=HtmlMetaBuilder.js.map