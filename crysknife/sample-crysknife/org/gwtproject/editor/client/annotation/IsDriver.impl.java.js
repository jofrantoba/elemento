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
 /** @return {IsDriver} */
 static $adapt(/** ?function():Class<?> */ fn) {
  IsDriver.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDriver.$clinit = () =>{};
  IsDriver.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_annotation_IsDriver = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_annotation_IsDriver;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.annotation.IsDriver.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsDriver, 'org.gwtproject.editor.client.annotation.IsDriver');

IsDriver.$markImplementor(/** @type {Function} */ (IsDriver));

exports = IsDriver; 
//# sourceMappingURL=IsDriver.js.map