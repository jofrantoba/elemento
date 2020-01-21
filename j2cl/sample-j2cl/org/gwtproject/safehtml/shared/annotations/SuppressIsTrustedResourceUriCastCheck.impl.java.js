goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsTrustedResourceUriCastCheck {
 /**
  * @param {?function():Class<?>} fn
  * @return {SuppressIsTrustedResourceUriCastCheck}
  * @public
  */
 static $adapt(fn) {
  SuppressIsTrustedResourceUriCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SuppressIsTrustedResourceUriCastCheck.$clinit = () =>{};
  SuppressIsTrustedResourceUriCastCheck.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsTrustedResourceUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck');

SuppressIsTrustedResourceUriCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsTrustedResourceUriCastCheck));

exports = SuppressIsTrustedResourceUriCastCheck; 
//# sourceMappingURL=SuppressIsTrustedResourceUriCastCheck.js.map