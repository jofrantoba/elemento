goog.module('org.gwtproject.resources.client.CssResource.Import$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Import {
 /**
  * @abstract
  * @return {Array<Class<?>>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  Import.$clinit = () =>{};
  Import.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource_Import = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Import;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Import, 'org.gwtproject.resources.client.CssResource$Import');

Import.$markImplementor(/** @type {Function} */ (Import));

exports = Import; 
//# sourceMappingURL=CssResource$Import.js.map