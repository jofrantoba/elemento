goog.module('org.gwtproject.safehtml.shared.annotations.IsSafeHtml$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.IsSafeHtml.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsSafeHtml {
 /**
  * @param {?function():Class<?>} fn
  * @return {IsSafeHtml}
  * @public
  */
 static $adapt(fn) {
  IsSafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  IsSafeHtml.$clinit = () =>{};
  IsSafeHtml.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeHtml = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeHtml;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.IsSafeHtml.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsSafeHtml, 'org.gwtproject.safehtml.shared.annotations.IsSafeHtml');

IsSafeHtml.$markImplementor(/** @type {Function} */ (IsSafeHtml));

exports = IsSafeHtml; 
//# sourceMappingURL=IsSafeHtml.js.map