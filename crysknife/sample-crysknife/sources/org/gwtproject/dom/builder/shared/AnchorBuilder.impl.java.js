goog.module('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<AnchorBuilder>}
 */
class AnchorBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {AnchorBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @param {SafeUri} href
  * @return {AnchorBuilder}
  * @public
  */
 m_href__org_gwtproject_safehtml_shared_SafeUri(href) {}
 /**
  * @abstract
  * @param {?string} href
  * @return {AnchorBuilder}
  * @public
  */
 m_href__java_lang_String(href) {}
 /**
  * @abstract
  * @param {?string} hreflang
  * @return {AnchorBuilder}
  * @public
  */
 m_hreflang__java_lang_String(hreflang) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {AnchorBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @param {?string} rel
  * @return {AnchorBuilder}
  * @public
  */
 m_rel__java_lang_String(rel) {}
 /**
  * @abstract
  * @param {?string} target
  * @return {AnchorBuilder}
  * @public
  */
 m_target__java_lang_String(target) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {AnchorBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @public
  */
 static $clinit() {
  AnchorBuilder.$clinit = () =>{};
  AnchorBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_AnchorBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_AnchorBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnchorBuilder, 'org.gwtproject.dom.builder.shared.AnchorBuilder');

AnchorBuilder.$markImplementor(/** @type {Function} */ (AnchorBuilder));

exports = AnchorBuilder; 
//# sourceMappingURL=AnchorBuilder.js.map