goog.module('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<QuoteBuilder>}
 */
class QuoteBuilder {
 /**
  * @abstract
  * @param {SafeUri} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(cite) {}
 /**
  * @abstract
  * @param {?string} cite
  * @return {QuoteBuilder}
  * @public
  */
 m_cite__java_lang_String(cite) {}
 /**
  * @public
  */
 static $clinit() {
  QuoteBuilder.$clinit = () =>{};
  QuoteBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ElementBuilderBase.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_QuoteBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_QuoteBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(QuoteBuilder, 'org.gwtproject.dom.builder.shared.QuoteBuilder');

QuoteBuilder.$markImplementor(/** @type {Function} */ (QuoteBuilder));

exports = QuoteBuilder; 
//# sourceMappingURL=QuoteBuilder.js.map