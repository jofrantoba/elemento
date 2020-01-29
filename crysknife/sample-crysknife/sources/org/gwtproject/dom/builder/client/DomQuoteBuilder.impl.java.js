goog.module('org.gwtproject.dom.builder.client.DomQuoteBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const QuoteBuilder = goog.require('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<QuoteBuilder, Object>}
 * @implements {QuoteBuilder}
  */
class DomQuoteBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomQuoteBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomQuoteBuilder.$clinit();
  let $instance = new DomQuoteBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomQuoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomQuoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {SafeUri} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(cite) {
  $Overlay.m_setCite__$devirt__org_gwtproject_dom_client_QuoteElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), cite);
  return this;
 }
 /**
  * @override
  * @param {?string} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__java_lang_String(cite) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cite = cite;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomQuoteBuilder.$clinit = () =>{};
  DomQuoteBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomQuoteBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomQuoteBuilder, 'org.gwtproject.dom.builder.client.DomQuoteBuilder');

QuoteBuilder.$markImplementor(DomQuoteBuilder);

exports = DomQuoteBuilder; 
//# sourceMappingURL=DomQuoteBuilder.js.map