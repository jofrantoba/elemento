goog.module('org.gwtproject.dom.builder.shared.HtmlQuoteBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const QuoteBuilder = goog.require('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<QuoteBuilder>}
 * @implements {QuoteBuilder}
  */
class HtmlQuoteBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlQuoteBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlQuoteBuilder.$clinit();
  let $instance = new HtmlQuoteBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlQuoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlQuoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {SafeUri} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(cite) {
  return this.m_cite__java_lang_String(cite.m_asString__());
 }
 /**
  * @override
  * @param {?string} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__java_lang_String(cite) {
  return /**@type {QuoteBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("cite", cite), QuoteBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlQuoteBuilder.$clinit = () =>{};
  HtmlQuoteBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlQuoteBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlQuoteBuilder, 'org.gwtproject.dom.builder.shared.HtmlQuoteBuilder');

QuoteBuilder.$markImplementor(HtmlQuoteBuilder);

exports = HtmlQuoteBuilder; 
//# sourceMappingURL=HtmlQuoteBuilder.js.map