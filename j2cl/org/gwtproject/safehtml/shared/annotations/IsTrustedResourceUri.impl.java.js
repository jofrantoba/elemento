goog.module('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsTrustedResourceUri {
 /**
  * @param {?function():Class<?>} fn
  * @return {IsTrustedResourceUri}
  * @public
  */
 static $adapt(fn) {
  IsTrustedResourceUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  IsTrustedResourceUri.$clinit = () =>{};
  IsTrustedResourceUri.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsTrustedResourceUri, 'org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri');

IsTrustedResourceUri.$markImplementor(/** @type {Function} */ (IsTrustedResourceUri));

exports = IsTrustedResourceUri; 
//# sourceMappingURL=IsTrustedResourceUri.js.map