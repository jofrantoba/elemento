goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeUriCastCheck {
 /**
  * @param {?function():Class<?>} fn
  * @return {SuppressIsSafeUriCastCheck}
  * @public
  */
 static $adapt(fn) {
  SuppressIsSafeUriCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SuppressIsSafeUriCastCheck.$clinit = () =>{};
  SuppressIsSafeUriCastCheck.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsSafeUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck');

SuppressIsSafeUriCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsSafeUriCastCheck));

exports = SuppressIsSafeUriCastCheck; 
//# sourceMappingURL=SuppressIsSafeUriCastCheck.js.map