goog.module('org.gwtproject.dom.builder.shared.ModBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ModBuilder>}
 */
class ModBuilder {
 /**
  * @abstract
  * @param {SafeUri} cite
  * @return {ModBuilder}
  * @public
  */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(cite) {}
 /**
  * @abstract
  * @param {?string} cite
  * @return {ModBuilder}
  * @public
  */
 m_cite__java_lang_String(cite) {}
 /**
  * @abstract
  * @param {?string} dateTime
  * @return {ModBuilder}
  * @public
  */
 m_dateTime__java_lang_String(dateTime) {}
 /**
  * @public
  */
 static $clinit() {
  ModBuilder.$clinit = () =>{};
  ModBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ModBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ModBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ModBuilder, 'org.gwtproject.dom.builder.shared.ModBuilder');

ModBuilder.$markImplementor(/** @type {Function} */ (ModBuilder));

exports = ModBuilder; 
//# sourceMappingURL=ModBuilder.js.map