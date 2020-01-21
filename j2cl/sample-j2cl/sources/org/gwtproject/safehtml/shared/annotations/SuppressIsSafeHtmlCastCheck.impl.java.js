goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeHtmlCastCheck {
 /**
  * @param {?function():Class<?>} fn
  * @return {SuppressIsSafeHtmlCastCheck}
  * @public
  */
 static $adapt(fn) {
  SuppressIsSafeHtmlCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SuppressIsSafeHtmlCastCheck.$clinit = () =>{};
  SuppressIsSafeHtmlCastCheck.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsSafeHtmlCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck');

SuppressIsSafeHtmlCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsSafeHtmlCastCheck));

exports = SuppressIsSafeHtmlCastCheck; 
//# sourceMappingURL=SuppressIsSafeHtmlCastCheck.js.map