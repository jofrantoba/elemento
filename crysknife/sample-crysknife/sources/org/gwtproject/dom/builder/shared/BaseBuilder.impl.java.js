goog.module('org.gwtproject.dom.builder.shared.BaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BaseBuilder>}
 */
class BaseBuilder {
 /**
  * @abstract
  * @param {?string} href
  * @return {BaseBuilder}
  * @public
  */
 m_href__java_lang_String(href) {}
 /**
  * @abstract
  * @param {?string} target
  * @return {BaseBuilder}
  * @public
  */
 m_target__java_lang_String(target) {}
 /**
  * @public
  */
 static $clinit() {
  BaseBuilder.$clinit = () =>{};
  BaseBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_BaseBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BaseBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BaseBuilder, 'org.gwtproject.dom.builder.shared.BaseBuilder');

BaseBuilder.$markImplementor(/** @type {Function} */ (BaseBuilder));

exports = BaseBuilder; 
//# sourceMappingURL=BaseBuilder.js.map