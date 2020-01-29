goog.module('org.gwtproject.dom.builder.shared.FormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FormBuilder>}
 */
class FormBuilder {
 /**
  * @abstract
  * @param {?string} acceptCharset
  * @return {FormBuilder}
  * @public
  */
 m_acceptCharset__java_lang_String(acceptCharset) {}
 /**
  * @abstract
  * @param {SafeUri} action
  * @return {FormBuilder}
  * @public
  */
 m_action__org_gwtproject_safehtml_shared_SafeUri(action) {}
 /**
  * @abstract
  * @param {?string} action
  * @return {FormBuilder}
  * @public
  */
 m_action__java_lang_String(action) {}
 /**
  * @abstract
  * @param {?string} enctype
  * @return {FormBuilder}
  * @public
  */
 m_enctype__java_lang_String(enctype) {}
 /**
  * @abstract
  * @param {?string} method
  * @return {FormBuilder}
  * @public
  */
 m_method__java_lang_String(method) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {FormBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @param {?string} target
  * @return {FormBuilder}
  * @public
  */
 m_target__java_lang_String(target) {}
 /**
  * @public
  */
 static $clinit() {
  FormBuilder.$clinit = () =>{};
  FormBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_FormBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FormBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormBuilder, 'org.gwtproject.dom.builder.shared.FormBuilder');

FormBuilder.$markImplementor(/** @type {Function} */ (FormBuilder));

exports = FormBuilder; 
//# sourceMappingURL=FormBuilder.js.map