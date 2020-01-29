goog.module('org.gwtproject.editor.client.annotation.IsDriver$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.annotation.IsDriver.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsDriver {
 /**
  * @param {?function():Class<?>} fn
  * @return {IsDriver}
  * @public
  */
 static $adapt(fn) {
  IsDriver.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  IsDriver.$clinit = () =>{};
  IsDriver.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_editor_client_annotation_IsDriver = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_annotation_IsDriver;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.annotation.IsDriver.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsDriver, 'org.gwtproject.editor.client.annotation.IsDriver');

IsDriver.$markImplementor(/** @type {Function} */ (IsDriver));

exports = IsDriver; 
//# sourceMappingURL=IsDriver.js.map