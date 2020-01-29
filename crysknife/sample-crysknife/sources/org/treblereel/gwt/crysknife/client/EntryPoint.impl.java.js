goog.module('org.treblereel.gwt.crysknife.client.EntryPoint$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EntryPoint {
 /**
  * @param {?function():Class<?>} fn
  * @return {EntryPoint}
  * @public
  */
 static $adapt(fn) {
  EntryPoint.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  EntryPoint.$clinit = () =>{};
  EntryPoint.$loadModules();
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
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_EntryPoint = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_EntryPoint;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EntryPoint, 'org.treblereel.gwt.crysknife.client.EntryPoint');

EntryPoint.$markImplementor(/** @type {Function} */ (EntryPoint));

exports = EntryPoint; 
//# sourceMappingURL=EntryPoint.js.map