goog.module('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ScriptBuilder>}
 */
class ScriptBuilder {
 /**
  * @abstract
  * @param {?string} defer
  * @return {ScriptBuilder}
  * @public
  */
 m_defer__java_lang_String(defer) {}
 /**
  * @abstract
  * @param {?string} src
  * @return {ScriptBuilder}
  * @public
  */
 m_src__java_lang_String(src) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {ScriptBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @public
  */
 static $clinit() {
  ScriptBuilder.$clinit = () =>{};
  ScriptBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ScriptBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ScriptBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ScriptBuilder, 'org.gwtproject.dom.builder.shared.ScriptBuilder');

ScriptBuilder.$markImplementor(/** @type {Function} */ (ScriptBuilder));

/** @public {?string} @const */
ScriptBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_ScriptBuilder = "Script elements do not support html.  Use text() instead.";

exports = ScriptBuilder; 
//# sourceMappingURL=ScriptBuilder.js.map